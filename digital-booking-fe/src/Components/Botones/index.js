import React from "react";
import "./Botones.css";

export default function Botones(props) {

  if (props.value === "login") {
    return <button className="btn">Iniciar sesión</button>
  } else if (props.value === "signup") {
    return <button className="btn">Crear cuenta</button>
  }
  return (
    <div className="button">
      <button className="btn">Crear cuenta</button>
      <button className="btn">Iniciar sesión</button>
    </div>
  )
}