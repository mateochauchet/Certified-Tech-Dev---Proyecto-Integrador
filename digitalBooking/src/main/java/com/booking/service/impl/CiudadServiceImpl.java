package com.booking.service.impl;
import com.booking.entity.Ciudad;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.repository.ICiudadRepository;
import com.booking.service.ICiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service("CiudadServiceImpl")
public class CiudadServiceImpl implements ICiudadService {

    @Autowired
    private ICiudadRepository ciudadRepository;

    @Override
    public List<Ciudad> readAll() {
        return ciudadRepository.findAll();
    }

    @Override
    public Ciudad insert(Ciudad ciudad) throws InvalidDataException, NotExistDataException {

        if(ciudad.getPais() == null || ciudad.getNombre() == null || ciudad.getPais().trim() == "" || ciudad.getNombre().trim() == "")
           throw new NotExistDataException("el dato de pais o nombre de la ciudad se encuentra vacio");
        else if(ciudad.getPais().trim().length() > 100 || ciudad.getNombre().trim().length()>50)
            throw new InvalidDataException("El pais de la ciudad supera los 100 caracteres permitidos o el nombre de la ciudad supera los 50 caracteres permitidos");
        else{
            ciudad.setNombre(ciudad.getNombre().trim());
            ciudad.setPais(ciudad.getPais().trim());
            return ciudadRepository.save(ciudad);
        }
    }
}
