package com.booking.service;

import com.booking.entity.Categoria;
import com.booking.entity.Ciudad;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.exceptions.NotValidImage;

import java.io.IOException;
import java.util.List;

public interface ICiudadService {
    public abstract List<Ciudad> readAll();
    public abstract Ciudad insert(Ciudad ciudad) throws InvalidDataException, NotExistDataException;
}
