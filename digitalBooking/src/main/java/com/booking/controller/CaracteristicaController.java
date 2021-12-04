package com.booking.controller;

import com.booking.entity.Caracteristica;
import com.booking.entity.Ciudad;
import com.booking.service.ICaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RestController
@RequestMapping("/api/caracteristicas")
@CrossOrigin(origins = "*")
public class CaracteristicaController {

    @Autowired
    private ICaracteristicaService caracteristicaService;

    @GetMapping("/")
    public ResponseEntity<List<Caracteristica>> readAll()  {
        return new ResponseEntity<>(caracteristicaService.readAll(),HttpStatus.OK);
    }
}
