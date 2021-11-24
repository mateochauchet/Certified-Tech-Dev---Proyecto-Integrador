package com.booking.service.impl;

import com.booking.entity.Categoria;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotValidImageException;
import com.booking.exceptions.ResourcesNotFoundException;
import com.booking.repository.ICategoriaRepository;
import com.booking.service.ICategoriaService;
import org.apache.commons.io.FilenameUtils;
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
    public Categoria insert(String titulo, String descripcion, MultipartFile file) throws InvalidDataException, ResourcesNotFoundException, NotValidImageException, IOException {
        Categoria categoria = new Categoria();
        if(descripcion == null || titulo ==null || titulo.trim() == "" || descripcion.trim() == "")
             throw  new ResourcesNotFoundException("el campo del titulo o el campo de la descripcion se encuentra vacio");
        else if(descripcion.trim().length()>100 || titulo.trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");
        if(!file.isEmpty()){
            if(!FilenameUtils.getExtension(file.getOriginalFilename()).equalsIgnoreCase("jpg") || !FilenameUtils.getExtension(file.getOriginalFilename()).equalsIgnoreCase("png"))
                throw new InvalidDataException("no es valido la imagen a subir, debe ser en formato jpg o png ");
            else
                categoria.setImagen(storageService.uploadFile(file,"/categorias/"));
        }

        categoria.setTitulo(titulo.trim());
        categoria.setDescripcion(descripcion.trim());
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
    public Boolean update(Long id, String titulo, String descripcion, MultipartFile file) throws InvalidDataException,  NotValidImageException, IOException, ResourcesNotFoundException {
        Optional<Categoria> categoria2 = readOne(id);
        if(id == null||descripcion == null || titulo ==null || titulo.trim() == "" || descripcion.trim() == "" )
            throw  new ResourcesNotFoundException("el campo del titulo o el campo de la descripcion se encuentra vacio");
        else if(descripcion.trim().length()>100 || titulo.trim().length()>50)
            throw new InvalidDataException("no es valida la cantidad de caracteres que tiene la descripcion (no puede ser mayor a 100 caracteres)\n o el titulo (no puede ser mayor a 50 caracteres) ");
        if(!file.isEmpty()){
            if(!FilenameUtils.getExtension(file.getOriginalFilename()).equalsIgnoreCase("jpg") || !FilenameUtils.getExtension(file.getOriginalFilename()).equalsIgnoreCase("png"))
                throw new InvalidDataException("no es valido la imagen a subir, debe ser en formato jpg o png ");
            else{
                storageService.deleteFile(categoria2.get().getImagen());
                categoria2.get().setImagen(storageService.uploadFile(file, "/categorias/"));
            }
        }

        categoria2.get().setTitulo(titulo);
        categoria2.get().setDescripcion(descripcion);
        categoriaRepository.save(categoria2.get());
        return true;

    }
}
