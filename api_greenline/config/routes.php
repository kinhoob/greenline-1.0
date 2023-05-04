<?php

use Greenline\Controller\ColetaController;

require __DIR__ . '/../vendor/autoload.php';

return [
    'usuario' => \Greenline\Controller\UsuarioController::class,
    'login' => \Greenline\Controller\LoginController::class,
    'coleta' => \Greenline\Controller\ColetaController::class,
];