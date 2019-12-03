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
use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\Security;

class PostListener extends searchUserLinkedToClient
{

    /*
    private $security;

    public function __construct($security)
    {
        parent::__construct($security);
    }
    */


    public function prePersist(User $user)
    {
        //$client = $this->security->getUser();
        //$user->setClient($client);

        //$user->setName('name create with postListener');
    }

    /**
     * Returns an array of events this subscriber wants to listen to.
     *
     * @return string[]
     */
    public function getSubscribedEvents()
    {
        // TODO: Implement getSubscribedEvents() method.
    }
}