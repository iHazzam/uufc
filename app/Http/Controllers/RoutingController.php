<?php

namespace App\Http\Controllers;

use App\Snapshot;
use Illuminate\Support\Facades\DB;
use App\Fighter;
use Carbon\Carbon;
use Illuminate\Support\Facades\Response;
class RoutingController extends Controller
{
    //
    public function getHome()
    {
        return view('Rankings');
    }

    public function getWC($wc)
    {
        $fighters = null;

            $fighters = Fighter::where(strtolower($wc), '!=', 0)->select('id', 'name', strtolower($wc) . ' as rp', 'pic', 'url')->orderBy(strtolower($wc), 'desc')->get();
            $threeYearsAgo = Carbon::tomorrow()->subYear(3);
            $today = Carbon::today();
            foreach ($fighters as $key => $fighter) {
                $fighter['rank'] = $key + 1;
                $fish = [];
                $lala = DB::table('snapshots')->whereBetween('date', [$threeYearsAgo, $today])->where('weightclass','=',strtolower($wc))->where('fighter_id', '=', $fighter->id)->get();
                foreach ($lala as $f) {
                    array_push($fish, ucfirst($f->result));
                }
                $fighter['fights'] = $fish;
            }
        return $fighters;
    }
    public function getFH(Fighter $fid)
    {
        $return = array();
        $return['name'] = $fid->name;
        $snaps = Snapshot::where('fighter_id','=',$fid->id)->get();
        $snaps_per_wc = array();
        foreach($snaps as $snap)
        {
            if(!array_key_exists($snap->weightclass, $snaps_per_wc))
            {
                $snaps_per_wc[$snap->weightclass] = array();
            }
            array_push($snaps_per_wc[$snap->weightclass],$snap);
        }
        $return['series'] = array();
        $seriesid = 0;
        foreach($snaps_per_wc as $key=>$val)
        {
            $dataarr = array();
            $rankhistory = DB::table($key . "_history")->get();
            foreach($rankhistory as $h)
            {
                foreach($h as $k=>$i)
                {
                    if($i == $fid->id)
                    {
                        array_push($dataarr,[strtotime($h->date)*1000,$k]);
                    }
                }
            }
            array_push($return['series'],["id"=> $seriesid, "name" => strtoupper($key) . " Ranking" ,"data"=>$dataarr]);
            $data2 = array();
            foreach($val as $v)
            {
                $result = null;
                if($v->result == "w")
                {
                    $result = "Win";
                }
                elseif ($v->result == "l")
                {
                    $result = "Loss";
                }
                elseif ($v->result == "d")
                {
                    $result = "Draw";
                }
                elseif($v->result == "n")
                {
                    $result = "No Contest";
                }
                if($v->id%2 == 0)
                {
                    $vsid = $v->id - 1;
                }
                else{
                    $vsid = $v->id + 1;
                }
                $versussnap = Snapshot::where('id','=',$vsid)->first();
                $change = $v->rp_change;
                if($change > 0)
                {
                    $change = "+".$change;
                }

                $text = strtoupper($v->weightclass) . " fight: " . $result . " vs " . $versussnap->fighter()->first()->name . "(" . $change . " RP)";


                array_push($data2,["x" => strtotime($v->date)*1000, "title" => $v->result, "text" => $text]);
            }
            $name = strtoupper($key) . " Bout";
            array_push($return['series'], ["type" => 'flags', "name"=>$name,"data" => $data2, "shape" => "flag"]);
            $seriesid++;
        }
        //add another series for fights occurring
        $fightsflags = array();
       return Response::json($return,200,[],JSON_NUMERIC_CHECK);
    }
    public function getWCH($wc)
    {
        $return = array();
        $return['division'] = strtoupper($wc);
        $return['series'] = array();
        $seriesid = 0;

        $dataarr = array();
        $rankhistory = DB::table($wc . "_history")->get();
//        $date = $rankhistory->
        foreach($rankhistory as $h)
        {
            $date = $h->date;
             unset($h->date);
             foreach($h as $k=>$i) {
                 if ($i != null)
                 {
                     if(!array_key_exists($i, $dataarr))
                     {
                         $dataarr[$i] = array();
                     }
                     array_push($dataarr[$i],[strtotime($date)*1000,$k]);
                 }
             }
        }
        foreach($dataarr as $keyf => $valf)
        {
            array_push($return['series'],["name" => Fighter::where('id','=', $keyf)->first()->name,"data"=>$valf]);
        }

       return Response::json($return,200,[],JSON_NUMERIC_CHECK);
    }

}
