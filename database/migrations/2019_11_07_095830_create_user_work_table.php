<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserWorkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_work', function (Blueprint $table) {
            $table->timestamps();
            $table->string('role');

            $table->unsignedBigInteger('user_id')->nullable(false);
            $table->unsignedBigInteger('work_id')->nullable(false);
            $table->primary(['user_id', 'work_id']);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('work_id')->references('id')->on('works')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_work');
    }
}
