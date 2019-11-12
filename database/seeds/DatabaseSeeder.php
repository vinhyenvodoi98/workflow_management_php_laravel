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
        // factory(App\User::class, 100)->create();
        // factory(App\Department::class, 20)->create();
        // factory(App\DepartmentTask::class, 80)->create();
        // factory(App\Group::class, 3)->create();
        // factory(App\GroupTask::class, 10)->create();
        // factory(App\Target::class, 300)->create();
        // factory(App\Work::class, 50)->create();
        // factory(App\Activity::class, 200)->create();
        // factory(App\Comment::class, 50)->create();
        // factory(App\Document::class, 400)->create();
        // factory(App\UserWork::class, 100)->create();
        // factory(App\DepartmentUser::class, 100)->create();
        // factory(App\GroupUser::class, 20)->create();
        // factory(App\DepartmentTaskUser::class, 100)->create();
        // factory(App\GroupTaskUser::class, 40)->create();
        // factory(App\CommentDocument::class, 400)->create();
        // factory(App\DepartmentPivot::class, 15)->create();
        // factory(App\TargetPivot::class, 100)->create();
        // factory(App\WorkPivot::class, 45)->create();
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
