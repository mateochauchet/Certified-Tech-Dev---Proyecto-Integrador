import data from '../Cards_list/data.json'
import React, {useState, useEffect} from "react";
import "./templateReserva.scoped.css"
import { Link} from "react-router-dom";
import Heading from "../Detalle/Heading";
import PoliticsContainer from "../Politicas/PoliticsContainer";
import FormularioReserva from "./FormularioReserva";
import HorarioReserva from "./HorarioReserva";
import DetalleReserva from "./DetalleReserva";
import Fecha from "../Detalle/Fechas/Fecha"
import { Grid } from "@material-ui/core";

function TemplateReserva (){

    let match = data.filter(producto => producto.id === "1")
    let product = match[0]

    return(
        <div>
            <Heading titulo={product.title} categoria={product.categoria}/>
                <div className="containerReserva">
                    <div className="divIzquierda">
                        <div className="formularioReserva"><FormularioReserva/></div>
                        <div className="calendarioReserva"><Fecha/></div>
                        <div className="horarioReserva"><HorarioReserva/></div>
                    </div>
                    <div className="divDerecha">
                        <div className="cardDetalleReserva"><DetalleReserva/></div>
                    </div>
                </div>
        </div>
    )
}

export default TemplateReserva;