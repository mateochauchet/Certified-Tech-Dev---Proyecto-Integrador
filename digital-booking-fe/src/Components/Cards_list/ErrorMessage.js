
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faSadCry, faSadTear } from "@fortawesome/free-solid-svg-icons";
import './cardsContainer.css';

function ErrorMessage(props) {

    return(
        <div className="error">
            <FontAwesomeIcon icon={faFrown} className="cryIcon" />
            <p className="errorMessage">no se encontraron productos disponibles con esas caracteristicas</p> 
        </div>
    )
  }
  
  export default ErrorMessage;