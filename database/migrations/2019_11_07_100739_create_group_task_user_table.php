<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupTaskUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_task_user', function (Blueprint $table) {
            $table->timestamps();

            $table->unsignedBigInteger('user_id')->nullable(false);
            $table->unsignedBigInteger('group_task_id')->nullable(false);
            $table->primary(['user_id', 'group_task_id']);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('group_task_id')->references('id')->on('group_tasks')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('group_task_user');
    }
}
