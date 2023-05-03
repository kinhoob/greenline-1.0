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
        $cpf = filter_input(INPUT_POST, "cpf");
        $senha = filter_input(INPUT_POST, "senha");

        $usuarios = $this->uC->getRepositorio()->findBy(['cpf' => $cpf]);

        if (!is_null($usuarios) && count($usuarios) > 0 && password_verify($senha, $usuarios[0]->getSenha())) {
            return [
                'logado' => true,
                'usuario' => $usuarios[0]->__serialize()
            ];
        } else {
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
