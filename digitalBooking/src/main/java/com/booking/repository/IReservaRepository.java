package com.booking.repository;

import com.booking.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IReservaRepository extends JpaRepository<Reserva, Long> {
    @Query("FROM Reserva r where r.producto.id = ?1")
    List<Reserva> getReservationsByIdProduct(Long idProducto);


}
