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

        GrantedAuthority autorizacionCliente = new SimpleGrantedAuthority("ROLE_CLIENTE");
        GrantedAuthority autorizacionAdmin = new SimpleGrantedAuthority("ROLE_ADMIN");

        autorizacionC.add(autorizacionCliente);
        autorizacionA.add(autorizacionAdmin);

        Optional<Usuario> odontologo = odontologoRepository.findByEmail(s);
        Optional<Paciente> paciente = pacienteRepository.findByEmail(s);
        Optional<Administrador> administrador = administradorRepository.findByEmail(s);


        if(odontologo.isPresent()){
            return new User(odontologo.get().getEmail(),odontologo.get().getPassword(),true,true,
                    true,true,autorizacionO);
        }
        else if(paciente.isPresent()){
            return new User(paciente.get().getEmail(),paciente.get().getPassword(),true,true,
                    true,true,autorizacionP);
        }else if(administrador.isPresent()){
            return new User(administrador.get().getEmail(),administrador.get().getPassword(),true,true,true,true,autorizacionA);

        }else{
            throw new UsernameNotFoundException("no se encontro al usuario con email: ");
        }

    }