<?php

var_dump("Preenchendo a tabela usuarios...");

$dbPath = __DIR__ . '/../greenline.sqlite';
$pdo = new PDO("sqlite:$dbPath");

$sql = 'INSERT INTO usuarios (nome, cpf, email, senha) VALUES (?, ?, ?, ?)';
$statement = $pdo->prepare($sql);
$statement->bindValue(1, "Eu");
$statement->bindValue(2, "00000000000");
$statement->bindValue(3, 'eu@mail.com');
$statement->bindValue(4, password_hash('eu', PASSWORD_BCRYPT));

$statement->execute();

var_dump("Tabela usuarios preenchida com sucesso!");