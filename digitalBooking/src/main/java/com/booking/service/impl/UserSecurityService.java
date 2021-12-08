package com.booking.service.impl;

import com.booking.entity.Rol;
import com.booking.entity.Usuario;
import com.booking.repository.IRolRepository;
import com.booking.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserSecurityService implements UserDetailsService {

    private final IUsuarioRepository usuarioRepository;
    private final IRolRepository rolRepository;

    @Autowired
    public UserSecurityService(IUsuarioRepository usuarioRepository, IRolRepository rolRepository) {
        this.usuarioRepository = usuarioRepository;
        this.rolRepository = rolRepository;

    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        Set<GrantedAuthority> autorizacion = new HashSet<>();
        List<Rol> roles = rolRepository.findAll();
        Optional<Usuario> usuario = usuarioRepository.findByEmail(s);
        if(usuario.isPresent()){
            GrantedAuthority autorizacionUsuario = new SimpleGrantedAuthority(obtenerRol(usuario.get().getRol().getId(),roles).getNombre());
            autorizacion.add(autorizacionUsuario);
            return new User(usuario.get().getEmail(),usuario.get().getPassword(),true,true,
                    true,true,autorizacion);

        }
        else
            throw new UsernameNotFoundException("no se encontro al usuario con email: ");
    }

    private Rol obtenerRol(Long id, List<Rol> roles){
        Rol rol2 = null;
        for (Rol rol: roles) {
            if(rol.getId() == id)
                rol2 =  rol;
        }
        return  rol2;
    }

}