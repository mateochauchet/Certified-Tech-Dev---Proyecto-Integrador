import { Link} from "react-router-dom";
import React, { useState} from "react";


let endpointReserva = "http://localhost:8080/api/reserva/";

export async function PostReserva (payload, Contexto) {
    const  response = await fetch(`${endpointReserva}`, {
        method: 'POST',
        body: JSON.stringify({payload}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': JSON.stringify(Contexto)
        }
    })
    if(response.status === 201){
        <Link to="/ReservaExitosa"></Link>
    }else{
      console.log("Lamentablemente la reserva no ha podido realizarse”. Por favor, intente más tarde");
    }
} 

export default PostReserva;
