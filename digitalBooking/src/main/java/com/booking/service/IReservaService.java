package com.booking.service;

import com.booking.entity.Reserva;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.ResourcesNotFoundException;

import java.util.List;

public interface IReservaService {

    public Reserva insert (Reserva reserva) throws NotExistDataException, InvalidDataException, ResourcesNotFoundException;

    public List<Reserva> getReservationsByIdProduct(Long idProducto) throws ResourcesNotFoundException;
}
