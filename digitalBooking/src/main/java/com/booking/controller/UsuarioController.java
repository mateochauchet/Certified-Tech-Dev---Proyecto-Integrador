package com.booking.controller;

import com.booking.entity.Usuario;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    IUsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody Usuario usuario) throws NotExistDataException, InvalidDataException {
        usuarioService.insert(usuario);
        return ResponseEntity.ok(HttpStatus.CREATED);
    }


    @GetMapping("/")
    public List<Usuario> readAll() {
        return usuarioService.readAll();
    }



}
