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
@Table(name="categoria")
@NoArgsConstructor
public class Categoria {

    public Categoria(String titulo, String descripcion, String imagen) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    @Id
    @NotNull
    @Column(name="id_categoria")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Getter
    @Setter
    @NotNull
    @Size(max = 50)
    @Column(name="titulo", length = 50)
    private String titulo;

    @Getter
    @Setter
    @Size(max = 100)
    @NotNull
    @Column(name="descripcion",length = 100)
    private String descripcion;

    @Getter
    @Setter
    @Column(name="url_imagen", length = 100)
    private String imagen;






}
