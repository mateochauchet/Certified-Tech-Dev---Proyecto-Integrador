import FechaReserva from "./FechaReserva";
import './ContainerCalendario.css'
import React, { useState, useEffect } from "react";


function ContainerCalendarioDetalle(props) {

    
      
    return (
        <>
            <div className="container-calendario">
                <div className="calendario">
                    <FechaReserva />
    
                </div>
                
            </div>
        </>
    );
}

export default ContainerCalendarioDetalle;