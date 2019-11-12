<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    /**
     * Users that belong to group
     */
    public function users()
    {
        return $this->belongsToMany('App\User')->withPivot('role')->withTimestamps();
    }

    /**
     * Get tasks that belong to group
     */
    public function groupTasks()
    {
        return $this->hasMany('App\GroupTask');
    }

    /**
     * Get works that belong to group
     */
    public function works()
    {
        return $this->hasMany('App\Work');
    }
}
