import React from "react"

function Card({tituloCategoria, cantidad, img, cambiarCategoria}) {
    return ( 
        <div className="card1" onClick={() => cambiarCategoria(tituloCategoria)} >
          <div className="card-header">
            <img src={img} alt={tituloCategoria} />
          </div>
          <div className ="card-text">
            <h3>{tituloCategoria}</h3>
            <p>{cantidad} {tituloCategoria}</p>
          </div>
        </div>
     );
}

export default Card;