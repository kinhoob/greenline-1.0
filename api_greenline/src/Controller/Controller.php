<?php

namespace Greenline\Controller;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Greenline\Infra\EntityManagerCreator;

class Controller
{
    protected EntityManager $em;
    protected $repositorio;

    //Recebe o nome da classe model como parâmetro
    //para configurar o repositório e manipular o banco
    public function __construct(string $nomeClasse)
    {
        $this->em = (new EntityManagerCreator())->getEntityManager();
        $this->repositorio = $this->em->getRepository($nomeClasse);
    }

    public function getEntityManager(): EntityManagerInterface
    {
        return $this->em;
    }

    public function getRepositorio()
    {
        return $this->repositorio;
    }

}