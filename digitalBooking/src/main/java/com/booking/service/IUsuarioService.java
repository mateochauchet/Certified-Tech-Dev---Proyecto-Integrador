package com.booking.service;
import com.booking.entity.Usuario;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotPermissionException;
import com.booking.exceptions.ResourcesNotFoundException;

import java.util.Optional;

public interface IUsuarioService {


    public void insert (Usuario usuario) throws ResourcesNotFoundException , InvalidDataException;
    public Optional<Usuario> readById(Long id) throws ResourcesNotFoundException;
    public Usuario readByEmail(String email, String password) throws ResourcesNotFoundException, NotPermissionException;

}
