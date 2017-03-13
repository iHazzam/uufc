<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InitFightersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fighters', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('wsw')->default('0');
            $table->integer('flw')->default('0');
            $table->integer('bw')->default('0');
            $table->integer('wbw')->default('0');
            $table->integer('fw')->default('0');
            $table->integer('wfw')->default('0');
            $table->integer('lw')->default('0');
            $table->integer('ww')->default('0');
            $table->integer('mw')->default('0');
            $table->integer('lhw')->default('0');
            $table->integer('hw')->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fighters');
    }
}