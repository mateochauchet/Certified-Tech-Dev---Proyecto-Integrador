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
import org.springframework.web.multipart.MultipartFile;

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
    public Categoria insert(String titulo, String descripcion, MultipartFile file) throws InvalidDataException, NotExistDataException, NotValidImage, IOException {
        if(descripcion == null || titulo ==null || titulo.trim() == "" || descripcion.trim() == "")
             throw  new NotExistDataException("el campo del titulo o el campo de la descripcion se encuentra vacio");
        else if(descripcion.trim().length()>100 || titulo.trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");
        String imagen = null;
        if(file != null && !file.isEmpty()) {
            imagen =  storageService.uploadFile(file,"/categorias");
        }
        Categoria categoria = new Categoria(titulo.trim(), descripcion.trim(), imagen);
        return categoriaRepository.save(categoria);
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
    public Boolean update(Long id, String titulo, String descripcion, MultipartFile file) throws InvalidDataException, NotExistDataException, NotValidImage, IOException, ResourcesNotFoundException {
        Optional<Categoria> categoria2 = readOne(id);
        if(id == null||descripcion == null || titulo ==null || titulo.trim() == "" || descripcion.trim() == "" )
            throw  new NotExistDataException("el campo del titulo o el campo de la descripcion se encuentra vacio");
        else if(descripcion.trim().length()>100 || titulo.trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");
        if(file != null && !file.isEmpty()) {
            storageService.deleteFile(categoria2.get().getImagen());
            String imagen = storageService.uploadFile(file, "categorias/");
            categoria2.get().setImagen(imagen);
        }
        categoria2.get().setTitulo(titulo);
        categoria2.get().setDescripcion(descripcion);
        categoriaRepository.save(categoria2.get());
        return true;

    }
}
