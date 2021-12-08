import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './Heading.css'
import CardsPuntaje from "../Cards_list/CardsPuntaje";
import {Link} from 'react-router-dom'


function Heading2 ({location, puntaje}) {
    
    return ( 
        <>
          
        <div className="heading2">
            <div className="text-heading2">
                <FontAwesomeIcon  icon={faMapMarkerAlt} />
                <p>{location}</p> 
            </div>
            <CardsPuntaje style="cardsPuntajeRow" puntaje={puntaje} />
        </div>
        </>
     );
}

export default Heading2;