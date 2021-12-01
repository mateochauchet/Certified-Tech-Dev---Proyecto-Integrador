import data from '../Cards_list/data.json'
import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import "./templateReserva.scoped.css"
import Heading from "../Detalle/Heading";
import PoliticsContainer from "../Politicas/PoliticsContainer";
import FormularioReserva from "./FormularioReserva";
import HorarioReserva from "./HorarioReserva";
import DetalleReserva from "./DetalleReserva";
import { getProductosById } from '../../service/cardsListService';
import FechaReserva from '../ReservaCalendario/FechaReserva';
import { PostReserva } from '../../service/reserva';
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro";
import ContextUser from '../Contexts/ContextUser';
import { useHistory } from 'react-router-dom';


function TemplateReserva(props) {

    const [productIdList, setProductIdList] = useState(null);
    const [dateIn, setDateIn] = useState(null);
    const [dateOut, setDateOut] = useState(null);
    const [hora, setHora] = useState(null);
    const { contextLoginRegistro } = useContext(ContextLoginRegistro);
    const { contextUser } = useContext(ContextUser);
    const history = useHistory();
    const [avisoFalloReserva, setAvisoFalloReserva] = useState("avisoNoVisible")
    const [errorForm, setErrorForm] = useState("avisoFormNoVisible")
    const { id } = useParams()
    console.log(id)
    let match = data.filter(producto => producto.id === id)
    let product = match[0]


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

    const handleChange = (startDate, endDate) => {
        setDateIn(startDate)
        setDateOut(endDate)
    }

    const horarioReserva = (event) => {
        const dataHora = event.target.value;
        console.log(dataHora);
        setHora(dataHora);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(props.dataIn != null && props.dateOut != null && props.hora != null){
            let payload = {
                horaDeReserva: `${hora}:00:00`,
                fechaInicio: dateIn.format('YYYY-MM-DD'),
                fechaFinal: dateOut.format('YYYY-MM-DD'),
                producto: {
                    id: productIdList.id
                },
                usuario: {
                    id: contextLoginRegistro.id
                }
            }
            const res = await PostReserva(payload, contextUser);
            if (res === 201) {
                console.log('Reserva Creada')
                history.push('/reservaExitosa')
            
            } else {
                setAvisoFalloReserva("avisoVisible")
                console.log("Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde");
            }
        }else{
            setErrorForm("avisoFormVisible")
            console.log("Necesitas llenar todos los campos");
        }
    }

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
                                <HorarioReserva onChange={horarioReserva} /></div>
                        </div>
                        <div className="divDerecha">
                            <div className="cardDetalleReserva">
                                <DetalleReserva
                                    dataIn={dateIn}
                                    dataOut={dateOut}
                                    list={productIdList}
                                    hora={hora}
                                    onClick={handleSubmit}
                                    avisoFalloReserva={avisoFalloReserva}
                                    errorForm={errorForm}
                                /></div>

                        </div>
                    </div>
                    
                    <PoliticsContainer
                        normas={product.politicas.normas}
                        saludSeguridad={product.politicas.saludSeguridad}
                        cancelacion={product.politicas.cancelacion} />
                </>

            ) : <h1>Loading...</h1>

            }

        </div>
    );
        }

export default TemplateReserva;