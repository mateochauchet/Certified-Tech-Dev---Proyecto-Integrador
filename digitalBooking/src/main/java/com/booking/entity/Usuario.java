package com.booking.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "usuario")
@NoArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    @Getter
    private Long id;

    @Column(name = "nombre",length = 50)
    @Getter @Setter
    @NotNull
    @Size(max=50)
    private String nombre;

    @Column(name = "apellido",length = 50)
    @Getter @Setter
    @NotNull
    @Size(max=50)
    private String apellido;

    @Column(name = "email",length = 50)
    @Getter @Setter
    @NotNull
    @Size(max=50)
    private String email;

    @Column(name = "pass",length = 100)
    @Getter @Setter
    @NotNull
    @Size(max = 100)
    private String password;

    @ManyToOne
    @JoinColumn(name = "id_rol", nullable = false)
    @Getter @Setter
    private Rol rol;

    @OneToMany(mappedBy = "usuario")
    private Set<Reserva> reservas = new HashSet<>();

    public Usuario(String nombre, String apellido, String email, String password, Rol rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }

    public Usuario(String nombre, String apellido, String email, String password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.rol = null;
    }
}
