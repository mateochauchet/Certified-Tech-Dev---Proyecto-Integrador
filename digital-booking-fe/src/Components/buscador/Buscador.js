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
    <div  className="barSearch">
      <Select data-testid="city-selector" className="searchCity" placeholder='A dónde vamos?' options= {options} onChange={elegirCiudad} />
      <DateBuscador />
      <Button data-testid="button" classN="primary" name="Buscar" cambiarCiudad={props.cambiarCiudad} ciudad={ciudad} ></Button>
    </div>
  );
}

export default Buscador;
