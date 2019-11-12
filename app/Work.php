<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    /**
     * Users that belong to work
     */
    public function users()
    {
        return $this->belongsToMany('App\User')->withPivot('role')->withTimestamps();
    }

    /**
     * Get activities of work
     */
    public function activities()
    {
        return $this->hasMany('App\Activity');
    }

    /**
     * Get the group that owns the work
     */
    public function group()
    {
        return $this->belongsTo('App\Group');
    }

    /**
     * Get the target that owns the work
     */
    public function target()
    {
        return $this->belongsTo('App\Target');
    }
}
