import { Link} from "react-router-dom";
import React, { useState} from "react";



let endpointReserva = "https://digitalbooking.ga/api/reserva/";


export async function PostReserva (payload, contextUser) {
  
    const response = await fetch(endpointReserva, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${contextUser}`
          
          
        }
    })
    return response.status
    
} 


export default PostReserva;
