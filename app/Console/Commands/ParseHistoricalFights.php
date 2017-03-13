<?php

namespace App\Console\Commands;

use App\Fighter;
use App\Fights\Parse;
use App\Snapshot;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Fights\Recalculator;
class ParseHistoricalFights extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fights:parse';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Parse all fights from the beginning of time until now, and add to the DB';

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
    public function handle(Recalculator $recalculator)
    {

        //why are fighters getting initialised at 0 or at 100?
        //Populate the database with transactional data for every fight that's happened up until now
        $allfights = DB::connection('duck')->table('fights_for_cards')->where('Date','<=',Carbon::today())->orderBy('Date','asc')->get();
        $bar = $this->output->createProgressBar(count($allfights));

        foreach ($allfights as $fight)
        {
            $recalculator->createSnapsForFight($fight);
            $bar->advance();
        }
        $bar->finish();
        DB::table('updated')->insert(
            ['updated' => Carbon::today()]
        );
    }
}
