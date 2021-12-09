package com.booking.service.impl;

import com.booking.entity.Categoria;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotValidImageException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.service.ICategoriaService;
import org.apache.commons.io.IOUtils;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Optional;


@SpringBootTest
class CategoriaServiceImplTest {


    @Autowired
    ICategoriaService categoriaService;

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
        File file = new File("./src/main/resources/imagenesPrueba/dfdf.png");
        FileInputStream input = new FileInputStream(file);
        MultipartFile imagen = new MockMultipartFile("dfdf",
                file.getName(), "multipart/form-data", IOUtils.toByteArray(input));
        Categoria categoria2 = new Categoria();
        categoria2.setTitulo("Categoria prueba");
        categoria2.setDescripcion("descripcion");
        Categoria categoriaPrueba = categoriaService.insert(categoria2.getTitulo(), categoria2.getDescripcion(),imagen);
        Assertions.assertTrue(categoriaPrueba.getTitulo() == categoria2.getTitulo());
        categoriaService.delete(categoriaPrueba.getId());
    }


    @Test
    public void delete()  {
        Long id = 1L;
        Assertions.assertThrows(DataIntegrityViolationException.class, ()->categoriaService.delete(id));
    }

    @Test
    public void deleteFailed() {
        Long id = 87L;
        Assertions.assertThrows(ResourcesNotFoundException.class, ()->categoriaService.delete(id));
    }


    @Test
    public void update() throws InvalidDataException, IOException, ResourcesNotFoundException, NotValidImageException {
        File file = new File("./src/main/resources/imagenesPrueba/dfdf.png");
        FileInputStream input = new FileInputStream(file);
        MultipartFile imagen = new MockMultipartFile("dfdf.png",
                file.getName(), "multipart/form-data", IOUtils.toByteArray(input));
        Categoria categoria2 = new Categoria();
        categoria2.setTitulo("Categoria prueba");
        categoria2.setDescripcion("descripcion");
        Categoria categoriaPrueba = categoriaService.insert(categoria2.getTitulo(), categoria2.getDescripcion(),imagen);
        categoriaPrueba.setTitulo("titulo modificado");
        categoriaPrueba.setDescripcion("descripcion cambiada");
        Boolean respuesta = categoriaService.update(categoriaPrueba.getId(), categoriaPrueba.getTitulo(), categoriaPrueba.getDescripcion(),imagen);
        Assertions.assertTrue(respuesta);
        categoriaService.delete(categoriaPrueba.getId());
    }






}