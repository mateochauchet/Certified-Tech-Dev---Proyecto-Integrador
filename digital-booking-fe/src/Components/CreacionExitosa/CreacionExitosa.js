import React from "react";
import "./CreacionExitosa.css";
import AtomoCheck from "./AtomoCheck.png";
import { Link} from "react-router-dom";

export default function CreacionExitosa(props){
    return(
     
        <div className="container-creacionExitosa">   
            <img className="atomoCheck" src={AtomoCheck} alt="AtomoCheck" />
            <h2 className="mensajeExito">Tu propiedad se ha creado con éxito</h2>
           <Link to="/home"> <button className="button-volver" onClick={props.categoriaAll} >volver</button> </Link> 
         </div>
         
    )
}