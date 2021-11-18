import React, {useState, useEffect} from "react";
import "./detalleReserva.scoped.css";
import { RatingView } from 'react-simple-star-rating';
import { FaMapMarkerAlt } from "react-icons/fa";

function DetalleReserva(){
    return(
        <div className="divDetalleReserva">
            <div className="divIzquierdaDetalleReserva">
                <h3 className="h3DetalleReserva">Detalle de la reserva</h3>
                <div className="divImagenReserva">
                    <img className="imgDetalleReserva" src={"https://homeworlddesign.com/wp-content/uploads/2013/12/Hoke-residence-house-in-the-forest-10-Medium.jpg"}/>
                </div>
            </div>
            <div className="divDerechaDetalleReserva">
                <p className="categoriaDetalleReserva">LOFT</p>
                <h3 className="h3DetalleReserva tituloDetalle">Hermitage Loft</h3>
                <div className="divStarsDetalle">
                    <RatingView size="16" ratingValue= "5" fillColor="#1DBEB4"/>
                </div>
                <div className="divIconAdressReserva">
                    <FaMapMarkerAlt className="mapIcon" fill="#383B58"/>
                    <p className="direccionDetalleReserva">Ayacucho y Avenida Presidente Quintana, Ciudad Autonoma de Buenos Aires, Argentina</p>  
                </div>
                <div className="divHr"><hr className="primerHrReserva"/></div>
                <div className="divCheckInOut">
                    <h4 className="h4DetalleReserva">Check-in</h4>
                    <h4>__/__/__</h4>
                </div>
                <div className="divHr"><hr/></div>
                <div className="divCheckInOut">
                    <h4 className="h4DetalleReserva">Check-out</h4>
                    <h4>__/__/__</h4>
                </div>
                <div className="divHr"><hr/></div>
                <button className="cardBtn botonReserva ">Confirmar reserva</button>
            </div>
        </div>
    )
}

export default DetalleReserva;