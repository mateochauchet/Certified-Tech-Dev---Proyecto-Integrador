import CardsPuntaje from './CardsPuntaje'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faWifi } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

function CardsInfo(props) {

  //let verdetalle = (props.house.title).replace(/\s+/g, '')
  let id = (props.house.id)

  // let handleClick = () => {
  //   console.log((props.house.nombre).replace(/\s+/g, ''))
  // }
  

  return (
    <div className="cardsRight">

      <div className="cardsInfo" >

        <div className="cardsInfoParteDeArriba">
          <div className="cardsTitleCategoria">
            <p className="categoria" >{props.house.categoria.titulo}</p>
            <h2>{props.house.nombre}</h2>
          </div>
          <div >
            <CardsPuntaje stars="false" style="cardsPuntaje" puntaje={props.house.puntaje}
               />
          </div>
        </div>

        <div className="cardsLocation">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span><p>{props.house.ciudad.nombre} </p></span> 
        </div>

        <div className="cardsIcons">
          {(props.house.caracteristicas).map((item => <FontAwesomeIcon icon={item.icono} /> ))}
        </div>
        <div className="cardsDescription">
          <p>{props.house.descripcion}</p>
        </div>
      </div>


      <div className="btnContainer">
        <Link style={{ textDecoration: 'none' }} to={`/productos/${id}`}><button className="cardBtn" >Ver detalle</button></ Link>
      </div>

    </div>
  );
}

export default CardsInfo;