<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Target extends Model
{
    /**
     * Get the user that sets the target
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the department that sets the target
     */
    public function department()
    {
        return $this->belongsTo('App\Department');
    }

    /**
     * Get works that belong to target
     */
    public function works()
    {
        return $this->hasMany('App\Work');
    }
}
