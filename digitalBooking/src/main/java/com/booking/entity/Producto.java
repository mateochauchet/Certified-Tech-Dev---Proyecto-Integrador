package com.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @Setter
    @NotNull
    @Size(max = 10)
    @Column(name="puntaje", length = 10)
    private Integer puntaje;



    @Column(name="norma", length = 1000)
    @Size(max = 1000)
    @Getter
    @Setter
    private String norma;

    @Column(name="salud_seguridad", length = 1000)
    @Size(max = 1000)
    @Getter
    @Setter
    private String saludSeguridad;

    @Column(name="cancelacion", length = 1000)
    @Size(max = 1000)
    @Getter
    @Setter
    private String cancelacion;

    @Column(name="latitud", length = 200)
    @Size(max = 200)
    @NotNull
    @Getter
    @Setter
    private String latitud;

    @Column(name="longitud", length = 200)
    @Size(max = 200)
    @NotNull
    @Getter
    @Setter
    private String longitud;

    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name="id_categoria",  nullable = false)
    private Categoria categoria;

    @Getter
    @Setter
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_ciudad", referencedColumnName = "id_ciudad", nullable = false)
    private Ciudad ciudad;

    @Getter
    @Setter
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "producto")
    @JsonIgnoreProperties({"producto"})
    private Set<Imagen> imagenes = new HashSet<>();

    @Getter
    @Setter
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "productos_caracteristica",
            joinColumns = @JoinColumn(name = "id_producto"),
            inverseJoinColumns = @JoinColumn(name = "id_caracteristica")
    )
    private Set<Caracteristica> caracteristicas;

    public Producto(String nombre, String descripcion, String norma, String saludSeguridad, String cancelacion, String latitud, String longitud, Integer puntaje,  Categoria categoria, Ciudad ciudad) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.norma = norma;
        this.saludSeguridad= saludSeguridad;
        this.cancelacion = cancelacion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.categoria = categoria;
        this.ciudad = ciudad;
       this.imagenes = null;
        this.caracteristicas = null;
        this.puntaje = puntaje;
    }



}
