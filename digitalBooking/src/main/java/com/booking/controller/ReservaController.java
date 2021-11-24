package com.booking.controller;


import com.booking.entity.Reserva;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.service.IReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.time.LocalDate;
import java.util.List;

@Controller
@RestController
@RequestMapping("/api/reserva")
@CrossOrigin(origins = "*")
public class ReservaController {

    @Autowired
    @Qualifier("ReservaServiceImpl")
    private IReservaService reservaService;

    @GetMapping("/")
    public ResponseEntity<List<Reserva>> getReservationsByIdProduct(@PathVariable("id") Long id) throws ResourcesNotFoundException  {
        return new ResponseEntity<>(reservaService.getReservationsByIdProduct(id), HttpStatus.OK);
    }

    @PostMapping("/")
    @PreAuthorize("hasRole('ROLE_CLIENT')")
    public ResponseEntity<Reserva> insert(@RequestParam("hora_inicio") @DateTimeFormat(pattern = "HH:mm:ss") Time hora_inicio, @RequestParam("fecha_inicio") @DateTimeFormat(pattern = "yyyy-MM-dd")LocalDate fecha_inicio, @RequestParam("fecha_fin") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate fecha_fin, @RequestParam("reserva") Reserva reserva) throws NotExistDataException, InvalidDataException, ResourcesNotFoundException {
        reserva.setHoraDeReserva(hora_inicio);
        reserva.setFechaInicio(fecha_inicio);
        reserva.setFechaFinal(fecha_fin);
        return new ResponseEntity<>(reservaService.insert(reserva),HttpStatus.OK);
    }




}
