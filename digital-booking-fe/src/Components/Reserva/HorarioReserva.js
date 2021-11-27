import React, {useState, useEffect} from "react";
import horaList from "./hora.json"
import "./horarioReserva.scoped.css";
import {BsCheckCircle} from "react-icons/bs";
import { symbolTypeAnnotation } from "@babel/types";

function HorarioReserva(props){
  
    return(
        <>
        <h2 className="h2HorarioReserva">Tu horario de llegada</h2>
        <div className="divHorario">
            <div className="divh5">
                <BsCheckCircle className="tick" fill="#383B58"/>
                <h5 className="h5HorarioReserva">Tu habitacion va a estar lista para el check-in entre las 10:00AM y las 11:00PM</h5>
            </div>
            <form className="divFormSelectHorario">
                <label className="labelSelectHorario">Indica tu hora estimada de llegada</label>
                <select className="selectHorario" onChange={props.onChange}>  
                    {horaList.map((h,i) =>
                    <option key={i} value={h.hora} className="optionsHorario">{h.hora}{i > 12 ? "PM" : (i === 0? "" : "AM")}</option>
                    )}
                   
                </select>
            </form>
        </div> 
        </>
    )
}

export default HorarioReserva;