CREATE DATABASE digital_booking;
USE digital_booking;
CREATE TABLE categoria(
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  url_imagen VARCHAR(100) );
