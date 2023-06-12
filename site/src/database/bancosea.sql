CREATE DATABASE seaofthieves;

USE seaofthieves;

CREATE TABLE tripulacao (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkTripulacao INT,
	constraint foreign key (fkTripulacao) references tripulacao(id)
);