CREATE DATABASE digital_booking;
USE digital_booking;

CREATE TABLE categoria(
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  url_imagen VARCHAR(100) );

  CREATE TABLE caracteristica(
 id_caracteristica INT PRIMARY KEY AUTO_INCREMENT,
 nombre VARCHAR(50) NOT NULL,
 icono VARCHAR(100));

 CREATE TABLE imagen(
  id_imagen INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  url_imagen VARCHAR(200)
);

CREATE TABLE ciudad(
  id_ciudad INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  pais VARCHAR(100) NOT NULL
);


