<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Fighter;
class Snapshot extends Model
{
    public function fighter()
    {
        return $this->belongsTo('App\Fighter');
    }
}
