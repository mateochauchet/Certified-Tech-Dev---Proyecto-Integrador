import React, { useState, useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ContextHeart from "../Contexts/ContextHeart";

function CardsImg (props) {
    const [heartId, setHeartId] = useState(
    //    console.log( window.localStorage.getItem("heartValue"))
    );
    //const {contextHeart, setContextHeart} = useContext(ContextHeart);
    const clickHeart = () => {
        setHeartId(!heartId)
        //setContextHeart("h")
    }

    const setLocalStorage = () =>{
        try{
            setHeartId(!heartId)
            window.localStorage.setItem("heartValue", heartId)
            console.log(localStorage.getItem("heartValue"))
        } catch(error){
            console.log(error)
        }
    }
    return(
        <div className="cardsImgContainer">
            <img className="cardsImg"  src={props.house.imagenes[0].imagen} />
            <div className= "corazon" /*id={heartId ? null : "changeColor"}  onClick={setLocalStorage}*/>
                <FontAwesomeIcon icon={faHeart}/>
            </div>
        </div>
        
    );
}

export default CardsImg;