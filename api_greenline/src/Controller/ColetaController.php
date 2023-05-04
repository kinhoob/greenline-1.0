<?php

namespace Greenline\Controller;

use Greenline\Model\Coleta;

class ColetaController extends Controller
{
    public function __construct()
    {
        parent::__construct(Coleta::class);
    }

    public function list()
    {
        $coletas = $this->getRepositorio()->findAll();

        $coletas = array_map(function ($coleta) {
            return $coleta->__serialize();
        }, $coletas);

        return $coletas;
    }

    public function find($parametros)
    {
        $coleta = $this->getRepositorio()->find($parametros['id']);
        return $coleta->__serialize();
    }

    public function store()
    {
        $solicitacao = filter_input(INPUT_POST, 'solicitacao');
        $id_usuario = filter_input(INPUT_POST, 'id_usuario');
        $coleta = new Coleta($solicitacao, $id_usuario);
        $this->getEntityManager()->persist($coleta);
        $this->getEntityManager()->flush();
        return ['Mensagem'=>'Coleta solicitada com sucesso.']; 
    }

    public function delete($id)
    {
        $coleta = $this->getRepositorio()->find($id);
        $this->getEntityManager()->remove($coleta);
        $this->getEntityManager()->flush();
        return ['Mensagem'=>'Solicitação cancelada com sucesso.'];
    }
}
