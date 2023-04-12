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
    {
        $email = filter_input(INPUT_POST, "email");
        $senha = filter_input(INPUT_POST, "senha");

        $usuario = $this->uC->getRepositorio()->findBy(['email' => $email]);

        if(!is_null($usuario) && password_verify($usuario->getSenha(), PASSWORD_BCRYPT))
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
}