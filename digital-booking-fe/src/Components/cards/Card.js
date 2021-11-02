

function Card({tituloCategoria, cantidad, img}) {
    return ( 
        <div class="card1">
          <div class="card-header">
            <img src={img} alt={tituloCategoria} />
          </div>
          <div class="card-text">
            <h3>{tituloCategoria}</h3>
            <p>{cantidad} {tituloCategoria}</p>
          </div>
        </div>
     );
}

export default Card;