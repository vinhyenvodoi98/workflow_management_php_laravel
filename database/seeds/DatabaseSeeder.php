<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            DepartmentsTableSeeder::class,
            // DepartmentTasksTableSeeder::class,
            GroupsTableSeeder::class,
            // GroupTasksTableSeeder::class,
            TargetsTableSeeder::class,
            WorksTableSeeder::class,
            ActivitiesTableSeeder::class,
            CommentsTableSeeder::class,
            DocumentsTableSeeder::class,
            UserWorkTableSeeder::class,
            DepartmentUserTableSeeder::class,
            GroupUserTableSeeder::class,
            DepartmentTaskUserTableSeeder::class,
            GroupTaskUserTableSeeder::class,
            CommentDocumentTableSeeder::class,
            DepartmentPivotsTableSeeder::class,
            TargetPivotsTableSeeder::class,
            WorkPivotsTableSeeder::class,
        ]);
    }
}
