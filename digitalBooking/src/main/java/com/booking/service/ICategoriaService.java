package com.booking.service;

import com.booking.entity.Categoria;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.NotValidImage;
import com.booking.exceptions.ResourcesNotFoundException;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ICategoriaService {
    public abstract Optional<Categoria> readOne(Long id) throws ResourcesNotFoundException, IOException;
    public abstract List<Categoria> readAll() throws IOException;
    public abstract Categoria insert(Categoria categoria) throws InvalidDataException, NotExistDataException, NotValidImage, IOException;
    public abstract Boolean delete(Long id )throws ResourcesNotFoundException;
    public abstract Boolean update(Categoria categoria) throws InvalidDataException, NotExistDataException, NotValidImage, IOException, ResourcesNotFoundException;
}
