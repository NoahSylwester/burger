-- this script will initialize an appropriate database for the other files to work from, with placeholder values

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id)
);