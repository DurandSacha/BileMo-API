<?php
/**
 * Created by PhpStorm.
 * User: sacha
 * Date: 03/12/2019
 * Time: 21:46
 */

namespace App\EntityListener;


use App\Doctrine\searchUserLinkedToClient;
use App\Entity\Client;
use App\Entity\User;
use Doctrine\Common\EventSubscriber;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Events;
use Symfony\Component\Security\Core\Security;

/*
 * this class is an event listener that defines the user-to-client relationship without specifying the client.
 * The client added to the user database is the one connected with the Token JWT
 */

class PostListener implements EventSubscriber
{

    private $security;
    private $em;

    public function __construct(Security $security, EntityManagerInterface $em)
    {
        $this->security = $security;
        $this->em = $em;
    }



    public function prePersist(User $user)
    {
        $client = $this->security->getUser();
        $user->setClient($client);
    }

    public function postPersist(User $user)
    {
        $client = $this->security->getUser();
        $user->setClient($client);
        $this->em->persist($user);
        $this->em->flush();
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
            Events::postRemove,
            Events::postUpdate,
            Events::prePersist,
        ];
    }
}