package com.booking.controller;

import com.booking.entity.Categoria;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.NotValidImage;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.ICategoriaRepository;
import com.booking.service.ICategoriaService;
import com.booking.util.StringBase64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;


@Controller
@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "*")
public class CategoriaController {

    @Autowired
    @Qualifier("CategoriaServiceImpl")
    private ICategoriaService categoriaService;

    @GetMapping("/")
    public ResponseEntity<List<Categoria>>  readAll(){
        return new ResponseEntity<>(categoriaService.readAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> readOne(@PathVariable("id") Long id) throws ResourcesNotFoundException {
        return new ResponseEntity<>(categoriaService.readOne(id).get(),HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<Categoria> insert(@RequestBody Categoria categoria) throws NotExistDataException, InvalidDataException, NotValidImage, IOException {
        return new ResponseEntity<>(categoriaService.insert(categoria),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable("id") Long id) throws ResourcesNotFoundException {
        return new ResponseEntity<>(categoriaService.delete(id),HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<Boolean> update(@RequestBody Categoria categoria) throws NotExistDataException, InvalidDataException, NotValidImage, IOException {
        return new ResponseEntity<>(categoriaService.update(categoria),HttpStatus.OK);
    }


}
