<?php
/**
 * Created by PhpStorm.
 * Client: sacha
 * Date: 20/11/2019
 * Time: 16:16
 */

namespace App\Tests;


use App\Entity\Smartphone;
use PHPUnit\Framework\TestCase;

class smartphoneTest extends TestCase
{
    private $phone;

    public function setUp()
    {
        $this->phone = new Smartphone;
    }

    public function testSmartphoneId()
    {
        $this->phone->setPrice('1');
        $this->assertEquals('1', $this->phone->getPrice());
    }

    public function testName()
    {
        $this->phone->setName('samsungS5');
        $this->assertEquals('samsungS5', $this->phone->getName());
    }

    public function testScreenSize()
    {
        $this->phone->setScreenSize('9');
        $this->assertEquals('9', $this->phone->getScreenSize());
    }

    public function testOS()
    {
        $this->phone->setOS('Android');
        $this->assertEquals('Android', $this->phone->getOS());
    }

    public function testAutonomy()
    {
        $this->phone->setAutonomy('2200');
        $this->assertEquals('2200', $this->phone->getAutonomy());
    }

    public function testNetwork()
    {
        $this->phone->setNetwork('4G');
        $this->assertEquals('4G', $this->phone->getNetwork());
    }

}