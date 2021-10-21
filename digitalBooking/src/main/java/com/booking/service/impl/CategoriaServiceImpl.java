package com.booking.service.impl;

import com.booking.entity.Categoria;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.NotValidImage;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.ICategoriaRepository;
import com.booking.service.ICategoriaService;
import com.booking.util.StringBase64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service("CategoriaServiceImpl")
public class CategoriaServiceImpl implements ICategoriaService {

    @Autowired
    private ICategoriaRepository categoriaRepository;

    @Override
    public Optional<Categoria> readOne(Long id) throws ResourcesNotFoundException{
        Optional<Categoria> respuesta = categoriaRepository.findById(id);
        if(!respuesta.isPresent())
            throw new ResourcesNotFoundException("la categoria con Id "+ id+ " no existe");

        return respuesta;
    }

    @Override
    public List<Categoria> readAll() {
        return categoriaRepository.findAll();
    }

    @Override
    public Categoria insert(Categoria categoria) throws InvalidDataException, NotExistDataException, NotValidImage, IOException {
        if(categoria.getDescripcion() == null || categoria.getTitulo() ==null)
             throw  new NotExistDataException("el campo del titulo o el campo de la descripcion se encuenyra vacio");
        else if(categoria.getDescripcion().length()>100 || categoria.getTitulo().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");

        if(categoria.getImagen() != null && categoria.getImagen() != "")
            categoria.setImagen(StringBase64.saveImagen(categoria.getImagen()));

        return categoriaRepository.save(categoria);
    }

    @Override
    public Boolean delete(Long id)throws ResourcesNotFoundException {
        if(!categoriaRepository.findById(id).isPresent())
            throw new ResourcesNotFoundException("la categoria con Id "+ id+ " no existe");

        categoriaRepository.deleteById(id);
        return true;
    }

    @Override
    public Boolean update(Categoria categoria) throws InvalidDataException, NotExistDataException, NotValidImage, IOException {

        if(categoria.getId() == null||categoria.getDescripcion() == null || categoria.getTitulo() ==null)
            throw  new NotExistDataException("el campo del titulo o el campo de la descripcion se encuentra vacio");
        else if(categoria.getDescripcion().length()>100 || categoria.getTitulo().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");

        if(categoria.getImagen() != null && categoria.getImagen() != "")
            categoria.setImagen(StringBase64.saveImagen(categoria.getImagen()));

        categoriaRepository.save(categoria);
        return true;
    }
}
