package com.booking.repository;

import com.booking.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {


    @Query(
            value = "SELECT P.*, C.titulo FROM Productos P inner join Categorias C on C.id_categoria = P.id_categoria WHERE C.name like %:categoria_titulo%", nativeQuery = true)
    List<Producto> getProductsByCategory(@Param("categoria_titulo") String categoria_titulo);


    @Query(
            value = "SELECT P.*, C.nombre FROM Productos P inner join Ciudades C on C.id = P.id_ciudad WHERE C.name like %:ciudad_nombre%", nativeQuery = true)
    List<Producto> getProductsByCity(@Param("ciudad_nombre") String ciudad_nombre);

}
