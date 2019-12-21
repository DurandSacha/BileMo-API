<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     collectionOperations={"get"={
 *          "normalization_context"={"groups"={"list"}}}
 *          },
 *     attributes={
 *          "pagination_items_per_page"=5
 *     },
 *     itemOperations={
 *     "get",
 *     "post"={
 *          "method"="POST",
 *          "method"="DELETE"
 *          }
 *     }
 *
 * )
 * @ORM\Entity(repositoryClass="App\Repository\SmartphoneRepository")
 */
class Smartphone
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"list", "show"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"list", "show"})
     */
    private $name;

    /**
     * @Groups({"list", "show"})
     * @ORM\Column(type="float")
     */
    private $price;

    /**
     * @Groups({"show"})
     * @ORM\Column(type="float", nullable=true)
     */
    private $screenSize;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"show"})
     * @var string A "Y-m-d" formatted value
     */
    private $releaseDate;

    /**
     * @Groups({"show"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $autonomy;

    /**
     * @Groups({"show"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $OS;

    /**
     * @Groups({"show"})
     * @ORM\Column(type="integer", nullable=true)
     */
    private $weight;

    /**
     * @Groups({"show"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $network;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getScreenSize(): ?float
    {
        return $this->screenSize;
    }

    public function setScreenSize(?float $screenSize): self
    {
        $this->screenSize = $screenSize;

        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->releaseDate;
    }

    public function setReleaseDate(?\DateTimeInterface $releaseDate): self
    {
        $this->releaseDate = $releaseDate;

        return $this;
    }

    public function getAutonomy(): ?int
    {
        return $this->autonomy;
    }

    public function setAutonomy(?int $autonomy): self
    {
        $this->autonomy = $autonomy;

        return $this;
    }

    public function getOS(): ?string
    {
        return $this->OS;
    }

    public function setOS(?string $OS): self
    {
        $this->OS = $OS;

        return $this;
    }

    public function getWeight(): ?int
    {
        return $this->weight;
    }

    public function setWeight(?int $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    public function getNetwork(): ?string
    {
        return $this->network;
    }

    /*
     * @SerializedName("Network_Type")
     */
    public function setNetwork(?string $network): self
    {
        $this->network = $network;

        return $this;
    }
}
