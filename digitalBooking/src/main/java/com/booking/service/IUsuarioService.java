package com.booking.service;

import com.booking.entity.Usuario;
import com.booking.exceptions.NotExistDataException;

import java.util.List;

public interface IUsuarioService {


    public void insert (Usuario usuario) throws NotExistDataException;


    public List<Usuario> readAll();


}
