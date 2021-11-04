package com.booking.service;

import com.booking.entity.Producto;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.ResourcesNotFoundException;


import java.util.List;
import java.util.Optional;

public interface IProductoService {

    Producto insert(Producto producto) throws InvalidDataException, NotExistDataException;
    List<Producto> readAll();
    Optional<Producto> readOne(Long id) throws ResourcesNotFoundException;
    List<Producto> getProductsByCategory(String titulo) throws ResourcesNotFoundException;
    List<Producto> getProductsByCity(String nombre)throws ResourcesNotFoundException;

}
