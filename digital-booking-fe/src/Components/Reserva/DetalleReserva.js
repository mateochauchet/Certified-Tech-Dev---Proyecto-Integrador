import React, { useState, useEffect } from "react";
import "./detalleReserva.scoped.css";
import { RatingView } from 'react-simple-star-rating';
import { FaMapMarkerAlt } from "react-icons/fa";


function DetalleReserva(props) {
    let puntajeP = props.list.puntaje
    let number = 0;

    if (puntajeP >= 9) { number = 5 }
    else if (puntajeP >= 8) { number = 4 }
    else if (puntajeP >= 6) { number = 3 }
    else if (puntajeP >= 4) { number = 2 }
    else if (puntajeP >= 2) { number = 1 }
    else if (puntajeP >= 0) { number = 0 }

    return (
        <>

            <div className="divDetalleReserva">
                <div className="divIzquierdaDetalleReserva">
               
                    <h3 className="h3DetalleReserva">Detalle de la reserva</h3>
                    <div className="divImagenReserva">
                        <img className="imgDetalleReserva" src={props.list.imagenes} />
                    </div>
                </div>
                <div className="divDerechaDetalleReserva">
                    <p className="categoriaDetalleReserva">
                        {props.list.categoria}
                    </p>
                    <h3 className="h3DetalleReserva tituloDetalle">
                        {props.list.titulo}</h3>
                    <div className="divStarsDetalle">
                        {/* <RatingView size="16" ratingValue="5" fillColor="#1DBEB4" /> */}
                        <RatingView ratingValue={number} />
                    </div>
                    <div className="divIconAdressReserva">
                        <FaMapMarkerAlt className="mapIcon" fill="#383B58" />
                        <p className="direccionDetalleReserva"> {props.list.ubicacion}</p>
                    </div>
                    <div className="divHr"><hr className="primerHrReserva" /></div>
                    <div className="containerChecks">

                        <div className="divCheckInOut">
                            <h4 className="h4DetalleReserva">Check-in</h4>
                            {(props.dataIn != null) ?
                                <h4>{(props.dataIn).format('YYYY-MM-DD')}</h4>
                                : null}
                        </div>
                        <div className="divHr"><hr /></div>
                        <div className="divCheckInOut">
                            <h4 className="h4DetalleReserva">Check-out</h4>
                            {(props.dataOut != null) ?
                                <h4>{(props.dataOut).format('YYYY-MM-DD')}</h4>
                                : null}
                        </div>
                    </div>
                    <div className="divHr"><hr /></div>
                    <button className="cardBtn botonReserva" onClick={props.onClick}>Confirmar reserva</button>
                    <div className={props.avisoFalloReserva}>Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde</div>
                </div>
               
            </div>
        </>
    )
}

export default DetalleReserva;