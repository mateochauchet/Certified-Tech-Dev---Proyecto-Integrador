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
@Table(name= "imagen")
@NoArgsConstructor
public class Ciudad {

    @Id
    @Column(name="id_ciudad")
    @Getter
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
