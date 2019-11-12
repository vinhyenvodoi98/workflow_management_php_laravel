<?php

use Illuminate\Database\Seeder;

class DepartmentUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\DepartmentUser::class, 100)->create();
        $departments = App\Department::all();
        App\User::all()->each(function ($user) use ($departments) {
            $faker = Faker\Factory::create();

            $user->departments()->attach(
                $departments->random(rand(1, 2))->pluck('id')->toArray(),
                ['role' => $faker->optional(0.1, 'Staff')->randomElement(array('Leader', 'Vice leader'))]
            );
        });
    }
}
