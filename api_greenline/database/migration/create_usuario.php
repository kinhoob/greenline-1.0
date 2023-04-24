<?php

var_dump("Criando tabela 'usuários'... ");

$dbPath = __DIR__ . '/../greenline.sqlite';
$pdo = new PDO("sqlite:$dbPath");
$pdo->exec( 'drop table usuarios');
$pdo->exec(
    'CREATE TABLE usuarios (id INTEGER PRIMARY KEY, nome TEXT, cpf TEXT, email TEXT, senha TEXT, endereco TEXT, cidade TEXT, cep TEXT);'
);

var_dump("Tabela 'usuários' criada com sucesso!");