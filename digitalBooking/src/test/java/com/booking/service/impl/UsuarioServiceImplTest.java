package com.booking.service.impl;

import com.booking.entity.Rol;
import com.booking.entity.Usuario;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.IRolRepository;
import com.booking.repository.IUsuarioRepository;
import com.booking.service.IUsuarioService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
class UsuarioServiceImplTest {

    @Autowired
    private IUsuarioService usuarioService;

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private IRolRepository rolRepository;


    @Test
    public void insert() throws InvalidDataException, ResourcesNotFoundException {
        Rol rol = rolRepository.getById(1L);
        Usuario usuario = new Usuario();
        usuario.setNombre("hola");
        usuario.setApellido("hola");
        usuario.setEmail("holaPepito45@gmail.com");
        usuario.setPassword("hola");
        usuario.setRol(rol);
        Usuario respuesta = usuarioService.insert(usuario);
        Assertions.assertTrue(respuesta.getNombre() == (usuario.getNombre()));
        usuarioRepository.deleteById(respuesta.getId());
    }

    @Test
    public void readById() throws ResourcesNotFoundException {
        Long id = 5L;
        Optional<Usuario> respuesta = usuarioService.readById(id);
        Assertions.assertTrue(respuesta.isPresent());
    }

    @Test
    public void readByIdFailt() throws ResourcesNotFoundException {
        Long id = 10000L;
        Assertions.assertThrows(ResourcesNotFoundException.class, ()->usuarioService.readById(id));

    }

}


