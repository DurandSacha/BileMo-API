<?php

namespace App\DataFixtures;

use App\Entity\Client;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\DataFixtures\baseFixture;
use App\Entity\User;
use App\DataFixtures\UsersFixtures;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator;

class ClientFixtures extends baseFixture
{
    public const Bouygue = 'Bouygue';
    public const Sfr = 'Sfr';
    public const Free = 'Free';
    public const Orange = 'Orange';

    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function loadData(ObjectManager $manager)
    {
        $client4 = new Client();
        $client4->setUsername('Sfr');
        $client4->setPassword($this->passwordEncoder->encodePassword($client4, '000000'));
        $this->addReference('Sfr',$client4);
        $manager->persist($client4);

        $client4 = new Client();
        $client4->setUsername('Bouygue');
        $client4->setPassword($this->passwordEncoder->encodePassword($client4, '000000'));
        $this->addReference('Bouygue',$client4);
        $manager->persist($client4);

        $client4 = new Client();
        $client4->setUsername('Orange');
        $client4->setPassword($this->passwordEncoder->encodePassword($client4, '000000'));
        $this->addReference('Orange',$client4);
        $manager->persist($client4);

        $manager->flush();
    }
}




