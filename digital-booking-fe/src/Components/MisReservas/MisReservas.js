import React from "react";
import "./MisReservas.css";
import Heading from "../Detalle/Heading.js";
import CardsContainer from "../Cards_list/CardsContainer";


export default function MisReservas(props){

    {/* Tengo que llamar a la api para que me renderice las tarjetas de los productos que tengo reservados */}
    {/* y si no que me rederice el mensaje de aun no hay reservas */}


    
    return(
     
        <div>
           <Heading titulo="Mis Reservas"/>
           <CardsContainer
                      list={props.list}
                      filtro={props.filtro}
                      filtro2={props.filtro2}
                    />
        </div>
      
    )
}
