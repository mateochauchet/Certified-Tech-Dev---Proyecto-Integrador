package com.booking.service.impl;

import com.booking.entity.Reserva;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.IReservaRepository;
import com.booking.service.IProductoService;
import com.booking.service.IReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("ReservaServiceImpl")
public class ReservaServiceImpl implements IReservaService {

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    private IProductoService productoService;


    @Override
    public Reserva insert(Reserva reserva) throws  InvalidDataException, ResourcesNotFoundException {
        productoService.readOne(reserva.getProducto().getId());
        if(reserva.getFechaFinal() == null || reserva.getFechaInicio() == null || reserva.getHoraDeReserva() == null)
            throw  new ResourcesNotFoundException("La fecha de inicio o fecha final o hora de inicio no se encuentran dentro del json");
        return reservaRepository.save(reserva);
    }

    @Override
    public List<Reserva> getReservationsByIdProduct(Long idProducto) throws ResourcesNotFoundException {
        List<Reserva> respuesta = reservaRepository.getReservationsByIdProduct(idProducto);
        if(respuesta.size() == 0)
            throw  new ResourcesNotFoundException("No se encontraron reservas para el producto con Id: " + idProducto);
        return respuesta;
    }
}
