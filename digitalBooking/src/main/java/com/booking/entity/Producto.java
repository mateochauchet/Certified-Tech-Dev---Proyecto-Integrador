package com.booking.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@Table(name="producto")
public class Producto {

    @Id
    @Column(name="id_producto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Getter
    @Setter
    @NotNull
    @Size(max = 50)
    @Column(name="nombre", length = 50)
    private String nombre;

    @Getter
    @Setter
    @Size(max = 250)
    @NotNull
    @Column(name="descripcion",length = 250)
    private String descripcion;

    @Getter
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="id_categoria",  nullable = false)
    private Categoria categoria;

    @Getter
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_ciudad", nullable = false)
    private Ciudad ciudad;

   @Getter
   @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private Set<Imagen> imagenes = new HashSet<>();

    @Getter
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "producto_caracteristica",
            joinColumns = @JoinColumn(name = "id_producto"),
            inverseJoinColumns = @JoinColumn(name = "id_caracteristica")
    )
    private Set<Caracteristica> caracteristicas;

    public Producto(String nombre, String descripcion, Categoria categoria, Ciudad ciudad, Set<Caracteristica> caracteristicas) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.ciudad = ciudad;
       this.imagenes = imagenes;
        this.caracteristicas = caracteristicas;
    }
}
