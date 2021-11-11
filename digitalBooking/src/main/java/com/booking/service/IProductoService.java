package com.booking.service;

import com.booking.entity.Producto;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.ResourcesNotFoundException;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface IProductoService {

    Producto insert(Producto producto,  List<MultipartFile> files) throws InvalidDataException, NotExistDataException, ResourcesNotFoundException, IOException;
    List<Producto> readAll();
    Optional<Producto> readOne(Long id) throws ResourcesNotFoundException;
    List<Producto> getProductsByCategory(String titulo) throws ResourcesNotFoundException;
    List<Producto> getProductsByCity(String nombre)throws ResourcesNotFoundException;

}
