<?php

use Illuminate\Database\Seeder;

class DepartmentTaskUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\DepartmentTaskUser::class, 100)->create();
        $departmentTasks = App\DepartmentTask::all();
        App\User::all()->each(function ($user) use ($departmentTasks) {
            $user->departmentTasks()->attach(
                $departmentTasks->random(rand(1, 3))->pluck('id')->toArray()
            );
        });
    }
}
