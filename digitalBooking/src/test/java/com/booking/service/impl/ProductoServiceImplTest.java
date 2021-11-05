package com.booking.service.impl;

import com.booking.entity.Categoria;
import com.booking.entity.Producto;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.NotValidImage;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.service.ICategoriaService;
import com.booking.service.IProductoService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class ProductoServiceImplTest {

    @Autowired
    private IProductoService productoService;

    @Test
    public void readOne() throws ResourcesNotFoundException{
        Long id = 1L;
        Optional<Producto> respuesta = productoService.readOne(id);
        Assertions.assertTrue(respuesta.isPresent());
    }

    @Test
    public void readAll(){
        List<Producto> productos = productoService.readAll();
        Assertions.assertTrue(productos.size()>0);
    }

    @Test
    public void insert() throws InvalidDataException, NotExistDataException {
        Producto producto1 = new Producto();
        producto1.setNombre("pp");
        producto1.setDescripcion("descripcion1");
        Producto respuesta = productoService.insert(producto1);
        Assertions.assertTrue(respuesta.getNombre() == producto1.getNombre());
    }

}