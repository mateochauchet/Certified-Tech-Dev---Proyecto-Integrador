package com.booking.service.impl;

import com.booking.entity.Producto;
import com.booking.entity.Reserva;
import com.booking.entity.Rol;
import com.booking.entity.Usuario;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.IReservaRepository;
import com.booking.repository.IRolRepository;
import com.booking.repository.IUsuarioRepository;
import com.booking.service.IProductoService;
import com.booking.service.IReservaService;
import com.booking.service.IUsuarioService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Time;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ReservaServiceImplTest {
    @Autowired
    private IProductoService productoService;

    @Autowired
    private IUsuarioService usuarioService;

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private IReservaService reservaService;

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    private IRolRepository rolRepository;

    @Test
    void insert() throws ResourcesNotFoundException, InvalidDataException {
        Rol rol = rolRepository.getById(1L);
        Usuario usuario = new Usuario();
        usuario.setNombre("hola");
        usuario.setApellido("hola");
        usuario.setEmail("holaPepito7@gmail.com");
        usuario.setPassword("hola");
        usuario.setRol(rol);
        Usuario usuario2 = usuarioService.insert(usuario);

        Time hora_inicio = Time.valueOf("18:45:20");
        LocalDate fecha_inicio2 = LocalDate.parse("2021-12-01", DateTimeFormatter.ofPattern( "yyy-MM-dd"));
        LocalDate fecha_fin2 = LocalDate.parse("2021-12-24", DateTimeFormatter.ofPattern( "yyy-MM-dd"));
        Producto producto = productoService.readOne(1L).get();


        Reserva reserva = new Reserva(hora_inicio,fecha_inicio2,fecha_fin2,producto,usuario2);
        Reserva respuesta = reservaService.insert(reserva);
        Assertions.assertTrue(respuesta.getUsuario().getId() == usuario2.getId());
        reservaRepository.deleteById(respuesta.getId());
        usuarioRepository.deleteById(usuario2.getId());


    }

    @Test
    void getReservationsByIdProduct() throws ResourcesNotFoundException {
        List<Reserva> respuesta = reservaService.getReservationsByIdProduct(1L);
        Assertions.assertTrue(respuesta.size()>=0);
    }


}