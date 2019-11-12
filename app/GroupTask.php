<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GroupTask extends Model
{
    /**
     * Users that belong to group task
     */
    public function users()
    {
        return $this->belongsToMany('App\User')->withTimestamps();
    }

    /**
     * Get the group that owns the task
     */
    public function group()
    {
        return $this->belongsTo('App\Group');
    }
}
