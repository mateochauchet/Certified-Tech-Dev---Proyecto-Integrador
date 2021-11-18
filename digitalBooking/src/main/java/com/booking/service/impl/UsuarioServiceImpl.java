package com.booking.service.impl;

import com.booking.entity.Usuario;
import com.booking.exceptions.NotExistDataException;
import com.booking.repository.IUsuarioRepository;
import com.booking.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UsuarioServiceImpl implements IUsuarioService {

    @Autowired
    IUsuarioRepository usuarioRepository;


    @Override
    public void insert(Usuario usuario) throws NotExistDataException {

        if(usuario.getNombre() == null || usuario.getApellido() == null || usuario.getEmail()==null || usuario.getContrasena() == null || usuario.getNombre().trim() == "" || usuario.getApellido().trim() == "" || usuario.getEmail().trim() ==""|| usuario.getContrasena().trim()=="")
            throw  new NotExistDataException("alguno de los campos se encuentra vacio");
        else {
            usuarioRepository.save(usuario);
        }
    }

    @Override
    public List<Usuario> readAll() {
        return usuarioRepository.findAll();
    }
}
