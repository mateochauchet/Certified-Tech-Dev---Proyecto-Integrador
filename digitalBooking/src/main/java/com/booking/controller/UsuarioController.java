package com.booking.controller;

import com.booking.entity.AuthenticationRequest;
import com.booking.entity.AuthenticationResponse;
import com.booking.entity.Usuario;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotPermissionException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.service.IUsuarioService;
import com.booking.service.impl.UserSecurityService;
import com.booking.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    IUsuarioService usuarioService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserSecurityService userSecurityService;

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));
            final UserDetails userDetails = userSecurityService.loadUserByUsername(authenticationRequest.getEmail());
            final String jwt = jwtUtil.generateToken(userDetails);
            return ResponseEntity.ok(new AuthenticationResponse((jwt)));
        }catch (BadCredentialsException e) {
            throw new Exception("Incorrect", e);
        }

    };

    @PostMapping("/")
    public ResponseEntity<?> insert(@RequestBody Usuario usuario) throws ResourcesNotFoundException, InvalidDataException {
        usuarioService.insert(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body("el usuario fue creado correctamente");
    }


    @GetMapping("/{id}")
    public ResponseEntity<Usuario> readOne(@PathVariable("id") Long id) throws ResourcesNotFoundException {
        return new ResponseEntity<>(usuarioService.readById(id).get(),HttpStatus.OK);
    }

    @GetMapping("/{email}/{password}")
    public ResponseEntity<Usuario> readByEmail(@PathVariable("email") String email, @PathVariable("password") String password) throws ResourcesNotFoundException, NotPermissionException {
        return new ResponseEntity<>(usuarioService.readByEmail(email, password),HttpStatus.OK);
    }

}
