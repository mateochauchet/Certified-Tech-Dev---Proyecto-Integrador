import React from 'react';


function Rules({normas}){
    return(
            <div className="text">
                <p>{normas.norma1}</p>
                <p>{normas.norma2}</p>
                <p>{normas.norma3}</p>
            </div>
    )
}

export default Rules;