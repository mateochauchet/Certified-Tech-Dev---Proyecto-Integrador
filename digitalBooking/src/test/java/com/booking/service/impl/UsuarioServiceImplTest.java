package com.booking.service.impl;

import com.booking.entity.Rol;
import com.booking.entity.Usuario;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.service.IUsuarioService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UsuarioServiceImplTest {

    @Autowired
    private IUsuarioService usuarioService;





  /*  @Test
    public void insert() throws InvalidDataException, NotExistDataException {


        Usuario usuario = new Usuario();
        usuario.setNombre("mario");
        usuario.setApellido("gomez");
        usuario.setEmail("mariobross@gmail.com");
        usuario.setPassword("1234");



       Usuario respuesta = usuarioService.insert(usuario);

       Assertions.assertTrue(respuesta.getNombre() == (usuario.getNombre()));


    }*/

    @Test
    public void readById() throws ResourcesNotFoundException {
        Long id = 5L;
        Optional<Usuario> respuesta = usuarioService.readById(id);
        Assertions.assertTrue(respuesta.isPresent());
    }

    @Test
    public void readByIdFailt() throws ResourcesNotFoundException {
        Long id = 104L;
        Assertions.assertThrows(ResourcesNotFoundException.class, ()->usuarioService.readById(id));

    }

}


