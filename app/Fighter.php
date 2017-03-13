<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Snapshot;
class Fighter extends Model
{
    protected $fillable = [
        'name',
    ];

    public function snapshot()
    {
        return $this->hasMany('App\Snapshot');
    }
}
