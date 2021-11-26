package com.booking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.io.FileNotFoundException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.time.DateTimeException;

@ControllerAdvice
public class GlobalException {

    @ExceptionHandler({ResourcesNotFoundException.class})
    public ResponseEntity<String> procesarResourcesNotFound(ResourcesNotFoundException exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @ExceptionHandler({DateTimeException.class})
    public ResponseEntity<String> procesarResourcesNotFound(DateTimeException exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El formato de la fecha ingresado no es valido");
    }



    @ExceptionHandler({InvalidDataException.class})
    public ResponseEntity<String> procesarInvalidDataExceptio(InvalidDataException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler({NotValidImageException.class})
    public ResponseEntity<String> procesarNotValidImage(NotValidImageException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }



    @ExceptionHandler({SQLIntegrityConstraintViolationException.class})
    public ResponseEntity<String> procesarSQLIntegrityConstraintViolationException(SQLIntegrityConstraintViolationException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler({BadCredentialsException.class})
    public ResponseEntity<String> procesarBadCredentialsException(BadCredentialsException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }

    @ExceptionHandler({NotPermissionException.class})
    public ResponseEntity<String> procesarNotPermission(NotPermissionException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exception.getMessage());
    }
/*
    @ExceptionHandler({IOException.class})
    public ResponseEntity<String> procesarIOException(IOException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("la imagen no se pudo guardar o leer la imagen");
    }

 */

    @ExceptionHandler({FileNotFoundException.class})
    public ResponseEntity<String> procesarFileNotFoundException(FileNotFoundException exception){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("no se pudo leer la imagen");
    }
}
