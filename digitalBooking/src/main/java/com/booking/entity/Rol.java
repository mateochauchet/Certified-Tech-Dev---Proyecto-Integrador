package com.booking.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "rol")

@NoArgsConstructor
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_rol")
    @Getter
    private Long id;

    @Column(name = "nombre",length = 50)
    @Getter @Setter
    @NotNull
    @Size(max=50)
    private String nombre;

    public Rol(String nombre) {
        this.nombre = nombre;
    }
}
