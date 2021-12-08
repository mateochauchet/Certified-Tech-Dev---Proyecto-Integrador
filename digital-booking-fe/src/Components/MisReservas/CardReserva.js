import React from "react";
import "./CardReserva.scoped.css"


export default function CardReserva(props){


    return(
        
        <div className= "containerReserva">
             <h2>Reserva</h2>
           <div className="containerInfo">
            <div className= "infoFechas">
            <h4>Check-In: <span>{props.checkIn}</span></h4>
            <h4>Check-Out: <span>{props.checkOut}</span></h4>
            </div>
            <h4 className="horario">Horario de llegada: <span>{props.hora}</span></h4>
            </div>
        </div>
    )
}