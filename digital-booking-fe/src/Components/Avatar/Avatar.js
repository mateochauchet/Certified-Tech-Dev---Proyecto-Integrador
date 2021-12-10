import React from "react";
import "./Avatar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro";
import ContextUser from "../Contexts/ContextUser";
import { useHistory } from 'react-router-dom';
import PerfilUsuario from "../InfoUsuario/PerfilUsuario"

export default function Avatar(props) {
  
  const {contextLoginRegistro, setContextLoginRegistro} = useContext(ContextLoginRegistro);
  const {setContextUser} = useContext(ContextUser);
  const [ isActive, setIsActive] = useState(false)

  function handleClick(){
    setContextLoginRegistro("");
    setContextUser("");
  }

  const showProfile = () =>{
    setIsActive(!isActive)
  }
  return (
    <>
      <div className="container-avatar" >
        <Link className="link-logout" to="/home" onClick={handleClick}>
          {" "}
          <FontAwesomeIcon className="icon-x" icon={faTimes} />{" "}
        </Link>
        <div className="container-avatar-text">
          <div className="avatar" onClick={showProfile}>
            <h4 className="text-avatar" >{`${contextLoginRegistro.nombre[0].toUpperCase()}${contextLoginRegistro.apellido[0].toUpperCase()}`}</h4>
          </div>
          <div className="text-name">
            <h4 className="saludo">
              Hola,
              <span className="name">
                <br />
                {`${contextLoginRegistro.nombre} ${
                  contextLoginRegistro.apellido
                }`}
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div className={isActive ? "contenedorPerfilUsuario" : "contenedorNoVisible"}>
        <PerfilUsuario/>
      </div>
   
    </>
  );
}
