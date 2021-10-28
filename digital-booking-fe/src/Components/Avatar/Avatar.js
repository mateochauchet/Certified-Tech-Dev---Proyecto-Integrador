import React from "react";
import "./Avatar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro";

export default function Avatar(props) {

  const {contextLoginRegistro, setContextLoginRegistro} = useContext(ContextLoginRegistro)

   function handleClick(){

    setContextLoginRegistro("");

  }

  return (
      <>
    
    <div className="container-avatar">
    <Link  className="link-logout" to="/home" onClick={handleClick}>  <FontAwesomeIcon className="icon-x" icon={faTimes}/> </Link>
      <div className="container-avatar-text">
        <div className="avatar">
          <h4 className="text-avatar">{`${props.payload.nombre[0]}${props.payload.apellido[0]}`}</h4>
        </div>
        <div className="text-name">
          <h4 className="saludo">
            Hola,
            <span className="name">
              <br/>
              {`${props.payload.nombre} ${props.payload.apellido}`}
            </span>
          </h4>
        </div>
      </div>
    </div>
    </>
  );
}
