package com.booking.service.impl;

import com.booking.entity.Categoria;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.NotValidImage;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.ICategoriaRepository;
import com.booking.service.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service("CategoriaServiceImpl")
public class CategoriaServiceImpl implements ICategoriaService {

    @Autowired
    private ICategoriaRepository categoriaRepository;
    @Autowired
    private StorageService storageService;

    @Override
    public Optional<Categoria> readOne(Long id) throws ResourcesNotFoundException,  IOException {
        Optional<Categoria> respuesta = categoriaRepository.findById(id);
        if(!respuesta.isPresent())
            throw new ResourcesNotFoundException("la categoria con Id "+ id+ " no existe");
        return respuesta;
    }

    @Override
    public List<Categoria> readAll(){
        return categoriaRepository.findAll();
    }

    @Override
    public Categoria insert(Categoria categoria) throws InvalidDataException, NotExistDataException, NotValidImage, IOException {
        if(categoria.getDescripcion() == null || categoria.getTitulo() ==null || categoria.getTitulo().trim() == "" || categoria.getDescripcion().trim() == "")
             throw  new NotExistDataException("el campo del titulo o el campo de la descripcion se encuentra vacio");
        else if(categoria.getDescripcion().trim().length()>100 || categoria.getTitulo().trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");
        if(categoria.getImagen() != null && categoria.getImagen() != "" && categoria.getImagen().length()>0)
            categoria.setImagen(storageService.uploadFile(storageService.imageToFile(categoria.getImagen())));

        categoria.setDescripcion(categoria.getDescripcion().trim());
        categoria.setTitulo(categoria.getTitulo().trim());
        return categoriaRepository.save(new Categoria(categoria.getTitulo(),categoria.getDescripcion(),categoria.getImagen()));
    }

    @Override
    public Boolean delete(Long id) throws ResourcesNotFoundException, IOException {
        Optional<Categoria> categoria = readOne(id);
        if(!categoria.isPresent())
            throw new ResourcesNotFoundException("la categoria con Id "+ id+ " no existe");
        storageService.deleteFile(categoria.get().getImagen());
        categoriaRepository.deleteById(id);
        return true;
    }

    @Override
    public Boolean update(Categoria categoria) throws InvalidDataException, NotExistDataException, NotValidImage, IOException, ResourcesNotFoundException {
        Optional<Categoria> categoria2 = readOne(categoria.getId());
        if(categoria.getId() == null||categoria.getDescripcion() == null || categoria.getTitulo() ==null || categoria.getTitulo().trim() == "" || categoria.getDescripcion().trim() == "" )
            throw  new NotExistDataException("el campo del titulo o el campo de la descripcion se encuentra vacio");
        else if(categoria.getDescripcion().trim().length()>100 || categoria.getTitulo().trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");

        if(categoria.getImagen() != null && categoria.getImagen() != "" && categoria.getImagen().length()>0) {
            if (categoria.getImagen() != categoria2.get().getImagen()) {
                storageService.deleteFile(categoria.getImagen());
                categoria.setImagen(storageService.uploadFile(storageService.imageToFile(categoria.getImagen())));
            }
        }
        categoria.setDescripcion(categoria.getDescripcion().trim());
        categoria.setTitulo(categoria.getTitulo().trim());
        categoriaRepository.save(categoria);
        return true;

    }
}
