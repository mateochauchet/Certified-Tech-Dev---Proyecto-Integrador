import React, { useState, useEffect, useContext } from "react";
import { BsPlusSquareFill } from 'react-icons/bs';
import BloqueAtributos from "./BloqueAtributos";
import "./creacionProducto.scoped.css";

function BloqueImagenes(props){

    const [icono, setIcono] = useState(<BsPlusSquareFill fill="#1DBEB4" size="25pt" onClick={props.handleclick}/>)

    return(
        <div className="contenedorSeccionAtributos contenedorSeccionImagenes">
            <div className="contenedorInputImagenes">
                <input className="inputCreacionProducto custom-file-input" type="file" required multiple></input>    
            </div>
        </div>
    )
}

export default BloqueImagenes;