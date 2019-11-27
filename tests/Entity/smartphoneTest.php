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
}