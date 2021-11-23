package com.booking.service.impl;

import com.booking.entity.Usuario;
import com.booking.exceptions.InvalidDataException;
import com.booking.exceptions.NotExistDataException;
import com.booking.repository.IUsuarioRepository;
import com.booking.service.IUsuarioService;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements IUsuarioService {

    @Autowired
    IUsuarioRepository usuarioRepository;


    @Override
    public void insert(Usuario usuario) throws NotExistDataException, InvalidDataException {

        if(usuario.getNombre() == null || usuario.getApellido() == null || usuario.getEmail()==null || usuario.getPassword() == null || usuario.getNombre().trim() == "" || usuario.getApellido().trim() == "" || usuario.getEmail().trim() ==""|| usuario.getPassword().trim()=="")
            throw  new NotExistDataException("alguno de los campos se encuentra vacio");
        else if (usuario.getNombre().trim().length() > 50 || usuario.getApellido().trim().length() > 50 || usuario.getEmail().trim().length() > 50)
            throw new InvalidDataException("alguno de los campos supera los 50 caracteres permitidos");
        else {
            String sha256 = DigestUtils.sha256Hex(usuario.getPassword());
            usuario.setPassword(sha256);
            usuarioRepository.save(usuario);
        }
    }


    public Optional<Usuario> readById(Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        return usuario;
    }
}