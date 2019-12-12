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
        $children = App\Department::limit(45)->pluck('id');

        $parents = array();
        foreach ($children as $child) {
            if (!in_array($child, $parents)) {
                do
                    $parent = mt_rand(1, 20);
                while ($parent == $child);
                array_push($parents, $parent);

                DB::table('department_pivots')->insert(
                    [
                        'parent_id' => $parent,
                        'department_id' => $child,
                    ]
                );
            };
        }
    }
}
