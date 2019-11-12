<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    /**
     * Get the user that uploads the document
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Comments that belong to document
     */
    public function comments()
    {
        return $this->belongsToMany('App\Comment')->withTimestamps();
    }
}
