import React, {useState, useEffect, useContext} from "react";
import "./formularioReserva.scoped.css"
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro";
import ContextUser from '../Contexts/ContextUser';


function FormularioReserva(){
    const { contextLoginRegistro } = useContext(ContextLoginRegistro);
    const { contextUser } = useContext(ContextUser);

    return(
        <>
        <h2 className="h2Reserva">Completa tus datos</h2>
        <div className="divFormulario">
            <form className="formularioReserva">
                <div className="contenedorLabelInput">
                <label className="labelReserva">Nombre</label>
                <input className="inputReserva" type="text" disabled value={contextLoginRegistro.nombre}></input>
                </div>

                <div className="contenedorLabelInput">
                <label className="labelReserva">Apellido</label>
                <input className="inputReserva" type="text" disabled value={contextLoginRegistro.apellido}></input>
                </div>

                <div className="contenedorLabelInput">
                <label className="labelReserva">Correo electronico</label>
                <input className="inputReserva" type="email" disabled value={contextLoginRegistro.email} ></input>
                </div>

                <div className="contenedorLabelInput">
                <label className="labelReserva">Ciudad</label>
                <input className="inputReserva inputCiudadReserva" placeholder="ciudad" type="text" required></input>
                </div>
            </form>
        </div>
        </>
    )
}

export default FormularioReserva;