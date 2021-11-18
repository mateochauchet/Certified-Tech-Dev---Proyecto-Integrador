import data from '../Cards_list/data.json'
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import "./templateReserva.scoped.css"
import { Link } from "react-router-dom";
import Heading from "../Detalle/Heading";
import PoliticsContainer from "../Politicas/PoliticsContainer";
import FormularioReserva from "./FormularioReserva";
import HorarioReserva from "./HorarioReserva";
import DetalleReserva from "./DetalleReserva";
import { getProductosById } from '../../service/cardsListService';

import ContainerCalendario from '../ReservaCalendario/ContainerCalendario';


function TemplateReserva(props) {

    const [productIdList, setProductIdList] = useState(null);

    const { id } = useParams()
    console.log(id)


    useEffect(() => {
        let ismounted = true;
        getProductosById(id)
            .then((resJson) => {
                if (ismounted) {
                    console.log(resJson)
                    const houseData = {
                        id: resJson[0].id,
                        titulo: resJson[0].nombre,
                        categoria: resJson[0].categoria.titulo,
                        puntaje: resJson[0].puntaje,
                        ubicacion: resJson[0].ciudad.nombre + (' ') + resJson[0].ciudad.pais,
                        imagenes: resJson[0].imagenes[0].imagen,
                        descripcion: resJson[0].descripcion,

                    }
                    setProductIdList(houseData);
                }
            })
        return () => ismounted = false;
    }, []);

    return (
        <div>
            {productIdList ? (
                <>
                    <Heading titulo={productIdList.titulo}
                        categoria={productIdList.categoria} />
                    <div className="containerReserva">
                        <div className="divIzquierda">
                            <div className="formularioReserva">
                                <FormularioReserva /></div>
                            <div className="calendarioReserva">
                                <ContainerCalendario /></div>
                            <div className="horarioReserva">
                                <HorarioReserva /></div>
                        </div>
                        <div className="divDerecha">
                            <div className="cardDetalleReserva">
                                <DetalleReserva list={productIdList} /></div>
                        </div>
                    </div>
                </>

            ) : <h1>Loading...</h1>
                
            }
        </div>
    );   
}

export default TemplateReserva;