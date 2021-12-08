package com.booking.service.impl;

import com.booking.entity.Categoria;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotValidImageException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.service.ICategoriaService;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;


@SpringBootTest
class CategoriaServiceImplTest {


        @Autowired
         private ICategoriaService categoriaService;

         private Categoria categoriaPrueba;

         private String titulo;

         private String descripcion;

         private String imagen;






    @Test
    public void readOne() throws ResourcesNotFoundException, IOException {
        Long id = 1L;
        Optional<Categoria> respuesta = categoriaService.readOne(id);
        Assertions.assertTrue(respuesta.isPresent());
    }

    @Test
    public void readOneFail() {
        Long id = 55L;
        Assertions.assertThrows(ResourcesNotFoundException.class, ()->categoriaService.readOne(id));
    }

    @Test
    public void readAll() throws IOException {
        List<Categoria> respuestas = categoriaService.readAll();
        Assertions.assertTrue(respuestas.size()>0);
    }

    @Test
    public void insert() throws InvalidDataException, ResourcesNotFoundException, IOException, NotValidImageException {
        MultipartFile imagen = new MockMultipartFile("test.xlsx", new FileInputStream(new File("./src/main/resources/imagenesPrueba/dfdf.png")));
        Categoria categoria2 = new Categoria();
        categoria2.setTitulo("Categoria prueba");
        categoria2.setImagen("data:image/jpeg;base64,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");
        categoria2.setDescripcion("descripcion");
        categoriaPrueba = categoriaService.insert(categoria2.getTitulo(), categoria2.getDescripcion(),imagen);
        Assertions.assertTrue(categoriaPrueba.getTitulo() == categoria2.getTitulo());
    }

    @Test
    public void insertFailt()  {
        Categoria categoria2 = new Categoria();
        categoria2.setTitulo("pp");
        categoria2.setImagen("pp");
        categoria2.setDescripcion("descripcion");
        Assertions.assertThrows(ResourcesNotFoundException.class, ()->categoriaService.insert(categoria2.getTitulo(), categoria2.getDescripcion(), null));
        categoria2.setTitulo("");
        Assertions.assertThrows(InvalidDataException.class, ()->categoriaService.insert(categoria2.getTitulo(), categoria2.getDescripcion(), null));
    }

    @Test
    public void delete() throws ResourcesNotFoundException, IOException {
        Long id = 1L;
        Boolean respuesta = categoriaService.delete(id);
        Assertions.assertTrue(respuesta);
    }

    @Test
    public void deleteFailed() {
        Long id = 87L;
        Assertions.assertThrows(ResourcesNotFoundException.class, ()->categoriaService.delete(id));
    }


    @Test
    public void update() throws InvalidDataException, IOException, ResourcesNotFoundException, NotValidImageException {
        Optional<Categoria> categoria = categoriaService.readOne(2L);
        MultipartFile imagen = new MockMultipartFile("test.xlsx", new FileInputStream(new File("./src/main/resources/imagenesPrueba/dfdf.png")));
        categoria.get().setTitulo("titulo modificado");
        categoria.get().setDescripcion("descripcion cambiada");
        Boolean respuesta = categoriaService.update(categoria.get().getId(), categoria.get().getTitulo(), categoria.get().getDescripcion(),imagen);
        Assertions.assertTrue(respuesta);

    }

    @Test
    public void updateFailed() throws ResourcesNotFoundException, IOException {
        Optional<Categoria> categoria = categoriaService.readOne(2L);
        titulo = categoria.get().getTitulo();
        descripcion = categoria.get().getDescripcion();
        imagen = categoria.get().getImagen();
        categoria.get().setTitulo("");
        categoria.get().setDescripcion("");
        Assertions.assertThrows(ResourcesNotFoundException.class, ()->categoriaService.update(categoria.get().getId(),categoria.get().getTitulo(),categoria.get().getDescripcion(), null));
        categoria.get().setTitulo("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        categoria.get().setDescripcion("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        Assertions.assertThrows(InvalidDataException.class, ()->categoriaService.update(categoria.get().getId(),categoria.get().getTitulo(),categoria.get().getDescripcion(), null));
        categoria.get().setTitulo("pp");
        categoria.get().setDescripcion("pp");
        Assertions.assertThrows(ResourcesNotFoundException.class, ()->categoriaService.update(categoria.get().getId(),categoria.get().getTitulo(),categoria.get().getDescripcion(), null));

    }

    @AfterAll
    public void afterAll() throws ResourcesNotFoundException, IOException, InvalidDataException, NotValidImageException {
        categoriaService.delete(categoriaPrueba.getId());
        Optional<Categoria> categoria = categoriaService.readOne(2L);
        categoria.get().setTitulo(titulo);
        categoria.get().setDescripcion(descripcion);
        categoriaService.update(categoria.get().getId(),categoria.get().getTitulo(),categoria.get().getDescripcion(),null);

    }


}