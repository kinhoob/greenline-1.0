<?php 
namespace Greenline\Controller;

use Doctrine\ORM\EntityManager;
use Greeline\Infra\EntityManagerCreator;
use Greeline\Model\Usuario;

class UsuarioController{
    private EntityManager $em;
    private $repositorio;

    public function __construct()
    {
        $this->em = (new EntityManagerCreator())->getEntityManager();
        $this->repositorio = $this->em->getRepository(Usuario::class);
        
    }
    public function auth(){}
}
?>