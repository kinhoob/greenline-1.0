<?php 
namespace Greenline\Model;

use DateTime;
use Doctrine\ORM\Mapping\{Entity,
     Table,
     Id,
     GeneratedValue,
     Column};

/**
 * @Entity
 * @Table(name="coleta")
 */
class Coleta 
{
    /**
     * @Id
     * @GeneratedValue
     * @Column(type="integer")
    */
    private $id;

    /**
     * @Column(type="string")
     */
    private string $id_usuario;

    /**
     * @Column(type="datetime")
     */
    private DateTime $solicitacao;

    public function __construct(DateTime $solicitacao, int $id_usuario, int $id = null)
     {
        $this->id = $id;
        $this->solicitacao = $solicitacao;
        $this->id_usuario = $id_usuario;
     }

    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     */
    public function setId($id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of id_usuario
     */
    public function getIdUsuario(): string
    {
        return $this->id_usuario;
    }

    /**
     * Set the value of id_usuario
     */
    public function setIdUsuario(string $id_usuario): self
    {
        $this->id_usuario = $id_usuario;

        return $this;
    }

    /**
     * Get the value of solicitacao
     */
    public function getSolicitacao(): DateTime
    {
        return $this->solicitacao;
    }

    /**
     * Set the value of solicitacao
     */
    public function setSolicitacao(DateTime $solicitacao): self
    {
        $this->solicitacao = $solicitacao;

        return $this;
    }

    public function __serialize(): array
    {
        return [
            'id' => $this->id,
            'solicitacao' => $this->solicitacao,
            'id_usuario' => $this->id_usuario,
        ];    
    }
}


