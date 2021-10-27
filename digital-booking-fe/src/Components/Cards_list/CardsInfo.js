import CardsPuntaje from './CardsPuntaje'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faWifi } from "@fortawesome/free-solid-svg-icons";

function CardsInfo(props) {
  return (
    <div className="cardsRight">

      <div className="cardsInfo" >

        <div className="cardsInfoParteDeArriba">
          <div className="cardsTitleCategoria">
            <p className="categoria" >{props.house.categoria}</p>
            <h2>{props.house.title}</h2>
          </div>
          <div >
            <CardsPuntaje />
          </div>
        </div>

        <div className="cardsLocation">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>{props.house.location} <span>- VER EN MAPA </span> </p>
        </div>
        
        

        <div className="cardsIcons">
          <FontAwesomeIcon icon={faWifi} />
        </div>
        <div className="cardsDescription">
        <p>{props.house.description}<span>más... </span></p>
        </div>

      </div>


      <div className="btnContainer">
        <button className="cardBtn">Ver detalle</button>
      </div>

    </div>
  );
}

export default CardsInfo;