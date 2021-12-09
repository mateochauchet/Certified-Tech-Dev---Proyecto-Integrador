package com.booking.service.impl;
import com.booking.entity.Ciudad;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.ICiudadRepository;
import com.booking.service.ICiudadService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

@SpringBootTest
class CiudadServiceImplTest {

    @Autowired
    private ICiudadService ciudadService;
    @Autowired
    private ICiudadRepository ciudadRepository;

    @Test
    public void readAll(){
        List<Ciudad> respuestas = ciudadService.readAll();
        Assertions.assertTrue(respuestas.size()>0);
    }

    @Test
    public void insert() throws InvalidDataException, ResourcesNotFoundException {
        Ciudad ciudad = new Ciudad();
        ciudad.setNombre("Bogota");
        ciudad.setPais("Colombia");
        Ciudad respuesta = ciudadService.insert(ciudad);
        Assertions.assertTrue(respuesta.getNombre() == ciudad.getNombre() && respuesta.getPais() == ciudad.getPais());
        ciudadRepository.deleteById(respuesta.getId());
    }

    @Test
    public void insertFailt()  {
        Ciudad ciudad = new Ciudad();
        ciudad.setNombre(null);
        ciudad.setPais(" ");
        Assertions.assertThrows(ResourcesNotFoundException.class, ()->ciudadService.insert(ciudad));
        ciudad.setNombre("Bogota");
        ciudad.setPais("lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll");
        Assertions.assertThrows(InvalidDataException.class, ()->ciudadService.insert(ciudad));
        ciudad.setPais("Colombia");
        ciudad.setNombre("lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll");
        Assertions.assertThrows(InvalidDataException.class, ()->ciudadService.insert(ciudad));
    }

}