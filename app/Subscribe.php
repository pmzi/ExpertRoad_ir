<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subscribe extends Model
{
    //

    public $fillable = ['email','time'];

    public $timestamps = false;

}
