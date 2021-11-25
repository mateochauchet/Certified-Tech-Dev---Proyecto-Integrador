import data from '../Cards_list/data.json'
import React, { useState, useEffect, useContext} from "react";
import { useParams } from 'react-router-dom';
import "./templateReserva.scoped.css"
import { Link } from "react-router-dom";
import Heading from "../Detalle/Heading";
import PoliticsContainer from "../Politicas/PoliticsContainer";
import FormularioReserva from "./FormularioReserva";
import HorarioReserva from "./HorarioReserva";
import DetalleReserva from "./DetalleReserva";
import { getProductosById } from '../../service/cardsListService';
import FechaReserva from '../ReservaCalendario/FechaReserva';
import { PostReserva } from '../../service/reserva';
import ContextLoginRegistro from "./Components/Contexts/ContextLoginRegistro.js";
import ContextUser from "./Components/Contexts/ContextUser.js";
import Error from "../hooks/Error";

function TemplateReserva(props) {

    const [productIdList, setProductIdList] = useState(null);
    const [dateIn, setDateIn] = useState(null);
    const [dateOut, setDateOut] = useState(null);
    const [hora, setHora] = useState(null);
    const [ContextLoginRegistro] = useContext(ContextLoginRegistro);
    const [ContextUser] = useContext(ContextUser);
    const [error, guardarError ] = useState(false);
   
    
    const { id } = useParams()
    console.log(id)

    const payload = {
        fechaInicio: dateIn,
        fechaFin: dateOut, 
        horaDeReserva: hora, 
        producto: {
            id: productIdList.id
            },
        usuario: ContextUser
        }

    const handleChange = ( startDate, endDate) => {
        setDateIn( startDate ) 
        setDateOut( endDate ) 
    } 

    const horarioReserva = (event) =>{
       const dataHora = event.target.value;
       console.log(dataHora);
       setHora(dataHora);
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        if(props.dataIn === "" && props.dataOut === "" && props.hora === "" ){
          guardarError(true);
        }else{
           await PostReserva(payload, ContextLoginRegistro);
           guardarError(false);
        }
    }

    //cargar un componente condicionalmente 
  let componente;
  if(error){
        componente = <Error mensaje= "Lamentablemente la reserva no ha podido realizarse”. Por favor, intente más tarde"/>
  }else{
        handleSubmit()
  }

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
                                <FechaReserva handleChange={handleChange} /></div>
                            <div className="horarioReserva">
                                <HorarioReserva onChange={horarioReserva}/></div>
                        </div>
                        <div className="divDerecha">
                            <div className="cardDetalleReserva">
                                <DetalleReserva 
                                    dataIn={dateIn} 
                                    dataOut={dateOut}
                                    list={productIdList} 
                                    onSubmit={handleSubmit}
                                    /></div>
                        </div>
                    </div>

                </>

            ) : <h1>Loading...</h1>
                
            }
            
        </div>
    );   
}

export default TemplateReserva;