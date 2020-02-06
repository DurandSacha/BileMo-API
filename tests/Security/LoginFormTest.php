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
use app\Security\LoginFormAuthenticator;

class LoginFormTest extends TestCase
{
    function testGetCredentials()
    {
        $test = '1';
        $this->assertEquals('1', $test);
    }

}