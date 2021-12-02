import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import { useContext } from "react";
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro";
import ContextUser from "../Contexts/ContextUser";
import Avatar from "../Avatar/Avatar.js";
import Botones from "../Botones/Botones.js";
import { v4 as uuidv4 } from "uuid";


export default function TemplateGeneral(props) {
  const { contextLoginRegistro } = useContext(ContextLoginRegistro);
  const { contextUser } = useContext(ContextUser);
  let componente = () => {
    if (contextLoginRegistro === "" && props.home) {
      return ( 
<div className="container-butons">
        <Botones
          key={uuidv4()}
          direccion={props.direccion}
          nombreBoton={props.nombreBoton}
        />
        <Botones
          key={uuidv4()}
          direccion={props.direccion2}
          nombreBoton={props.nombreBoton2}
        />
      </div>);
     
    } else if (contextLoginRegistro==="" && !props.home) {
     return (
     <div className="container-butons">
     <Botones direccion={props.direccion} nombreBoton={props.nombreBoton} />
     </div>)
    
    } else if(contextLoginRegistro!=="" && props.home){
     return(  
     <div className="container-avatar2">
     <Avatar payload={contextLoginRegistro} />
      </div>)
   
     
    }
  };

  return (
    <>
      <Header
        home={props.home}
        direccion={props.direccion}
        nombreBoton={props.nombreBoton}
        direccion2={props.direccion2}
        nombreBoton2={props.nombreBoton2}
        categoriaAll={props.categoriaAll}
     >
    {componente()}
       </Header>
      {props.children}
      <Footer></Footer>
    </>
  );
}
