import React, { useState, useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ContextHeart from "../Contexts/ContextHeart";

function CardsImg (props) {
    const [heartId, setHeartId] = useState(false);
    //const {contextHeart, setContextHeart} = useContext(ContextHeart);
    const clickHeart = () => {
        setHeartId(!heartId)
        //setContextHeart("h")
    }

    return(
        <div className="cardsImgContainer">
            <img className="cardsImg"  src={props.house.imagenes[0].imagen} />
            <div className= "corazon" id={heartId ? "changeColor" : null}  onClick={clickHeart}>
                <FontAwesomeIcon icon={faHeart}/>
            </div>
        </div>
        
    );
}

export default CardsImg;