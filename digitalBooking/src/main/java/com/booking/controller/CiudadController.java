package com.booking.controller;
import com.booking.entity.Ciudad;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.service.ICiudadService;
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
@RequestMapping("/api/ciudad")
@CrossOrigin(origins = "*")
public class CiudadController {

    @Autowired
    @Qualifier("CiudadServiceImpl")
    private ICiudadService ciudadService;

    @GetMapping("/")
    public ResponseEntity<List<Ciudad>> readAll()  {
        return new ResponseEntity<>(ciudadService.readAll(), HttpStatus.OK);
    }

    @PostMapping("/")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Ciudad> insert(@RequestBody Ciudad ciudad) throws ResourcesNotFoundException, InvalidDataException {
        return new ResponseEntity<>(ciudadService.insert(ciudad),HttpStatus.OK);
    }
}
