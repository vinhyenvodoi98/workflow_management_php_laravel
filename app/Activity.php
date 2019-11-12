<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    /**
     * Get the user that owns the activity
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the work that owns the activity
     */
    public function work()
    {
        return $this->belongsTo('App\Work');
    }

    /**
     * Get the comments of activity
     */
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
