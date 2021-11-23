package com.booking.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Time;
import java.time.LocalDate;

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
    private LocalDate fechaInicio;

    @Column(name = "fecha_fin")
    @NotNull
    @Getter @Setter
    private LocalDate fechaFinal;

    @ManyToOne
    @Getter @Setter
    @JoinColumn(name = "id_producto",referencedColumnName = "id_producto", nullable = false)
    private Producto producto;

    @ManyToOne
    @Getter @Setter
    @JoinColumn(name = "id_usuario",referencedColumnName = "id_usuario",nullable = false)
    private Usuario usuario;

    public Reserva(Time horaDeReserva, LocalDate fechaInicio, LocalDate fechaFinal, Producto producto, Usuario usuario) {
        this.horaDeReserva = horaDeReserva;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.producto = producto;
        this.usuario = usuario;
    }
}
