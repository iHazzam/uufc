<?php

namespace App\Console\Commands;

use App\Fights\Recalculator;
use App\Snapshot;
use Carbon\Carbon;
use Illuminate\Console\Command;
use App\Fighter;
use Illuminate\Support\Facades\DB;
use Psy\Exception\ErrorException;

class UpdateFighters extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fights:update
    ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Daily scheduled task to update fighter scores';
    protected $recalculator;
    /**
     * Create a new command instance.
     *
     * @return void
     */


    public function __construct(Recalculator $recalculator)
    {
        $this->recalculator = $recalculator;
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $fighters = Fighter::all();
        $bar = $this->output->createProgressBar(count($fighters));
        $today = Carbon::today();
        $tomorrow = Carbon::tomorrow();

        $threeYearsAgoTomorrow = Carbon::tomorrow()->subYear(3);
        $twoYearsAgoToday = Carbon::today()->subYear(2);
        $twoYearsAgoTomorrow = Carbon::tomorrow()->subYear(2);
        $aYearAgoToday = Carbon::today()->subYear(1);
        $aYearAgoTomorrow = Carbon::tomorrow()->subYear(1);

        //ALSO NEED TO CREATE SNAPSHOTS FOR ANY NEW FIGHTS THAT HAPPEN
        $this->recalculator->createSnapsSinceLast();

        foreach ($fighters as $fighter)
        {
            //fights older than 3 years carry no weight
            $cumrp = ['wsw' => 0,'flw' => 0,'bw' => 0,'wbw' => 0,'fw' => 0,'wfw' => 0,'lw' => 0,'ww' => 0,'mw' => 0,'lhw' => 0,'hw' => 0];
            $cumcount = ['wsw' => 0,'flw' => 0,'bw' => 0,'wbw' => 0,'fw' => 0,'wfw' => 0,'lw' => 0,'ww' => 0,'mw' => 0,'lhw' => 0,'hw' => 0];
            //2) Fights between 2 and 3 years ago are worth 1/3 points
            $snapshots_3 = DB::table('snapshots')->whereBetween('date',[$threeYearsAgoTomorrow, $twoYearsAgoToday])->where('fighter_id','=',$fighter->id)->get();
                //where('date','<=',$today->subYear(3)->format('Y-m-d'))->where('date','>',$today->subYear(2)->format('Y-m-d'))->where('fighter_id','=',$fighter->id)->get()
            foreach($snapshots_3 as $snap3)
            {
                $cumrp[$snap3->weightclass] += $snap3->rp_change*(1/3);
                $cumcount[$snap3->weightclass] ++;
            }
            //2) Fights last year are worth 2/3 points
            $snapshots_2 = DB::table('snapshots')->whereBetween('date',[$twoYearsAgoTomorrow,$aYearAgoToday])->where('fighter_id','=',$fighter->id)->get();
            foreach($snapshots_2 as $snap2)
            {

                $cumrp[$snap2->weightclass] += $snap2->rp_change*(2/3);
                $cumcount[$snap2->weightclass] ++;
            }
            //3) Fights this year are worth full points
            $snapshots_1 = DB::table('snapshots')->whereBetween('date',[$aYearAgoTomorrow,$today])->where('fighter_id','=',$fighter->id)->get();
            foreach($snapshots_1 as $snap1)
            {
                $cumrp[$snap1->weightclass] += $snap1->rp_change;
                $cumcount[$snap1->weightclass] ++;
            }
            $bar->advance();
            foreach($cumrp as $classy => $classyval)
            {
                if($cumcount[$classy] <3)
                {
                    $classyval = $classyval * 1.75;
                }
                elseif($cumcount[$classy] <4)
                {
                    $classyval = $classyval * 1.5;
                }
                elseif($cumcount[$classy] < 5)
                {
                    $classyval = $classyval * 1.25;
                }
                $fighter->$classy = $classyval;
            }
            $fighter->save();
        }
        $bar->finish();

    }
}
