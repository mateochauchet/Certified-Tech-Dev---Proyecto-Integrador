CREATE DATABASE digital_booking;
USE digital_booking;

CREATE TABLE categorias(
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  url_imagen VARCHAR(100) );

  CREATE TABLE caracteristicas(
 id_caracteristica INT PRIMARY KEY AUTO_INCREMENT,
 nombre VARCHAR(50) NOT NULL,
 icono VARCHAR(100));
 
 CREATE TABLE ciudades(
  id_ciudad INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  pais VARCHAR(100) NOT NULL
);

CREATE TABLE productos(
 id_producto INT PRIMARY KEY AUTO_INCREMENT,
 nombre VARCHAR(50) NOT NULL,
 descripcion VARCHAR(250) NOT NULL,
 id_ciudad INT NOT NULL,
 id_categoria INT NOT NULL,
 KEY id_ciudad (id_ciudad),
 KEY id_categoria (id_categoria),
 CONSTRAINT producto_ciudad_fk FOREIGN KEY (id_ciudad) REFERENCES ciudad (id_ciudad),
 CONSTRAINT producto_categoria_fk FOREIGN KEY (id_categoria) REFERENCES categoria (id_categoria)
 );
 
 CREATE TABLE imagenes(
  id_imagen INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  url_imagen VARCHAR(200),
  id_producto INT NOT NULL,
   KEY id_producto (id_producto),
   CONSTRAINT imagen_producto_fk FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
);
 
 CREATE TABLE productos_caracteristicas(
	id_producto_caracteristica INT PRIMARY KEY AUTO_INCREMENT,
	id_caracteristica INT NOT NULL,
	id_producto INT NOT NULL,
	KEY id_caracteristica (id_caracteristica),
	KEY id_producto (id_producto),
	CONSTRAINT caracteristica_fk FOREIGN KEY (id_caracteristica) REFERENCES caracteristica (id_caracteristica),
	CONSTRAINT producto_fk FOREIGN KEY (id_producto) REFERENCES producto (id_producto)
 );
