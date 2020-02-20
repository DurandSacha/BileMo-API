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
use PHPUnit\Framework\TestCase;

class clientTest extends TestCase
{
    private $client;

    public function setUp()
    {
        $this->client = new Client();
    }

    public function testClientId()
    {
        $this->client->setId('1');
        $this->assertEquals('1', $this->client->getId());
    }

    public function testClientUsername()
    {
        $this->client->setUsername('username1');
        $this->assertEquals('username1', $this->client->getUsername());
    }

    public function testClientRole()
    {
        $roles[] = 'ROLE_USER';
        $this->client->setRoles($roles);
        $this->assertEquals($roles, $this->client->getRoles());
    }

    public function testClientPassword()
    {

        $this->client->setPassword('000000');
        $this->assertEquals('000000', $this->client->getPassword());
    }

}