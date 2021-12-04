import React, {useState, useEffect} from "react";
import { Link} from "react-router-dom";
import "./Botones.css";


export default function Botones(props) {

  let [direccion, setDireccion] = useState("");
  let [nombreBoton, setNombreBoton] = useState("");
  useEffect(() => {
    setDireccion(props.direccion);
    setNombreBoton(props.nombreBoton);
  }, [direccion, nombreBoton]);
  return (
      <button className="btn">
      <Link  className="btn-link" to={direccion}>{nombreBoton}</Link>
      </button>
     
    
    
  );
}