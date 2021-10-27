

function Card({titulo, cantidad, img}) {
    return ( 
        <div class="card1">
          <div class="card-header">
            <img src={img} alt={titulo} />
          </div>
          <div class="card-text">
            <h3>{titulo}</h3>
            <p>{cantidad} {titulo}</p>
          </div>
        </div>
     );
}

export default Card;