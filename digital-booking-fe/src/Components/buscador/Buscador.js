import "./buscador.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
import cityList from './city.json'
import Button from "./Button";
import DateBuscador from "./DateBuscador";
import { useState} from "react";



function Buscador(props) {

  const [ciudad,setCiudad] = useState([]);

  let options =
    cityList.map((c,i) => ({
      key:{i}, value: c.city, label: (
      <>
      <FontAwesomeIcon icon={faMapMarkerAlt}/>
      <span className="city">{c.city}</span><br />
      <span className="country">{c.country}</span>
      </>
    )
    })
  );

  const elegirCiudad = (value) => {
    setCiudad(value.value)
  }
 
  return (
    <div className="barSearch">
      <Select className="searchCity" placeholder={<div>A dónde vamos?</div>} options= {options} onChange={elegirCiudad} />
      <DateBuscador />
      <Button classN="primary" name="Buscar" cambiarCiudad={props.cambiarCiudad} ciudad={ciudad} ></Button>
    </div>
  );
}

export default Buscador;
