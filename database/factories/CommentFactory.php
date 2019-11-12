<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'content' => $faker->text(255),
        'activity_id' => mt_rand(1, 200),
        'user_id' => mt_rand(1, 100),
    ];
});
