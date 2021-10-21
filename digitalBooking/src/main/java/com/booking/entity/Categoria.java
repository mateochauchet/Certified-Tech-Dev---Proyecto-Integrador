package com.booking.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="categoria")
@NoArgsConstructor
public class Categoria {

    @Id
    @Column(name="id_categoria")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Getter
    @Setter
    @Column(name="titulo", length = 50)
    private String titulo;

    @Getter
    @Setter
    @Column(name="descripcion",length = 100)
    private String descripcion;

    @Getter
    @Setter
    @Column(name="url_imagen", length = 100)
    private String imagen;
}
