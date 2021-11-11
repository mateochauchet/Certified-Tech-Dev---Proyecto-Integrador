package com.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="imagen")
@NoArgsConstructor
public class Imagen {

    public Imagen(String titulo, String imagen, Producto producto) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.producto = producto;
    }

    @Id
    @Column(name="id_imagen")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;


    @Column(name="titulo", length = 50)
    @Getter
    @Setter
    @NotNull
    @Size(max = 50)
    private String titulo;

    @Column(name="url_imagen", length = 200)
    @Getter
    @Setter
    @Size(max = 200)
    private String imagen;

    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto")
    @JsonIgnoreProperties({"imagenes"})
    private Producto producto;

}
