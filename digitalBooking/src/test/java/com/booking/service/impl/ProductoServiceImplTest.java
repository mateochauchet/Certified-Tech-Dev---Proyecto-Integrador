package com.booking.service.impl;

import com.booking.entity.Caracteristica;
import com.booking.entity.Categoria;
import com.booking.entity.Ciudad;
import com.booking.entity.Producto;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotValidImageException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.ICategoriaRepository;
import com.booking.repository.IProductoRepository;
import com.booking.service.ICaracteristicaService;
import com.booking.service.ICategoriaService;
import com.booking.service.ICiudadService;
import com.booking.service.IProductoService;
import org.apache.commons.io.IOUtils;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItem;
import org.joda.time.LocalDate;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.time.format.DateTimeFormatter;
import java.util.*;

@SpringBootTest
class ProductoServiceImplTest {



    @Autowired
    private IProductoService productoService;

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private ICiudadService ciudadService;

    @Autowired
    private ICategoriaService categoriaService;

    @Autowired
    private ICaracteristicaService caracteristicaService;

    @Test
    public void insert() throws IOException, ResourcesNotFoundException, InvalidDataException {
        File file = new File("./src/main/resources/imagenesPrueba/dfdf.png");
        FileInputStream input = new FileInputStream(file);
        MultipartFile multipartFile = new MockMultipartFile("dfdf,png",
                file.getName(), "multipart/form-data", IOUtils.toByteArray(input));
        List<MultipartFile> imagenes = Arrays.asList(multipartFile);
        System.out.println(imagenes.get(0).getOriginalFilename());
        Set<Caracteristica> caracteristicas = new HashSet<>();
        caracteristicas.addAll(caracteristicaService.readAll());
        Ciudad ciudad = ciudadService.readOne(1L).get();
        Categoria categoria = categoriaService.readOne(1L).get();
        Producto producto2 = new Producto("productoPrueba","esta es la descripcion","norma", "salud seguridad", "cancelacion", "-454", "-76", 8, "titulo-descripcion", categoria,ciudad,caracteristicas);
        Producto producto = productoService.insert(producto2,imagenes);
        Assertions.assertTrue(producto.getNombre().equals(producto2.getNombre()));
        productoRepository.deleteById(producto.getId());
    }

    @Test
    public void readAll() {
        List<Producto> respuesta = productoService.readAll();
        Assertions.assertTrue(respuesta.size()>0);
    }

    @Test
    public void readOne() throws ResourcesNotFoundException {
        Optional<Producto> productos = productoService.readOne(2L);
        Assertions.assertTrue(productos.isPresent());
    }

    @Test
    public void getProductsByCategory() throws ResourcesNotFoundException{
        List<Producto> respuesta = productoService.getProductsByCategory("VILLAS");
        Assertions.assertTrue(respuesta.size()>0);
    }

    @Test
    public void getProductsByCity() throws ResourcesNotFoundException {
        List<Producto> respuesta = productoService.getProductsByCity("Barcelona");
        Assertions.assertTrue(respuesta.size()>0);
    }

    @Test
    public void getProductsOfReservaByDate() throws ResourcesNotFoundException{
        java.time.LocalDate fecha_inicio2 = java.time.LocalDate.parse("2021-11-26", DateTimeFormatter.ofPattern( "yyy-MM-dd"));
        java.time.LocalDate fecha_fin2 = java.time.LocalDate.parse("2021-11-30", DateTimeFormatter.ofPattern( "yyy-MM-dd"));
        List<Producto> respuesta = productoService.getProductsOfReservaByDate(fecha_inicio2,fecha_fin2);
        Assertions.assertTrue(respuesta.size() > 0);
    }






}