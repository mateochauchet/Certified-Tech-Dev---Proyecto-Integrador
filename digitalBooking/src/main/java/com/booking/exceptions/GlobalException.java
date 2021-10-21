package com.booking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.io.IOException;

@ControllerAdvice
public class GlobalException {

    @ExceptionHandler({ResourcesNotFoundException.class})
    public ResponseEntity<String> procesarResourcesNotFound(ResourcesNotFoundException exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @ExceptionHandler({NotExistDataException.class})
    public ResponseEntity<String> procesarNotExistDataException(NotExistDataException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler({InvalidDataException.class})
    public ResponseEntity<String> procesarInvalidDataExceptio(InvalidDataException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler({NotValidImage.class})
    public ResponseEntity<String> procesarNotValidImage(NotValidImage exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler({IOException.class})
    public ResponseEntity<String> procesarIOException(IOException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("la imagen no se pudo guardar");
    }
}
