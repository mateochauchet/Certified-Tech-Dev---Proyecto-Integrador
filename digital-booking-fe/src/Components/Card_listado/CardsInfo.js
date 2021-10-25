function CardsInfo(props) {
    return (
      <div className="cardsRight">
        <div className="cardsInfo" >
            
            <p className="categoria" >{props.house.categoria}</p>
            <h2>{props.house.title}</h2>
            <p>{props.house.location}</p>
            <p className="cardsDescription" >{props.house.description}</p> 

        </div>
          
        
        <div className="btnContainer">
          <button className="cardBtn">Ver detalle</button>
        </div>
        
      </div>
    );
  }

  export default CardsInfo;