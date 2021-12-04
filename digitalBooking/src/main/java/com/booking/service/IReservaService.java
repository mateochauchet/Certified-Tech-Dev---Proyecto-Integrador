package com.booking.service;

import com.booking.entity.Reserva;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotPermissionException;
import com.booking.exceptions.ResourcesNotFoundException;

import java.util.List;

public interface IReservaService {

    public Reserva insert (Reserva reserva) throws  InvalidDataException, ResourcesNotFoundException;

    public List<Reserva> getReservationsByIdProduct(Long idProducto) throws ResourcesNotFoundException;

    public List<Reserva> getReservationsByIdUsuario(Long idUsuario, String password) throws ResourcesNotFoundException, NotPermissionException;
}
