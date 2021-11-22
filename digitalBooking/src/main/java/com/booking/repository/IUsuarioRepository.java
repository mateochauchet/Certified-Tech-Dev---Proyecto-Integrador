package com.booking.repository;

import com.booking.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario,Long> {

    @Query("select u.email , u.password from Usuario  u where u.email = :email ")
    Optional<Usuario> findByEmail(@Param("email") String email);

}
