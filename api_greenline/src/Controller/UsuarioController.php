<?php 
namespace Greenline\Controller;

use Greenline\Model\Usuario;

class UsuarioController extends Controller{

    public function __construct()
    {
        parent::__construct(Usuario::class);
    }

    public function store($parametros)
    {
        $nome = $parametros['nome']; //filter_input(INPUT_POST, "nome", FILTER_DEFAULT);
        $cpf = $parametros['cpf']; //filter_input(INPUT_POST, "cpf", FILTER_VALIDATE_INT);
        $email = $parametros['email']; //filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
        $senha = $parametros['senha']; //filter_input(INPUT_POST, "senha", FILTER_DEFAULT);
        $endereco = $parametros['endereco']; //filter_input(INPUT_POST, "endereco", FILTER_DEFAULT);
        $cidade = $parametros['cidade']; //filter_input(INPUT_POST, "cidade", FILTER_DEFAULT);
        $cep = $parametros['cep']; //filter_input(INPUT_POST, "cep", FILTER_DEFAULT);
        
        
        $usuario = new Usuario($nome, $cpf, $email, password_hash($senha, PASSWORD_BCRYPT), $endereco, $cidade, $cep);

        $this->em->persist($usuario);
        $this->em->flush();

        return ['mensagem' => 'Usuário cadastrado com sucesso!'];
    }

    public function list()
    {
        $usuarios = $this->repositorio->findAll();
        $usuariosSerializados =[];

        foreach($usuarios as $usuario){
            $usuariosSerializados[] = $usuario->__serialize();
        }

        return $usuariosSerializados;
    }

    public function find($parametros)
    {
        $id = $parametros['id'];
        return $this->repositorio->find($id)->__serialize();
    }

    public function update()
    {
        $id = filter_input(INPUT_POST, "id");
        $nome = filter_input(INPUT_POST, "nome");
        $cpf = filter_input(INPUT_POST, "cpf");
        $email = filter_input(INPUT_POST, "email");

        $usuario = $this->getRepositorio()->find($id);
        $usuario->setNome($nome);
        $usuario->setCpf($cpf);
        $usuario->setEmail($email);

        $this->em->persist($usuario);
        $this->em->flush();

        return ['mensagem' => 'cadastro atualizado com sucesso!'];
    }

    public function updatePassword()
    {
        $id = filter_input(INPUT_POST, "id");
        $senha = password_hash(filter_input(INPUT_POST, "senha"), PASSWORD_BCRYPT);

        $usuario = $this->getRepositorio()->find($id);
        $usuario->setSenha($senha);

        $this->em->persist($usuario);
        $this->em->flush();

        return ['mensagem' => 'cadastro atualizado com sucesso!'];
    }

    public function remove()
    {
        $id = filter_input(INPUT_POST, "id");
        $usuario = $this->getRepositorio()->find($id);

        if(is_null($usuario)){
            return ['mensagem' => 'usuário inexitente e não pode ser removido!'];
        }
        
        $this->em->remove($usuario);
        $this->em->flush();

        return ['mensagem' => 'usuário removido com sucesso!'];
    }
}
?>