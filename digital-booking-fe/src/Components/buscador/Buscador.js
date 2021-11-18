import "./buscador.css";
import './Select.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'

import Button from "./Button";
import DateBuscador from "./DateBuscador";
import { useState} from "react";



function Buscador(props) {

  const [ciudad,setCiudad] = useState([]);
  
  
  

  let options =
    props.list.map((c,i) => ({
      key:{i}, value: c.city, label: (
      <>
      <FontAwesomeIcon icon={faMapMarkerAlt}/>
      <span className="city">{c.nombre}</span><br />
      <span className="country">{c.pais}</span>
      </>
    )
    })
  );

  const elegirCiudad = (value) => {
    setCiudad(value.value)
  }
 
  return (
    <div  className="barSearch">
      <Select  
        data-testid="city-selector" 
        
        className="searchCity" 
        placeholder='A dónde vamos?' 
        options= {options} 
        onChange={elegirCiudad} 
        
    
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        
        primary: 'white'
      },
    })}
    />
      <DateBuscador />
      <Button data-testid="button" classN="primary" name="Buscar" cambiarCiudad={props.cambiarCiudad} ciudad={ciudad} ></Button>
    </div>
  );
}

export default Buscador;
