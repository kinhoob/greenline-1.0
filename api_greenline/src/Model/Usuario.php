<?php 
namespace Greenline\Model;

use Doctrine\ORM\Mapping\{Entity,
     Table,
     Id,
     GeneratedValue,
     Column};

/**
 * @Entity
 * @Table(name="usuarios")
 */
class Usuario{
    /**
     * @Id
     * @GeneratedValue
     * @Column(type="integer")
    */
    private $id;

    /**
     * @Column(type="string")
     */
    private string $nome;

    /**
     * @Column(type="string")
     */
    private string $cpf;

    /**
      * @Column(type="string")
      */
    private string $email;

    /**
     * @Column(type="string")
     */
    private string $senha;

    /**
     * @Column(type="string")
     */
      private string $endereco;

      /**
     * @Column(type="string")
     */
    private string $cidade;

    /**
     * @Column(type="string")
     */
    private string $cep;

    public function __construct(string $nome, string $cpf, string $email, string $senha, string $endereco, string $cidade, string $cep, $id = null)
     {
        $this->id = $id;
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->email = $email;
        $this->senha = $senha;
        $this->endereco = $endereco;
        $this->cidade = $cidade;
        $this->cep = $cep;
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

     /**
      * Get the value of Endereço
      */
      public function getEndereco()
      {
           return $this->endereco;
      }
 
      /**
       * Set the value of Endereço
       */
      public function setEndereco($endereco): self
      {
           $this->endereco = $endereco;
 
           return $this;
      }


      /**
      * Get the value of Cidade
      */
     public function getCidade()
     {
          return $this->cidade;
     }

     /**
      * Set the value of Cidade
      */
     public function setCidade($cidade): self
     {
          $this->cidade = $cidade;

          return $this;

     }

     /**
      * Get the value of CEP
      */
      public function getCep()
      {
           return $this->cep;
      }
 
      /**
       * Set the value of CEP
       */
      public function setCep($cep): self
      {
           $this->cep = $cep;
 
           return $this;

      }

     public function __serialize(): array
     {
          return [
               'id' => $this->getId(),
               'nome' => $this->getNome(),
               'cpf' => $this->getCpf(),
               'email' => $this->getEmail(),
               'endereco' => $this->getEndereco(),
               'cidade' => $this->getCidade(),
               'cep' => $this->getCep()
          ];
     }
}