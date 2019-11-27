<?php
/**
 * Created by PhpStorm.
 * Client: sacha
 * Date: 24/11/2019
 * Time: 01:14
 */

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Client;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\DataFixtures\baseFixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator;

class UsersFixtures extends baseFixture
{

    public function loadData(ObjectManager $manager)
    {
        $adminUser = new User();
        $adminUser->setName('sacha6623@gmail.com');
        $adminUser->setDescription('a user');
        $adminUser->setClient($this->getReference(ClientFixtures::Bouygue));
        $manager->persist($adminUser);

        $user1 = new User();
        $user1->setName('jean@gmail.com');
        $user1->setDescription('a user');
        $user1->setClient($this->getReference(ClientFixtures::Sfr));
        $manager->persist($user1);

        $user2 = new User();
        $user2->setName('helloAPI@gmail.com');
        $user2->setDescription('a user');
        $user2->setClient($this->getReference(ClientFixtures::Orange));
        $manager->persist($user2);

        $manager->flush();
    }

}