package com.booking.service;
import com.booking.entity.Ciudad;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.ResourcesNotFoundException;

import java.util.List;
import java.util.Optional;

public interface ICiudadService {
    public abstract Optional<Ciudad> readOne(Long id) throws ResourcesNotFoundException;
    public abstract List<Ciudad> readAll();
    public abstract Ciudad insert(Ciudad ciudad) throws InvalidDataException, ResourcesNotFoundException;
}
