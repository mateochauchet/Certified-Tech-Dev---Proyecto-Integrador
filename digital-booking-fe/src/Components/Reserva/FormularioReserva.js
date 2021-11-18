import React, {useState, useEffect} from "react";
import "./formularioReserva.scoped.css"

function FormularioReserva(){
    return(
        <>
        <h2 className="h2Reserva">Completa tus datos</h2>
        <div className="divFormulario">
            <form className="formularioReserva">
                <div className="contenedorLabelInput">
                <label className="labelReserva">Nombre</label>
                <input className="inputReserva" type="text" disabled></input>
                </div>

                <div className="contenedorLabelInput">
                <label className="labelReserva">Apellido</label>
                <input className="inputReserva" type="text" disabled></input>
                </div>

                <div className="contenedorLabelInput">
                <label className="labelReserva">Correo electronico</label>
                <input className="inputReserva" type="email" disabled></input>
                </div>

                <div className="contenedorLabelInput">
                <label className="labelReserva">Ciudad</label>
                <input className="inputReserva inputCiudadReserva" placeholder="ciudad" type="text"></input>
                </div>
            </form>
        </div>
        </>
    )
}

export default FormularioReserva;