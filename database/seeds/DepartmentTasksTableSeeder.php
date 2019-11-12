<?php

use Illuminate\Database\Seeder;

class DepartmentTasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\DepartmentTask::class, 80)->create();
    }
}
