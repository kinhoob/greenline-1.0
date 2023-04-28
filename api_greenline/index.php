<?php

require __DIR__ . '/vendor/autoload.php';

use Greenline\Controller\UsuarioController;

header('Access-Control-Allow-Origin: *');

$arrayCaminhos = explode("/", $_SERVER['REQUEST_URI']);
$controller = $arrayCaminhos[(count($arrayCaminhos) - 2)];
$metodo = $arrayCaminhos[(count($arrayCaminhos) - 1)];

$rotas = require __DIR__ . '/config/routes.php';

if (!array_key_exists($controller, $rotas)) {
    echo "Erro 404";
    exit();
}

$obj =  new $rotas[$controller]();
$metodoFormatado = explode("?", $metodo)[0];

if(isset(explode("?", $metodo)[1])){
    $parametrosEmString = explode("&", explode("?", $metodo)[1]);
    $parametros = [];
    foreach($parametrosEmString as $param){
        $indice = explode("=", $param)[0];
        $valor = explode("=", $param)[1];
        $parametros = array_merge($parametros, [''.$indice => $valor]);
    }
}else{
    $parametros = null;
}

ob_start();
var_dump($_POST);
error_log(ob_get_clean(), 4);
exit();

echo json_encode($obj->$metodoFormatado($parametros));
/*return match($metodoFormatado){
    'index' => $obj->index(),
    'create' => $obj->create(),
    'store' => $obj->store(),
    'edit' => $obj->edit($parametros),
    'update' => $obj->update(),
    'delete' => $obj->delete($parametros),
    default => "404 - Página não encontrada"
};*/