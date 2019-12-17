<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Target;
use Faker\Generator as Faker;

$factory->define(Target::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence,
        'indicator' => $faker->sentence,
        'weight' => mt_rand(0, 100),
        'score' => mt_rand(0, 100),
        'date' => $faker->dateTimeBetween('-6 months', 'now'),
        'user_id' => $faker->optional()->numberBetween(1, 100),
        'department_id' => $faker->optional()->numberBetween(1, 20),
    ];
});
