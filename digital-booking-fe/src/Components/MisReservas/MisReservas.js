import React from "react";
import "./MisReservas.css";
import Heading from "../Detalle/Heading.js"

export default function MisReservas(){

    


    return(
     
        <div>
           <Heading titulo="Mis Reservas"/>
            {/* Tengo que llamar a la api para que me renderice las tarjetas de los productos que tengo reservados */}
            {/* y si no que me rederice el mensaje de aun no hay reservas */}
        </div>
      
    )
}
