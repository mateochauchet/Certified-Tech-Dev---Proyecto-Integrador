package com.booking.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="imagen")
@NoArgsConstructor
public class Imagen {

    @Id
    @Column(name="id_imagen")
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
}
