<?php
/**
 * Created by PhpStorm.
 * User: sacha
 * Date: 24/01/2020
 * Time: 00:43
 */

namespace App\Tests\api;
use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;
use App\Entity\Client;
use App\Entity\Smartphone;
use App\Entity\User;


class apiTest extends ApiTestCase
{
    private $phone;
    private $client;
    private $user;

    public function setUp()
    {
        $this->phone = new Smartphone();
        $this->user = new User();
        $this->client = new Client();
    }

    public function testSmartphones()
    {
        $client = self::createClient();
        $client->request('GET', '/api/smartphones');
        $this->assertResponseStatusCodeSame(200);
    }

    public function testUsers()
    {
        $client = self::createClient();
        $client->request('GET', '/api/users');
        $this->assertResponseStatusCodeSame(200);
    }

    public function testSingleSmartphone()
    {
        $this->phone->setId('1');
        $client = self::createClient();
        $client->request('GET', '/api/smartphones/' . $this->phone->getId() . '');
        $this->assertResponseStatusCodeSame(200);
    }

    public function testSingleUser()
    {
        $this->user->setId('1');
        $client = self::createClient();
        $client->request('GET', '/api/users/' . $this->user->getId() . '');
        $this->assertResponseStatusCodeSame(200);
    }

    /*
    public function testCreateUser()
    {
        $this->user->setId('1');
        $user = $this->user;
        $client = self::createClient();

        $client->request('POST', '/api/users' , [
            'headers' => ['Content-Type' => 'application/json'],
            'json' => [
                'Client' => $user,
                'name' => 'player01',
                'description' => 'a test player'
            ]
        ]);
        $this->assertResponseStatusCodeSame(201);
    }
    */






    /*
    public function testApiLogin()
    {

    }
    */

}