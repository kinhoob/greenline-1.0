<?php

var_dump("Criando tabela de coletas...");

$dbPath = __DIR__. '/../greenline.sqlite';
$pdo = new PDO("sqlite:$dbPath");
//$pdo->exec('DROP table coleta;');
$pdo->exec(
    'CREATE TABLE coleta(
        id    INTEGER PRIMARY KEY, 
        solicitacao  DATE, 
        id_usuario INTEGER,
        FOREIGN KEY(id_usuario) REFERENCES usuario(id)
      );'
);

var_dump("Tabela 'coleta' criada com sucesso!");

//Criar tabela de coleta