import './Politicas.css'
import React from 'react';
import Rules from "./Rules"
import HealthAndSafety from "./HealthAndSafety"
import Cancellation from "./Cancellation"


function PoliticsContainer({normas, saludSeguridad, cancelacion }){
    return(
        <div className="impInfoContainer">
            <div>
                <h1>Qué tenés que saber</h1>
                <hr/>
            </div>
            <div className="componentContainer">
                <div className="section1">
                    <h3>Normas de la casa</h3>
                    <Rules normas={normas}/>
                </div>
                <div className="section2">
                    <h3>Salud y seguridad</h3>
                    <HealthAndSafety saludSeguridad={saludSeguridad}/>
                </div>
                <div className="section3">
                    <h3>Políticas de cancelación</h3>
                    <Cancellation cancelacion={cancelacion}/>
                </div>
            </div>
        </div>
    )
}

export default PoliticsContainer;