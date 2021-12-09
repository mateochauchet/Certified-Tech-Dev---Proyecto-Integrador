package com.booking.service.impl;
import com.booking.entity.Caracteristica;
import com.booking.service.ICaracteristicaService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class CaracteristicaServiceImplTest {

    @Autowired
    private ICaracteristicaService caracteristicaService;


    @Test
    void readAll() {
        List<Caracteristica> respuestas = caracteristicaService.readAll();
        Assertions.assertTrue(respuestas.size()>0);

    }
}