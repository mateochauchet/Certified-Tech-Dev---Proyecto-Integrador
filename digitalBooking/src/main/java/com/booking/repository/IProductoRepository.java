package com.booking.repository;

import com.booking.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {


    @Query(
            value = "SELECT P.*, C.titulo FROM producto P inner join categoria C on C.id_categoria = P.id_categoria WHERE C.titulo like %:categoria_titulo%", nativeQuery = true)
    List<Producto> getProductsByCategory(@Param("categoria_titulo") String categoria_titulo);


    @Query(
            value = "SELECT P.*, C.nombre FROM producto P inner join ciudad C on C.id_ciudad = P.id_ciudad WHERE C.nombre like %:ciudad_nombre%", nativeQuery = true)
    List<Producto> getProductsByCity(@Param("ciudad_nombre") String ciudad_nombre);

    @Query(
            value = "SELECT P.* FROM producto p inner join reserva R on R.id_producto = P.id_producto  WHERE R.fecha_inicio = :fecha_inicio AND R.fecha_fin = :fecha_fin ", nativeQuery = true)
    List<Producto> getProductsOfReservaByDate(@Param("fecha_inicio") Date fecha_incio, @Param("fecha_fin")  Date fecha_fin );

}
