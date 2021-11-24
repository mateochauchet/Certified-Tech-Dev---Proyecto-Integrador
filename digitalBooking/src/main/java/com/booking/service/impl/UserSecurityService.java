package com.booking.service.impl;

import com.booking.entity.Usuario;
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
import java.util.Optional;
import java.util.Set;

@Service
public class UserSecurityService implements UserDetailsService {

    private final IUsuarioRepository usuarioRepository;

    @Autowired
    public UserSecurityService(IUsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;

    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        Set<GrantedAuthority> autorizacionC = new HashSet<>();
        Set<GrantedAuthority> autorizacionA = new HashSet<>();

        GrantedAuthority autorizacionCliente = new SimpleGrantedAuthority("ROLE_CLIENT");
        GrantedAuthority autorizacionAdmin = new SimpleGrantedAuthority("ROLE_ADMIN");

        autorizacionC.add(autorizacionCliente);
        autorizacionA.add(autorizacionAdmin);

        Optional<Usuario> usuario = usuarioRepository.findByEmail(s);


        if(usuario.get().getRol().getId() == 1){
            return new User(usuario.get().getEmail(),usuario.get().getPassword(),true,true,
                    true,true,autorizacionC);
        }
        else if(usuario.get().getRol().getId() == 2){
            return new User(usuario.get().getEmail(),usuario.get().getPassword(),true,true,
                    true,true,autorizacionA);
        }else
            throw new UsernameNotFoundException("no se encontro al usuario con email: ");

    }

}