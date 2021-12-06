import React, { useContext, useEffect, useState } from "react";
import "./MisReservas.scoped.css";
import Heading from "../Detalle/Heading.js";
import { getReservationsByIdUsuario } from "../../service/misReservasService.js";
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro.js";
import ContextUser from "../Contexts/ContextUser.js";
import CardReserva from "./CardReserva";
import Card from "../Cards_list/Card";


export default function MisReservas() {
  const { contextLoginRegistro } = useContext(ContextLoginRegistro);
  const { contextUser } = useContext(ContextUser);
  const [dataReserva, setDataReserva] = useState(null);
  // const history = useHistory();
  // const [status, setStatus] = useState();

  useEffect(() => {
    let ismounted = true;
    getReservationsByIdUsuario(contextLoginRegistro, contextUser).then(
      (resJson) => {
        if (ismounted) {
          setDataReserva(resJson);
        }
      }
    ).catch(()=>{
      setDataReserva([])
    })
    return () => (ismounted = false);
  }, []);


  return (
    <>
      {dataReserva ? (
        <div>
          <Heading titulo="Mis Reservas" />
          {dataReserva.map((reserva, index) => (
            <>
              <CardReserva
                key={index}
                checkIn={reserva.fechaInicio}
                checkOut={reserva.fechaFinal}
                hora={reserva.horaDeReserva}
              />
              <Card key={reserva.producto.id} house={reserva.producto} />
             
            </>
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
