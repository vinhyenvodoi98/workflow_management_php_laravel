<?php

use Illuminate\Database\Seeder;

class UserWorkTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\UserWork::class, 100)->create();
        $works = App\Work::all();
        App\User::all()->each(function ($user) use ($works) {
            $faker = Faker\Factory::create();

            $user->works()->attach(
                $works->random(rand(1, 5))->pluck('id')->toArray(),
                ['role' => $faker->optional(0.3, 'Responsible')->randomElement(array('Accountable', 'Consulted', 'Informed'))]
            );
        });
    }
}
