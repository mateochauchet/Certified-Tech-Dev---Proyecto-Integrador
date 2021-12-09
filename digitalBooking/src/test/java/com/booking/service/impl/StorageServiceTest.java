package com.booking.service.impl;

import com.booking.entity.Caracteristica;
import org.apache.commons.io.IOUtils;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StorageServiceTest {
    @Autowired
    private StorageService storageService;

    @Test
    void uploadFile() throws IOException {
        File file = new File("./src/main/resources/imagenesPrueba/dfdf.png");
        FileInputStream input = new FileInputStream(file);
        MultipartFile imagen = new MockMultipartFile("dfdf.png",
                file.getName(), "multipart/form-data", IOUtils.toByteArray(input));
        String respuesta = storageService.uploadFile(imagen,"productos/");
        Assertions.assertNotNull(respuesta);
        storageService.deleteFile(respuesta);
    }


}