import './ContainerFechas.css'
import {useHistory} from 'react-router-dom';
import ContextUser from "../../Contexts/ContextUser"
import ContextLoginRegistro from "../../Contexts/ContextLoginRegistro"


import Fecha from './Fecha';
import { useContext } from 'react';

function ContainerFechas(props) {

    let history = useHistory();
    const {contextLoginRegistro} = useContext(ContextLoginRegistro)
    const {contextUser} = useContext(ContextUser)

    let id = (props.id)
    function handlerReserva() {
        if(contextUser === "" && contextLoginRegistro === "")
            history.replace(`/login/${"El login es obligatorio, si no se encuentra registrado debe registrarse"}`);
        else
            history.replace(`/productos/${id}/reserva`);   
    }


    return (

        <>
            <div className="cont-fechas">
                <h1 className="fechas">Fechas disponibles</h1>
                <div className="cont-calendar">
                    <div className="calendar">
                        <Fecha />
                    </div>
                    <div className="fechas-text">
                        <p>Agregá tus fechas de viaje para obtener precios exactos</p>   
                        <button className="principal" onClick={()=>{handlerReserva()}} >Inicia Reserva </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContainerFechas;