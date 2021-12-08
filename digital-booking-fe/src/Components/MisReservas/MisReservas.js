import React, { useContext, useEffect, useState } from "react";
import "./MisReservas.css";
import Heading from "../Detalle/Heading.js";
import { getReservationsByIdUsuario } from "../../service/misReservasService.js";
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro.js";
import ContextUser from "../Contexts/ContextUser.js";
import CardReserva from "./CardReserva";
import Card from "../Cards_list/Card";
import ReservaNoEfectuada from "../ReservaNoEfectuada/ReservaNoEfectuada"
import { BsFillEmojiNeutralFill } from "react-icons/bs";

export default function MisReservas() {
  const { contextLoginRegistro } = useContext(ContextLoginRegistro);
  const { contextUser } = useContext(ContextUser);
  const [dataReserva, setDataReserva] = useState(null);


  useEffect(() => {
    let ismounted = true;
    getReservationsByIdUsuario(contextLoginRegistro, contextUser)
      .then(
        (resJson) => {
          if (ismounted) {
            setDataReserva(resJson);
          }
        }
      ).catch(() => {
        setDataReserva(null)
      })

    return () => (ismounted = false);
  }, []);

//   function mapeo(dataReserva) {
//     return (
//       dataReserva.map((reserva, index) => {
//       <>
//         <CardReserva
//           key={index}
//           checkIn={reserva.fechaInicio}
//           checkOut={reserva.fechaFinal}
//           hora={reserva.horaDeReserva}
//         />
//         <Card key={reserva.producto.id} house={reserva.producto} />
//       </>
//     })
//   )
// }

return (
  <>
    <div>
      <Heading titulo="Mis Reservas" />
    </div>
    {
        dataReserva ? (
          dataReserva !== [] ?  
          
          console.log(dataReserva)
          :<ReservaNoEfectuada />


        )
          

        :
        <ReservaNoEfectuada />
        //<h1>Loading...</h1>
    }
  </>
);

}
