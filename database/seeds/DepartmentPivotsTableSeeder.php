<?php

use Illuminate\Database\Seeder;

class DepartmentPivotsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\DepartmentPivot::class, 15)->create();
        $children = App\Department::limit(15)->pluck('id');

        foreach ($children as $child) {
            do
                $parent = mt_rand(1, 20);
            while ($parent == $child);

            DB::table('department_pivots')->insert(
                [
                    'parent_id' => $parent,
                    'department_id' => $child,
                ]
            );
        };
    }
}
