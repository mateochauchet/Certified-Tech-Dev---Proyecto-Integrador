import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function CardsImg (props) {
    return(
        <div className="cardsImgContainer">
            <img className="cardsImg"  src={props.house.imagenes[0].imagen} />
            <div className="corazon">
                <FontAwesomeIcon icon={faHeart}/>
            </div>
        </div>
        
    );
}

export default CardsImg;