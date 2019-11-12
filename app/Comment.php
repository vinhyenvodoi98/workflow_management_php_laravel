<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * Get the user that owns the comment
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the activity that owns the comment
     */
    public function activity()
    {
        return $this->belongsTo('App\Activity');
    }

    /**
     * Documents that belong to comment
     */
    public function documents()
    {
        return $this->belongsToMany('App\Document')->withTimestamps();
    }
}
