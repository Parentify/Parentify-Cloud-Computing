CREATE DATABASE public_jwtdb;
USE public_jwtdb;

CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL,
	email TEXT NOT NULL,
	password VARCHAR(255) NOT NULL,
	created TIMESTAMP NOT NULL DEFAULT NOW()
);