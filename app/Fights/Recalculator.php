<?php
namespace App\Fights;
use App\Fighter;
use App\Snapshot;
use App\Champion;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Recalculator
{
    protected $parse;
    public function __construct(Parse $parse)
    {
        $this->parse = $parse;
    }

    public function recalculateFighterRpByWcGivenDate(Fighter $fighter, $wc, Carbon $date)
    {
        //todo:this method
        $snapshots = Snapshot::where('date','>',$date->subYears(3))->where('weightclass','=',$wc)->where('fighter_id','=',$fighter->id)->get();

        $rp = 0;

        foreach($snapshots as $snapshot)
        {
            $snapdate = Carbon::createFromFormat('Y-m-d',$snapshot->date);
            $ayearago = $date->subYear();
            $twoyearsago = $date->subYears(2);
            $threeyearsago = $date->subYears(3);
            if($snapdate->between($threeyearsago, $twoyearsago))
            {
                $rp = ($rp + ((1/3) * $snapshot->rp_change));
            }
            elseif($snapdate->between($twoyearsago,$ayearago))
            {
                $rp = ($rp + ((1/2) * $snapshot->rp_change));
            }
            else{
                $rp = $rp + $snapshot->rp_change;
            }
        }
        return $rp;
    }

    public function createSnapsSinceLast()
    {
        $date_of_last_update = DB::table('updated')->latest('updated')->first();
        $fights = DB::connection('duck')->table('fights_for_cards')->where('Date','>',$date_of_last_update->updated)->where('Date','<=',Carbon::today())->get();

        foreach ($fights as $fight)
        {
            $this->createSnapsForFight($fight);
        }

        DB::table('updated')->insert(
            ['updated' => Carbon::today()]
        );
    }

    public function createSnapsForFight($fight)
    {
        $wc = $this->parse->wordsToAbbreviation($fight->WeightClass);
        if ($wc !== null) //Only fights at qualifying weight classes in the UFC affect the rankings (no catchweight)
        {
            try {
                $fighter1 = Fighter::where('name', '=', $fight->FighterA_Name)->firstOrFail();
                try {
                    $fighter2 = Fighter::where('name', '=', $fight->FighterB_Name)->firstOrFail();
                    //at this point, both exist
                } catch (ModelNotFoundException $e3) {
                    //case fighter A exists, fighter B does not exist
                    $fighter2 = new Fighter();
                    $fighter2->name = $fight->FighterB_Name;
                    $fighter_info = DB::connection('duck')->table('fighters')->select(["PicHeadshot", "WikiURL"])->where('Name', '=', $fighter2->name)->first();
                    if ($fighter_info != null) {
                        $fighter2->pic = "http://fightdash.duckwizzle.com/Img/Headshots/" . $fighter_info->PicHeadshot;
                        $fighter2->url = $fighter_info->WikiURL;
                    }

                }
            } catch (ModelNotFoundException $e) {
                $fighter1 = new Fighter();
                $fighter1->name = $fight->FighterA_Name;
                $fighter_info = DB::connection('duck')->table('fighters')->select(["PicHeadshot", "WikiURL"])->where('Name', '=', $fighter1->name)->first();
                if ($fighter_info != null) {
                    $fighter1->pic = "http://fightdash.duckwizzle.com/Img/Headshots/" . $fighter_info->PicHeadshot;
                    $fighter1->url = $fighter_info->WikiURL;
                }
                try {
                    $fighter2 = Fighter::where('name', '=', $fight->FighterB_Name)->firstOrFail();
                    //here they both exist

                } catch (ModelNotFoundException $e2) {
                    //case: neither fighter exists
                    $fighter2 = new Fighter();
                    $fighter2->name = $fight->FighterB_Name;
                    $fighter_info = DB::connection('duck')->table('fighters')->select(["PicHeadshot", "WikiURL"])->where('Name', '=', $fighter2->name)->first();
                    if ($fighter_info != null) {
                        $fighter2->pic = "http://fightdash.duckwizzle.com/Img/Headshots/" . $fighter_info->PicHeadshot;
                        $fighter2->url = $fighter_info->WikiURL;
                    }
                }
            }
            //they will exist or be found by here!
            $fighter1->save();
            $fighter2->save();

            $date = Carbon::createFromFormat('Y-m-d', $fight->Date)->subDay(); //everything up until now...

            //recalculate fighter's current RP scores //will happen every day as well
            $fighter1->$wc = $this->recalculateFighterRpByWcGivenDate($fighter1, $wc, $date);
            $fighter2->$wc = $this->recalculateFighterRpByWcGivenDate($fighter2, $wc, $date);

            //convert result of fight into correct format, count draws/nc's
            $result_f1 = $this->parse->findOutResult($fight, 1);
            $result_f2 = $this->parse->findOutResult($fight, 2);
            if(($result_f1 || $result_f2) != null)
            {
                if ($result_f1 == "win") {
                    $fighter1->wins = $fighter1->wins + 1;
                } elseif ($result_f1 == "loss") {
                    $fighter1->losses = $fighter1->losses + 1;
                } elseif ($result_f1 == "draw") {
                    $fighter1->draws = $fighter1->draws + 1;
                }
                if ($result_f2 == "win") {
                    $fighter2->wins = $fighter2->wins + 1;
                } elseif ($result_f2 == "loss") {
                    $fighter2->losses = $fighter2->losses + 1;
                } elseif ($result_f2 == "draw") {
                    $fighter2->draws = $fighter2->draws + 1;
                }
                //find out fight win method
                $winmethod = $this->parse->findOutWinMethod($fight);

                //find out if there was a belt on the line
                $title = $this->parse->findOutIfForTitle($fight);
                $interim_title = $this->parse->findOutIfForInterimTitle($fight);
                //find out if there was a bonus
                $bonus = $this->parse->findOutIfBonus($fight);

                //create the "snapshot"
                $sn1 = new Snapshot();
                $sn1->fighter_id = $fighter1->id;
                $sn1->weightclass = $wc;
                $sn1->date = $fight->Date;
                $sn1->rp_change = $this->parse->findOutRPChange($fighter1->$wc, $fighter2->$wc, $result_f1, $winmethod, $bonus, $title, $interim_title);
                $sn1->result = $result_f1[0];

                $sn2 = new Snapshot();
                $sn2->fighter_id = $fighter2->id;
                $sn2->weightclass = $wc;
                $sn2->date = $fight->Date;
                $sn2->rp_change = $this->parse->findOutRPChange($fighter2->$wc, $fighter1->$wc, $result_f2, $winmethod, $bonus, $title, $interim_title);
                $sn2->result = $result_f2[0];
                //save them
                $sn1->save();
                $sn2->save();

                //update the fighter's points based on the new rank change
                $fighter1->save();
                $fighter2->save();
            }



        }

    }

}