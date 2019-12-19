<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GroupTest extends TestCase
{
    protected $bearer;
    protected function setUp(): void
    {
        parent::setUp();
        $response = $this->json('POST', '/api/login', [
            'email' => 'brekke.marge@example.net',
            'password' => '123456',
        ]);
        $response->dump();
        $resp_json = $response->getContent();
        // dd($response->getContent());
        self::$bearer = $resp_json["token"];
    }
    public function testGetAllGroupShouldReturnTrue()
    {
        $response = $this->withHeaders([
            'Authorization' => self::$bearer,
        ])->get('/api/groups');

        $response->dump();
        $response->assertStatus(200);
    }
}
