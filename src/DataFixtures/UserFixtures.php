<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\DataFixtures\baseFixture;

use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator;

class UserFixtures extends baseFixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function loadData(ObjectManager $manager)
    {
        $adminUser = new User();
        $adminUser->setUsername('sacha6623@gmail.com');
        $adminUser->setPassword($this->passwordEncoder->encodePassword($adminUser, '000000'));
        $manager->persist($adminUser);

        $user1 = new User();
        $user1->setUsername('jean@gmail.com');
        $user1->setPassword($this->passwordEncoder->encodePassword($user1, '111111'));
        $manager->persist($user1);

        $user2 = new User();
        $user2->setUsername('helloAPI@gmail.com');
        $user2->setPassword($this->passwordEncoder->encodePassword($user2, '222222'));
        $manager->persist($user2);

        $manager->flush();
    }
}
