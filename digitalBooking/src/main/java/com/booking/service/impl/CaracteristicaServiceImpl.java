package com.booking.service.impl;

import com.booking.entity.Caracteristica;
import com.booking.entity.Ciudad;
import com.booking.repository.ICaracteristicaRepository;
import com.booking.service.ICaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaracteristicaServiceImpl implements ICaracteristicaService {

    @Autowired
    ICaracteristicaRepository caracteristicaRepository ;


    public List<Caracteristica> readAll() {
        return caracteristicaRepository.findAll();
    }

}
