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
    public Optional<Categoria> readOne(Long id) throws ResourcesNotFoundException, IOException {
        Optional<Categoria> respuesta = categoriaRepository.findById(id);
        if(!respuesta.isPresent())
            throw new ResourcesNotFoundException("la categoria con Id "+ id+ " no existe");

        if(respuesta.get().getImagen() != null && respuesta.get().getImagen() != "" && respuesta.get().getImagen().length()>0)
            respuesta.get().setImagen(StringBase64.imageToBase64(respuesta.get().getImagen()));

        return respuesta;
    }

    @Override
    public List<Categoria> readAll() throws IOException {

        List<Categoria> categorias = categoriaRepository.findAll();
        for (Categoria categoria: categorias) {
            if(categoria.getImagen() != null && categoria.getImagen() != ""  && categoria.getImagen().length()>0 )
                categoria.setImagen(StringBase64.imageToBase64(categoria.getImagen()));
        }
        return categorias;
    }

    @Override
    public Categoria insert(Categoria categoria) throws InvalidDataException, NotExistDataException, NotValidImage, IOException {
        if(categoria.getDescripcion() == null || categoria.getTitulo() ==null || categoria.getTitulo().trim() == "" || categoria.getDescripcion().trim() == "")
             throw  new NotExistDataException("el campo del titulo o el campo de la descripcion se encuentra vacio");
        else if(categoria.getDescripcion().trim().length()>100 || categoria.getTitulo().trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");
        if(categoria.getImagen() != null && categoria.getImagen() != "" && categoria.getImagen().length()>0)
            categoria.setImagen(StringBase64.saveImagen(categoria.getImagen()));

        categoria.setDescripcion(categoria.getDescripcion().trim());
        categoria.setTitulo(categoria.getTitulo().trim());
        return categoriaRepository.save(new Categoria(categoria.getTitulo(),categoria.getDescripcion(),categoria.getImagen()));
    }

    @Override
    public Boolean delete(Long id)throws ResourcesNotFoundException {
        if(!categoriaRepository.findById(id).isPresent())
            throw new ResourcesNotFoundException("la categoria con Id "+ id+ " no existe");

        categoriaRepository.deleteById(id);
        return true;
    }

    @Override
    public Boolean update(Categoria categoria) throws InvalidDataException, NotExistDataException, NotValidImage, IOException, ResourcesNotFoundException {
        if(categoria.getId() == null||categoria.getDescripcion() == null || categoria.getTitulo() ==null || categoria.getTitulo().trim() == "" || categoria.getDescripcion().trim() == "" )
            throw  new NotExistDataException("el campo del titulo o el campo de la descripcion se encuentra vacio");
        else if(categoria.getDescripcion().trim().length()>100 || categoria.getTitulo().trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");
        if(readOne(categoria.getId()).isPresent()){
            if(categoria.getImagen() != null && categoria.getImagen() != "" && categoria.getImagen().length()>0)
                categoria.setImagen(StringBase64.saveImagen(categoria.getImagen()));

            categoria.setDescripcion(categoria.getDescripcion().trim());
            categoria.setTitulo(categoria.getTitulo().trim());
            categoriaRepository.save(categoria);
            return true;
        }else
            throw new ResourcesNotFoundException("la categoria a modificar no existe");


    }
}
