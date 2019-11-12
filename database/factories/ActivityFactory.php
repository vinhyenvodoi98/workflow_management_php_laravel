<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Activity;
use Faker\Generator as Faker;

$factory->define(Activity::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        'date' => $faker->dateTimeBetween('-6 months', 'now'),
        'work_id' => mt_rand(1, 50),
        'user_id' => mt_rand(1, 100),
    ];
});
