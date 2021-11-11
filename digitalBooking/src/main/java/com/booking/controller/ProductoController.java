package com.booking.controller;

import com.booking.entity.Categoria;
import com.booking.entity.Producto;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.NotValidImage;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.service.IProductoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Controller
@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*")
public class ProductoController {

    @Autowired
    @Qualifier("ProductoServiceImpl")
    private IProductoService productoService;

    @PostMapping("/")
    public ResponseEntity<Producto> insert(@RequestParam(value="imagenes") List<MultipartFile> files,@RequestParam(value="producto") String producto) throws NotExistDataException, InvalidDataException, ResourcesNotFoundException, IOException {
        ObjectMapper mapper = new ObjectMapper();
        Producto producto2 = null;
        producto2 = mapper.readValue(producto, Producto.class);
        return new ResponseEntity<>(productoService.insert(producto2, files), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Producto>>  readAll() {
        return new ResponseEntity<>(productoService.readAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> readOne(@PathVariable("id") Long id) throws ResourcesNotFoundException{
        return new ResponseEntity<>(productoService.readOne(id).get(),HttpStatus.OK);
    }

    @GetMapping("categoria/{titulo}")
    public ResponseEntity <List<Producto>> getProductsByCategory(@PathVariable("titulo") String titulo) throws ResourcesNotFoundException{
        return  new ResponseEntity<>(productoService.getProductsByCategory(titulo),HttpStatus.OK);
    }

    @GetMapping("ciudad/{nombre}")
    public ResponseEntity <List<Producto>> getProductsByCity(@PathVariable("nombre") String nombre)throws ResourcesNotFoundException{
        return  new ResponseEntity<>(productoService.getProductsByCity(nombre),HttpStatus.OK);
    }





}
