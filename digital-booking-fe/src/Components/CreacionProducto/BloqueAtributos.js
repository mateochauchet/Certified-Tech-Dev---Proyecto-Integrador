import React, { useState, useEffect, useContext } from "react";
import { BsPlusSquareFill } from 'react-icons/bs';
import "./creacionProducto.scoped.css";

function BloqueAtributos(props){

    const [icono, setIcono] = useState(<BsPlusSquareFill fill="#1DBEB4" size="27pt" onClick={props.handleclick}/>)

    return(
        <div className="contenedorSeccionAtributos">
            <div className="contenedorInputsAtributos">
                <div className="duplaLabelInput">
                    <label className="labelCreacionProducto">Nombre</label>
                    <input className="inputCreacionProducto" type="text" required></input>
                </div>
                <div className="duplaLabelInput">
                    <label className="labelCreacionProducto">Icono</label>
                    <input className="inputCreacionProducto" type="text" required></input>
                </div>
            </div>
            <div>
                {icono}
            </div>
        </div>
    )
}

export default BloqueAtributos;