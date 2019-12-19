<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    // public function testSignupSuccessful()
    // {
    //     $response = $this->json('POST', '/api/signup', [
    //         'name' => 'Sally',
    //         'email' => 'sally123@email.com',
    //         'password' => '123456',
    //     ]);

    //     $response->assertStatus(200)->assertJson([
    //         "success" => "true",
    //     ]);;

    //     $response->dump();
    // }
    public function testSignupWithWrongEmailShouldReturnFalse()
    {
        $response = $this->json('POST', '/api/signup', [
            'name' => 'Sally',
            'email' => 'sally',
            'password' => '123456',
        ]);

        // $response->dump();
        $response->assertStatus(422)->assertJson([
            "success" => "false",
        ]);
    }
    public function testLoginSuccessfullyShouldReturnTrue()
    {
        $response = $this->json('POST', '/api/login', [
            'email' => 'brekke.marge@example.net',
            'password' => '123456',
        ]);

        // $response->dump();
        $response->assertStatus(200)->assertJsonStructure([
            "token",
            "success",
            "msg"
        ])->assertJson([
            "success" => "true",
        ]);
    }
    public function testLoginWithNonExistedEmailShouldReturnFalse()
    {
        $response = $this->json('POST', '/api/login', [
            'email' => 'adelle6912345511@example.net',
            'password' => '123456',
        ]);

        // $response->dump();
        $response->assertStatus(422)->assertJson([
            "success" => "false",
        ]);
    }
}
