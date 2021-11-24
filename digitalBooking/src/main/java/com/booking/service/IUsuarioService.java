package com.booking.service;
import com.booking.entity.Usuario;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import java.util.Optional;

public interface IUsuarioService {


    public void insert (Usuario usuario) throws NotExistDataException , InvalidDataException;
    public Optional<Usuario> readById(Long id);

}
