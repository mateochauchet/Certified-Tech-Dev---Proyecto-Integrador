package com.booking.controller;


import com.booking.entity.Reserva;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotPermissionException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.service.IReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/api/reserva")
@CrossOrigin(origins = "*")
public class ReservaController {

    @Autowired
    @Qualifier("ReservaServiceImpl")
    private IReservaService reservaService;

    @GetMapping("/{password}/{id}")
    @PreAuthorize("hasRole('ROLE_CLIENT')")
    public ResponseEntity<List<Reserva>> getReservationsByIdProduct(@PathVariable("password")String password,@PathVariable("id") Long id) throws ResourcesNotFoundException, NotPermissionException {
        return new ResponseEntity<>(reservaService.getReservationsByIdUsuario(id,password), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Reserva>> getReservationsByIdProduct(@PathVariable("id") Long id) throws ResourcesNotFoundException  {
        return new ResponseEntity<>(reservaService.getReservationsByIdProduct(id), HttpStatus.OK);
    }

    @PostMapping("/")
    @PreAuthorize("hasRole('ROLE_CLIENT')")
    public ResponseEntity<Reserva> insert(@RequestBody Reserva reserva) throws ResourcesNotFoundException, InvalidDataException {
        return new ResponseEntity<>(reservaService.insert(reserva),HttpStatus.CREATED);
    }




}
