import React ,{useContext} from "react";
import { Link} from "react-router-dom";
import "./MenuDrawer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ContextoLoginRegistro from "../Contexts/ContextLoginRegistro";
import Avatar from "../Avatar/Avatar.js"
import ContextUser from "../Contexts/ContextUser";



export default function MenuDrawer(props) {
  const {contextLoginRegistro, setContextLoginRegistro} = useContext(ContextoLoginRegistro);
  const {setContextUser} = useContext(ContextUser);

  function handleClick(){
    setContextLoginRegistro("");
    setContextUser("");
  }

  const redirectAnfOrClient = ()=>{
    if(contextLoginRegistro.rol.id === 1){
      return <p><Link className="link-parrafos" to="/misReservas">Mis Reservas</Link></p>
     }else if(contextLoginRegistro.rol.id === 2){
      return <p><Link className="link-parrafos" to="/administracion/creaproductos">Agrega una propiedad</Link></p>
     }
  }
  
  let componente =
  ()=>{
    if(contextLoginRegistro === "" && (props.home)){
      return(
      
        <div className="container-Drawer">
        <div className="header-drawer">
          <FontAwesomeIcon
            onClick={props.e}
            className="icon-drawer"
            icon={faTimes}
          />
         <h1 className="text-menu">MENÚ</h1>
        </div>
        <div className="container-body-drawer">
        <div className="container-parrafos">
           <p> <Link className="link-parrafos" to={props.direccion2}>{props.nombreBoton2}</Link></p>
         <br /> <hr /> <br />
         <p> <Link className="link-parrafos" to={props.direccion}>{props.nombreBoton}</Link></p>
          </div>
          <div className="icons-drawer">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>

       )
    }else if(contextLoginRegistro === "" && !props.home){
      return(
        <div className="container-Drawer">
        <div className="header-drawer">
          <FontAwesomeIcon
            onClick={props.e}
            className="icon-drawer"
            icon={faTimes}
          />
         <h1 className="text-menu">MENÚ</h1>
      
        </div>
        <div className="container-body-drawer">
        <div className="container-parrafos">
          <p> <Link className="link-parrafos" to={props.direccion}>{props.nombreBoton}</Link></p>
          </div>
          <div className="icons-drawer">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
      )
}

else if (contextLoginRegistro !== ""){
  return(
    <div className="container-Drawer">
        <div className="header-drawer">
          <FontAwesomeIcon
            onClick={props.e}
            className="icon-drawer"
            icon={faTimes}
          />
         <Avatar />
      
        </div>
        <div className="container-body-drawer">
        <div className="container-parrafos">
            {redirectAnfOrClient()}
            <br /> <hr /> <br />
          </div>
          <div className="container-cerrarSesion">
            <p className="parrafo-cerrarSesion">¿Desea <span className="cerrarSesion" onClick={handleClick} >cerrar sesión</span>?</p>
        <hr/>
          </div>
          <div className="icons-drawer">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
  )
  }
};
  return (
    <>
{componente()}
    </>
  );
};