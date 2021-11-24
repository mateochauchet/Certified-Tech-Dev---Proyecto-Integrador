package com.booking.service;

import com.booking.entity.Categoria;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotValidImageException;
import com.booking.exceptions.ResourcesNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ICategoriaService {
    public abstract Optional<Categoria> readOne(Long id) throws ResourcesNotFoundException, IOException;
    public abstract List<Categoria> readAll() throws IOException;
    public abstract Categoria insert(String titulo, String descripcion, MultipartFile file) throws InvalidDataException, ResourcesNotFoundException, NotValidImageException, IOException;
    public abstract Boolean delete(Long id ) throws ResourcesNotFoundException, IOException;
    public abstract Boolean update(Long id, String titulo, String descripcion, MultipartFile file) throws InvalidDataException, ResourcesNotFoundException, NotValidImageException, IOException, ResourcesNotFoundException;
}
