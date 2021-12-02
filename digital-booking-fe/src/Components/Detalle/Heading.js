import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './Heading.css'

import {Link} from 'react-router-dom'


function Heading({titulo, categoria}) {
    
    return ( 
        <>
        <div className="heading">
            <div className="text-heading">
                <p>{categoria}</p>
                <h1>{titulo}</h1> 
            </div>
            <div className="arrow">
            <Link className="link-arrow" to="/home"><FontAwesomeIcon icon={faChevronLeft} /></Link>
            </div>
             
        </div>
        
        </>
     );
}

export default Heading;