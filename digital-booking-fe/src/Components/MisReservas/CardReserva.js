import React from "react";
import "./CardReserva.scoped.css"


export default function CardReserva(){


    return(
        
        <div className= "containerReserva">
             <h2>Reserva</h2>
           <div className="containerInfo">
            <div className= "infoFechas">
            <h4>Check-In: <span>02/12/2022</span></h4>
            <h4>Check-Out: <span>10/12/2022</span></h4>
            </div>
            <h4 className="horario">Horario de llegada: <span>10PM</span></h4>
            </div>
        </div>
    )
}