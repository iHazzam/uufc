<?php

namespace App\Fights;
use Illuminate\Support\Facades\DB;
class Parse
{
    public function findOutIfForTitle($fight)
    {
        $pos = strpos($fight->Notes,"Championship");

        if($pos === false) {
            // string needle NOT found in haystack
            return false;
        }
        else {
            $pos2 = strpos($fight->Notes,"Interim");
            if($pos2 === false)
            {
                return true;
            }
            else{
                return false;
            }
        }
    }
    public function findOutIfForInterimTitle($fight)
    {
        $pos = strpos($fight->Notes,"Championship");

        if($pos === false) {
            // string needle NOT found in haystack
            return false;
        }
        else {
            $pos2 = strpos($fight->Notes,"interim");
            if($pos === false)
            {
                return false;
            }
            else{
                return true;
            }
        }
    }

    public function findOutWinMethod($fight)
    {
        $wm = explode('(', $fight->WinMethod, 2);
        $r_ = trim($wm[0]);
        if(($r_ == "Draw") || ($r_ == "No Contest"))
        {
            return null;
        }
        else{
            if(($r_ == "Decision") || ($r_ == "Unanimous decision")  ) {
                if (array_key_exists("1",$wm))
                {
                    $fish = explode(')',$wm[1]);
                    if($fish[0] == "unanimous"){
                        return "UD";
                    }
                    else{
                        return "SD";
                    }
                }
                else{
                    return "UD";
                }

            }
            elseif($r_ == "TKO")
            {
                return "KO";
            }
            elseif($r_ == "KO")
            {
                return "KO";
            }
            elseif(($r_ == "Submission")||($r_ == "Technical submission")){

                return "SUB";
            }
        }
    }
    public function findOutIfBonus($fight){

        $postfight = DB::connection('duck')->table('post_fight_card_awards')->where('CardID','=',$fight->CardID)->get();
        if($postfight == null)
        {
            return false;
        }
        foreach($postfight as $pf)
        {
            if(strpos($pf->Fighters,$fight->FighterA_Name) !== false)
            {
                if($pf->AwardType == "Fight of the Night")
                {
                    return "fotn";
                }
                else{
                    return "potn";
                }

            }
        }
        return false;

    }
    public function findOutResult($fight, $fighter_number)
    {

        if($fight->Round == 0)
        {
            return null;
        }
        else{
            $wm = explode('(', $fight->WinMethod, 2);
            $r_ = trim($wm[0]);
            if($r_ == "Draw")
            {
                return 'draw';
            }
            elseif($r_ == "No Contest")
            {
                return "nc";
            }
            elseif($fighter_number == 1)
            {
                return 'win';
            }
            else{
                return 'loss';
            }
        }

    }

    public function findOutRPChange($fighter, $opponent,$result,$winmethod,$bonus,$title, $interim_title)
    {
        $rpc = 0;
        $diff = $fighter - $opponent;
        if($result == "win")
        {
            switch ($winmethod)
            {
                case "KO":
                case "SUB":
                    $rpc = $opponent*env('KO_SUB_VAR',0.35);
                    break;
                case "UD":
                    $rpc = $opponent*env('UD_VAR',0.25);
                    break;
                case "SD":
                    $rpc = $opponent*env('SD_VAR',0.15);
            }
            if($rpc < env('WIN_MIN_VAR',50))
            {
                $rpc = 50;
            }
        }
        elseif($result == "loss"){
            if($diff > 0)
            {
                echo($diff);
                //if you were higher ranked and lost
                $rpc = -($diff*env('LOSE_VAR',0.25));
                if($rpc < -50)
                {
                    $rpc = -50;
                }
            }
        }

        if($bonus == "fotn")
        {
            $rpc = $rpc + env('BONUS_VAR',20);
        }
        elseif($bonus == "potn")
        {
            if($rpc > 0)
            {
                $rpc = $rpc + env('BONUS_VAR',20);
            }
        }
        if($title || $interim_title)
        {
            $rpc = $rpc + env('CHAMPIONSHIP_VAR',50);
        }
        return $rpc;
    }

    public function wordsToAbbreviation($weightclass)
    {
        switch($weightclass)
        {
            case "Women's Strawweight":
                $wc = "wsw";
                break;
            case "Flyweight":
                $wc = "flw";
                break;
            case "Bantamweight":
                $wc = "bw";
                break;
            case "Women's Bantamweight":
                $wc = "wbw";
                break;
            case "Featherweight":
                $wc = "fw";
                break;
            case "Women's Featherweight":
                $wc = "wfw";
                break;
            case "Lightweight":
                $wc = "lw";
                break;
            case "Welterweight":
                $wc = "ww";
                break;
            case "Middleweight":
                $wc = "mw";
                break;
            case "Light Heavyweight":
                $wc = "lhw";
                break;
            case "Heavyweight":
                $wc = "hw";
                break;
            default:
                $wc = null;
                break;
        }
        return $wc;
    }

    




}