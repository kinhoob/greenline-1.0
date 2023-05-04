<?php

var_dump("Preenchendo a tabela coleta...");

$dbPath = __DIR__ . '/../greenline.sqlite';
$pdo = new PDO("sqlite:$dbPath");

$sql = 'INSERT INTO coleta (solicitacao, id_usuario) VALUES (?, ?)';
$statement = $pdo->prepare($sql);
$statement->bindValue(1, '2023-05-04');
$statement->bindValue(2, 1);

$statement->execute();

var_dump("Tabela coleta preenchida com sucesso!");


// Popula a tabela no banco