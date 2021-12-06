import React, { useState, useEffect, useContext} from "react";
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro";
import "./PerfilUsuario.scoped.css"
import { Link } from "react-router-dom";
import {AiOutlineMinus} from "react-icons/ai";

function PerfilUsuario(){
    const { contextLoginRegistro, setContextLoginRegistro} = useContext(ContextLoginRegistro)

    const redirectAnfOrClient = ()=>{
        if(contextLoginRegistro){
          if(contextLoginRegistro.rol.id === 2){
            return <div className="admin"><Link className="linkAdmin" to="/administracion/creaproductos">Agregar una propiedad</Link></div>
           }else if(contextLoginRegistro.rol.id === 1){
            return <div className="admin"><Link className="linkAdmin" to="/misReservas">Mis Reservas</Link></div>
           }
        }
      }

    return(
        <>
            <div className="avatar">
                <h4 className="text-avatar" >{`${contextLoginRegistro.nombre[0].toUpperCase()}${contextLoginRegistro.apellido[0].toUpperCase()}`}</h4>
            </div>
            <div className="divNombreApellidoUsuario">{contextLoginRegistro.nombre.charAt(0).toUpperCase() + contextLoginRegistro.nombre.slice(1)} {contextLoginRegistro.apellido.charAt(0).toUpperCase() + contextLoginRegistro.apellido.slice(1)}</div>
            <div className="divMailUsuario">{contextLoginRegistro.email}</div>
            <div className="line"><AiOutlineMinus fill="#1DBEB4" size="2rem"/><AiOutlineMinus fill="#1DBEB4" size="2rem"/><AiOutlineMinus fill="#1DBEB4" size="2rem"/><AiOutlineMinus fill="#1DBEB4" size="2rem"/><AiOutlineMinus fill="#1DBEB4" size="2rem"/><AiOutlineMinus fill="#1DBEB4" size="2rem"/><AiOutlineMinus fill="#1DBEB4" size="2rem"/><AiOutlineMinus fill="#1DBEB4" size="2rem"/></div>
            <div>{redirectAnfOrClient()}</div>
        </>
    )
}

export default PerfilUsuario;