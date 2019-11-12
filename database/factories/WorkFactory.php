<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Work;
use Faker\Generator as Faker;

$factory->define(Work::class, function (Faker $faker) {
    return [
        'index' => $faker->lexify('?'),
        'name' => $faker->sentence,
        'description' => $faker->text,
        'status' => $faker->randomElement(array ('Not started', 'In progress', 'Approval pending', 'Done')),
        'priority' => $faker->randomElement(array ('Low', 'Medium', 'High')),
        'score' => mt_rand(0, 100),
        'progress' => mt_rand(0, 100),
        'start_date' => $faker->dateTimeBetween('-6 months', 'now'),
        'due_date' => $faker->dateTimeBetween('now', '+6 months'),
        'group_id' => $faker->optional()->numberBetween(1, 3),
        'target_id' => mt_rand(1, 300),
    ];
});
