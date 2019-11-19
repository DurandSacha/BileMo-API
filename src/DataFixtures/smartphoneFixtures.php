<?php

namespace App\DataFixtures;


use App\DataFixtures\baseFixture;
use App\Entity\smartphone;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Faker;

class smartphoneFixtures extends baseFixture
{

    private static $name = [
    'Samsung G7',
    'Sony XZ3',
    'Sony M2',
    'Pixel 2',
    'Iphone X',
    'Pixel 1',
    'Samsung S5',
    'Samsung S7',
    'Samsung S7 Edge',
    'Sony Xperia XZ',
    'Sony Aqua M4',
    'Motorola 5',
    'Iphone 7',
    'Galaxy Tab 2',
    ];

    private static $price = [
        599,
        249,
        1200,
        549,
        199,
        99,
        359,
        379,
        499,99,
        497.98,
        999,99,
        699,49,
        199,99,
        149,99,
    ];

    private static $screen_size = [
        5.9,
        3.7,
        4.9,
        6.2,
        7.1,
        9,
        8.3,
    ];

    private static $date = [
        '2016/03/12',
        '2019/06/04',
        '2017/01/09',

    ];

    private static $weight = [
        147,
        189,
        250,
        399,
        488,
        123,
        461,

    ];

    private static $autonomy = [
        8800,
        2500,
        1999,
        1450,
        5500,
    ];

    private static $network = [
        "3G",
        "3G+",
        "4G",
        "4G+",
    ];

    private static $os = [
        "Android 7",
        "Android 8",
        "Android 9",
        "Android 10",
    ];

    public function loadData(ObjectManager $manager)
    {
        for ($i = 1; $i <= 27; $i++) {
            $smartphone = new Smartphone();
            $smartphone->setName($this->faker->randomElement(self::$name));
            $smartphone->setPrice($this->faker->randomElement(self::$price));
            $smartphone->setScreenSize($this->faker->randomElement(self::$screen_size));
            $smartphone->setReleaseDate(new \DateTime($this->faker->randomElement(self::$date)));
            $smartphone->setAutonomy($this->faker->randomElement(self::$autonomy));
            $smartphone->setOS($this->faker->randomElement(self::$os));
            $smartphone->setWeight($this->faker->randomElement(self::$weight));
            $smartphone->setNetwork($this->faker->randomElement(self::$network));


            $manager->persist($smartphone);
        }
    ;
    $manager->flush();
    }

}