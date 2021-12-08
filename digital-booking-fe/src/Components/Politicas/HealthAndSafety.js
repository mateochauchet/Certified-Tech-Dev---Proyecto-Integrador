import React from 'react';

function HealthAndSafety({saludSeguridad}){
    return(
        
            <div>
                <p>{saludSeguridad.dato1}</p>
                <p>{saludSeguridad.dato2}</p>
                <p>{saludSeguridad.dato3}</p>
            </div>
        )
    
}

export default HealthAndSafety;