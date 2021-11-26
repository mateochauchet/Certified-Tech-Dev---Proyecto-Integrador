import { Link} from "react-router-dom";
import React, { useState} from "react";


let endpointReserva = "http://localhost:8080/api/reserva/";

export async function PostReserva (payload, contextUser) {
    const  response = await fetch(endpointReserva, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + JSON.stringify(contextUser)
          
        }
    })
    if(response.status === 201){
        <Link to="/ReservaExitosa"></Link>
    }else{
      console.log(JSON.stringify(contextUser));
      console.log("Lamentablemente la reserva no ha podido realizarse”. Por favor, intente más tarde");
    }
} 


export default PostReserva;
