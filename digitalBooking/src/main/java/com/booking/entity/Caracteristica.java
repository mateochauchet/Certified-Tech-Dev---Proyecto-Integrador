package com.booking.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table(name = "caracteristica")
@NoArgsConstructor
public class Caracteristica {

    @Id
    @Column(name = "id_caracteristica")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Getter
    @Setter
    @NotNull
    @Size(max = 50)
    @Column(name = "nombre", length = 50)
    private String nombre;

    @Getter
    @Setter
    @Size(max = 100)
    @Column(name = "icono", length = 100)
    private String icono;

    public Caracteristica(String nombre, String icono) {
        this.nombre = nombre;
        this.icono = icono;
    }
}
