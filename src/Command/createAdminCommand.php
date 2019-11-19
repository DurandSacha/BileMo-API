<?php
// src/Command/CreateUserCommand.php

namespace App\Command;

use App\Entity\User;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface as EntityManagerInterfaceAlias;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class createAdminCommand extends Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:create:admin';

    protected $userManager;
    private $passwordEncoder;

    public function __construct(EntityManagerInterface $userManager, UserPasswordEncoderInterface $passwordEncoder)
    {
        parent::__construct();

        $this->userManager = $userManager;
        $this->passwordEncoder = $passwordEncoder;
    }

    protected function configure()
    {
        $this
            ->setDescription('Create a User wit ROLE_USER role')
            ->setHelp('use with : php bin/console app:create:admin sacha5 000000')

            // configure an argument
            ->addArgument('username', InputArgument::REQUIRED, 'Enter Username')
            ->addArgument('password', InputArgument::REQUIRED, 'Enter Password')

            // optionnal value
            //->addOption('inline', 'i', InputOption::VALUE_OPTIONAL, 'Si cette option est définit a TRUE, les itération seront afficher sur une seul et unique ligne.', false)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $output->writeln([
            'User Creator',
            '============',
            '',
        ]);

        // retrieve the argument value using getArgument()
        $user = new User();
        $user->setUsername($input->getArgument('username'));
        $user->setPassword($this->passwordEncoder->encodePassword($user, $input->getArgument('password')));
        $user->setRoles(["ROLE_ADMIN"]);
        $this->userManager->persist($user);
        $this->userManager->flush();

        $output->writeln(' username:'.$input->getArgument('username'));
        $output->writeln(' password:'.$this->passwordEncoder->encodePassword($user, $input->getArgument('password')));
        $output->writeln(' Role: ROLE_ADMIN');


    }
}