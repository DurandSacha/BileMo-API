<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class securityTest extends webTestCase
{
    public function testRegister()
    {
        $client = self::createClient();

        $client->request('POST', '/register' , [
            'headers' => ['Content-Type' => 'application/json'],
            'json' => [
                'username' => 'player01',
                'password' => '000000',
            ]
        ]);
        $this->assertEquals(404, $client->getResponse()->getStatusCode());

    }

    public function testDocs()
    {
        $client = static::createClient();
        $client->request('GET', '/api?ui=re_doc');

        echo $client->getResponse()->getContent();
        $this->assertEquals(200, $client->getResponse()->getStatusCode());

    }

}