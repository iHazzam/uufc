<?php

namespace App\Console\Commands;

use App\Fighter;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class ParseWeightClassHistory extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fights:history';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate the fight history database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $event = DB::connection('duck')->table('cards')->where('Date','<=',Carbon::today())->orderBy('Date','asc')->first();
        $thebeginning = Carbon::createFromFormat('Y-m-d H:i:s',$event->Date)->addYear('6');
        $currentdate = $thebeginning;
        $today = Carbon::now();
        $weightclasses = ['wsw','flw','bw','wbw','fw','wfw','lw','ww','mw','lhw','hw'];
        $fighters = Fighter::all();
        while($currentdate < $today)
        {
            var_dump($currentdate);
            $threeYearsAgo = $currentdate->copy()->subYears(3);
            $twoYearsAgoYesterday = $currentdate->copy()->subYears(2)->subDay();
            $twoYearsAgo = $currentdate->copy()->subYears(2);
            $aYearAgoYesterday = $currentdate->copy()->subYear()->subDay();
            $aYearAgo = $currentdate->copy()->subYear();
            $yesterday = $currentdate->copy()->subDay();
            //parse all snaps from past 3 years
            foreach ($fighters as $fighter)
            {
                //fights older than 3 years carry no weight
                $cumrp = ['id'=>$fighter->id,'wsw' => 0,'flw' => 0,'bw' => 0,'wbw' => 0,'fw' => 0,'wfw' => 0,'lw' => 0,'ww' => 0,'mw' => 0,'lhw' => 0,'hw' => 0];
                //2) Fights between 2 and 3 years ago are worth 1/3 points
                $snapshots_3 = DB::table('snapshots')->whereBetween('date',[$threeYearsAgo, $twoYearsAgoYesterday])->where('fighter_id','=',$fighter->id)->get();
                //where('date','<=',$today->subYear(3)->format('Y-m-d'))->where('date','>',$today->subYear(2)->format('Y-m-d'))->where('fighter_id','=',$fighter->id)->get()
                foreach($snapshots_3 as $snap3)
                {
                    $cumrp[$snap3->weightclass] += $snap3->rp_change*(1/3);
                }
                //2) Fights last year are worth 2/3 points
                $snapshots_2 = DB::table('snapshots')->whereBetween('date',[$twoYearsAgo,$aYearAgoYesterday])->where('fighter_id','=',$fighter->id)->get();
                foreach($snapshots_2 as $snap2)
                {

                    $cumrp[$snap2->weightclass] += $snap2->rp_change*(2/3);
                }
                //3) Fights this year are worth full points
                $snapshots_1 = DB::table('snapshots')->whereBetween('date',[$aYearAgo,$yesterday])->where('fighter_id','=',$fighter->id)->get();
                foreach($snapshots_1 as $snap1)
                {
                    $cumrp[$snap1->weightclass] += $snap1->rp_change;
                }
                foreach($cumrp as $id => $val)
                {
                    $fighter->$id = $val;
                }
                $fighter->save();
            }
            foreach($weightclasses as $wc)
            {
                $rankings = DB::table('fighters')->where($wc,'!=',0)->select('id')->orderBy($wc,'desc')->limit(100)->get();
                $insertme = [];
                $insertme['date'] = $currentdate;
                for($i = 1; $i<=100; $i++)
                {
                    if($i <= count($rankings))
                    {
                        $insertme[$i] = $rankings[$i-1]->id;
                    }
                    else{
                        $insertme[$i] = null;
                    }

                }
                DB::table($wc . '_history')->insert($insertme);
            }
            $currentdate->addMonth();
        }
    }
}
