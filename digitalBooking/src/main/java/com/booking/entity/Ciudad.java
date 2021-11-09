package com.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table(name= "ciudad")
@NoArgsConstructor
public class Ciudad {

    public Ciudad(String nombre, String pais) {
        this.nombre = nombre;
        this.pais = pais;
    }

    @Id
    @Column(name="id_ciudad")
    @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="nombre",length = 50)
    @Getter
    @Setter
    @NotNull
    @Size(max = 50)
    private String nombre;

    @Column(name="pais", length = 100)
    @Getter
    @Setter
    @NotNull
    @Size(max = 100)
    private String pais;



}
