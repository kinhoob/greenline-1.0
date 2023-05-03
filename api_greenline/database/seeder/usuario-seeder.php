<?php

var_dump("Preenchendo a tabela usuarios...");

$dbPath = __DIR__ . '/../greenline.sqlite';
$pdo = new PDO("sqlite:$dbPath");

$sql = 'INSERT INTO usuarios (nome, cpf, email, senha, endereco, cidade, cep) VALUES (?, ?, ?, ?, ?, ?, ?)';
$statement = $pdo->prepare($sql);
$statement->bindValue(1, "Tu");
$statement->bindValue(2, "11111111111");
$statement->bindValue(3, 'tu@mail.com');
$statement->bindValue(4, password_hash('tu', PASSWORD_BCRYPT));
$statement->bindValue(5, "Rua Padre Francês, Nº 93");
$statement->bindValue(6, "Olinda");
$statement->bindValue(7, "5355334544");

$statement->execute();

var_dump("Tabela usuarios preenchida com sucesso!");