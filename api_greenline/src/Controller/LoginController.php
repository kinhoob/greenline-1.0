<?php

namespace Greenline\Controller;

class LoginController
{
    protected UsuarioController $uC;

    public function __construct()
    {
        $this->uC = new UsuarioController();
    }

    public function validate()
    {   echo json_encode($_POST);
        $cpf = filter_input(INPUT_POST, "cpf");
        $senha = filter_input(INPUT_POST, "senha");

        $usuario = $this->uC->getRepositorio()->findBy(['cpf' => $cpf])[0];
        
        if(!is_null($usuario) && password_verify($senha, $usuario->getSenha()))
        {
            return [
                'logado' => true,
                'usuario' => $usuario->__serialize()
            ];
        }else{
            return [
                'mensagem' => 'usuário ou senha incorretos'
            ];
        }
    }

    public function logout()
    {
        return [
            'logado' => false,
            'usuario' => null
        ];
    }
}