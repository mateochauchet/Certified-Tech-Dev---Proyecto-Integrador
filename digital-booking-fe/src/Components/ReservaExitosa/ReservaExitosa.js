import React from "react";
import "./ReservaExitosa.css";
import AtomoCheck from "./AtomoCheck.png";
// import { Link} from "react-router-dom";

export default function ReservaExitosa(){
    return(
     
        <div className="container-reservaexitosa">   
            <img className="atomoCheck" src={AtomoCheck} alt="AtomoCheck" />
            <h1 className="mensajeAgradecimineto">¡Muchas gracias!</h1>
            <h2 className="mensajeExito">Su reserva se ha realizado con éxito</h2>
           {/* <Link to="/home"> */}<button className="button-ok">ok</button>{/* </Link> */}
         </div>
         
    )
}