<?php 
namespace Greenline\Controller;

use Greenline\Model\Usuario;

class UsuarioController extends Controller{

    public function __construct()
    {
        parent::__construct(Usuario::class);
    }

    public function store()
    {
        $nome = filter_input(INPUT_POST, "nome");
        $cpf = filter_input(INPUT_POST, "cpf");
        $email = filter_input(INPUT_POST, "email");
        $senha = filter_input(INPUT_POST, "senha");

        $usuario = new Usuario($nome, $cpf, $email, password_hash($senha, PASSWORD_BCRYPT));

        $this->em->persist($usuario);
        $this->em->flush();

        echo json_encode(['mensagem' => 'Usuário cadastrado com sucesso!']);
    }

    public function list()
    {
        $usuarios = $this->repositorio->findAll();
        $usuariosSerializados =[];

        foreach($usuarios as $usuario){
            $usuariosSerializados[] = $usuario->__serialize();
        }

        echo json_encode($usuariosSerializados);
    }

    public function find($parametros)
    {
        $id = $parametros['id'];
        echo json_encode($this->repositorio->find($id)->__serialize());
    }
}
?>