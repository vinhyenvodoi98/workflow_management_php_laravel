<?php

use Illuminate\Database\Seeder;

class DepartmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\Department::class, 20)->create();
        factory(App\Department::class, 20)->create()->each(function ($department) {
            $department->departmentTasks()->saveMany(factory(App\DepartmentTask::class, 4)->make());
        });
    }
}
