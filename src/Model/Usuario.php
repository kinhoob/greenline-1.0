<?php 
namespace Greeline\Model;

/**
 * @Entity
 * @Table(name="usuario")
 */

class Usuario{
    /**
     * @Column(type="integer")
    */
    private $id;

    /**
     * @Id
     * @GeneratedValue
     * @Column(type="string")
     */
    private $nome;

    /**
     * @Column(type="integer")
     */
    private $cpf;

     /**
     * @Column(type="varchar")
     */
    private $email;

     /**
     * @Column(type="varchar")
     */
    private $senha;

    public function __construct($id, $nome, $cpf, $email, $senha)
     {
        $this->id=$id;
        $this->nome=$nome;
        $this->cpf=$cpf;
        $this->email=$email;
        $this->senha=$senha;
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
     * Get the value of nome
     */
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * Set the value of nome
     */
    public function setNome($nome): self
    {
        $this->nome = $nome;

        return $this;
    }

     /**
      * Get the value of cpf
      */
     public function getCpf()
     {
          return $this->cpf;
     }

     /**
      * Set the value of cpf
      */
     public function setCpf($cpf): self
     {
          $this->cpf = $cpf;

          return $this;
     }

     /**
      * Get the value of email
      */
     public function getEmail()
     {
          return $this->email;
     }

     /**
      * Set the value of email
      */
     public function setEmail($email): self
     {
          $this->email = $email;

          return $this;
     }

     /**
      * Get the value of senha
      */
     public function getSenha()
     {
          return $this->senha;
     }

     /**
      * Set the value of senha
      */
     public function setSenha($senha): self
     {
          $this->senha = $senha;

          return $this;
     }
}