package com.booking.controller;

import com.booking.entity.AuthenticationRequest;
import com.booking.entity.AuthenticationResponse;
import com.booking.entity.Rol;
import com.booking.entity.Usuario;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotPermissionException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.IRolRepository;
import com.booking.service.IUsuarioService;
import com.booking.service.impl.UserSecurityService;
import com.booking.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;

@Controller
@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private IUsuarioService usuarioService;

    @Autowired
    private IRolRepository rolRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserSecurityService userSecurityService;

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws BadCredentialsException,ResourcesNotFoundException, NotPermissionException{

        try {
            Usuario usuario = usuarioService.readByEmail(authenticationRequest.getEmail(),authenticationRequest.getPassword());
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
            final UserDetails userDetails = userSecurityService.loadUserByUsername(authenticationRequest.getEmail());
            usuario.setRol(null);
            final String jwt = jwtUtil.generateToken(userDetails,usuario);
            return ResponseEntity.ok(new AuthenticationResponse((jwt)));
        }catch (BadCredentialsException e) {
            throw new BadCredentialsException("Las credenciales ingresadas no son correctas");
        }

    };

    @PostMapping("/")
    public ResponseEntity<?> insert(@RequestBody Usuario usuario) throws ResourcesNotFoundException, InvalidDataException, BadCredentialsException, SQLIntegrityConstraintViolationException {
        try {
            usuarioService.insert(usuario);
            final UserDetails userDetails = userSecurityService.loadUserByUsername(usuario.getEmail());
            final String jwt = jwtUtil.generateToken(userDetails,usuario);
            return new ResponseEntity<>(new AuthenticationResponse((jwt)), HttpStatus.CREATED);
        }catch (BadCredentialsException e) {
            throw new BadCredentialsException("Las credenciales ingresadas no son correctas");
        }
    }


    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<Usuario> readOne(@PathVariable("id") Long id) throws ResourcesNotFoundException {
        return new ResponseEntity<>(usuarioService.readById(id).get(),HttpStatus.OK);
    }





}
