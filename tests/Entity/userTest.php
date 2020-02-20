<?php
/**
 * Created by PhpStorm.
 * Client: sacha
 * Date: 20/11/2019
 * Time: 16:16
 */

namespace App\Tests;


use App\Entity\Client;
use App\Entity\Smartphone;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class userTest extends TestCase
{
    private $user;

    public function setUp()
    {
        $this->user = new User();
    }

    public function testUserId()
    {
        $this->user->setId('1');
        $this->assertEquals('1', $this->user->getId());
    }

    public function testUserName()
    {
        $this->user->setName('username1');
        $this->assertEquals('username1', $this->user->getName());
    }

    public function testUserDescription()
    {
        $this->user->setDescription('description');
        $this->assertEquals('description', $this->user->getDescription());
    }

    public function testUserClient()
    {
        $client = new Client();
        $this->user->setClient($client);
        $this->assertEquals($client, $this->user->getClient());
    }

}