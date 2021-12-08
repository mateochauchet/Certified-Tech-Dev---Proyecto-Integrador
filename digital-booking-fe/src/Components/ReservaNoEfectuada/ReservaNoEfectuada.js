import React from "react";
import "./ReservaNoEfectuada.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarTimes } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";


export default function ReservaNoEfectuada(){
    return(
        <div className="container-mensaje">
             <FontAwesomeIcon className="icon-calendar" icon={faCalendarTimes} />
            <h2 className="mensajeSinReserva">Aún no has efectuado ninguna reserva!</h2>
           <Link to="/home"><button className="button-ok">OK</button></Link>
        </div>
    )
}