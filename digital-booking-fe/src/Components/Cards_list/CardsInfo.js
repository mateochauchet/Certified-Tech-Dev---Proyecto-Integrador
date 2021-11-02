import CardsPuntaje from './CardsPuntaje'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faWifi } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

function CardsInfo(props) {

  let handleClick = () => {
    console.log(props.house.title)
    
  }
  

  return (
    <div className="cardsRight">

      <div className="cardsInfo" >

        <div className="cardsInfoParteDeArriba">
          <div className="cardsTitleCategoria">
            <p className="categoria" >{props.house.categoria}</p>
            <h2>{props.house.title}</h2>
          </div>
          <div >
            <CardsPuntaje stars="false" style="cardsPuntaje" puntaje={props.house.puntaje}
               />
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
        <button className="cardBtn" onClick={handleClick}>Ver detalle</button>
      </div>

    </div>
  );
}

export default CardsInfo;