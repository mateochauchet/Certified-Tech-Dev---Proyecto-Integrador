package com.booking.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "reserva")

@NoArgsConstructor
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reserva")
    @Getter
    private Long id;

    @Column(name = "hora_inicio")
    @NotNull
    @Getter @Setter
    private Time horaDeReserva;

    @Column(name = "fecha_inicio")
    @NotNull
    @Getter @Setter
    private Date fechaInicio;

    @Column(name = "fecha_fin")
    @NotNull
    @Getter @Setter
    private Date fechaFinal;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "id_usuario",nullable = false)
    private Usuario usuario;

    public Reserva(Time horaDeReserva, Date fechaInicio, Date fechaFinal, Producto producto, Usuario usuario) {
        this.horaDeReserva = horaDeReserva;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.producto = producto;
        this.usuario = usuario;
    }
}
