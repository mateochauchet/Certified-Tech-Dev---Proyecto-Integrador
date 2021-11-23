import "./buscador.css";
import './Select.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'

import Button from "./Button";
import DateBuscador from "./DateBuscador";
import { useState } from "react";



function Buscador(props) {

  const [ciudad, setCiudad] = useState([]);
  const [dateIn, setDateIn] = useState(null);
  const [dateOut, setDateOut] = useState(null);




  let options =
    props.list.map((c, i) => ({
      key: { i }, value: c.nombre, label: (
        <>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span className="city">{c.nombre}</span><br />
          <span className="country">{c.pais}</span>
        </>
      )
    })
    );

  const elegirCiudad = (event) => {
    const value = event.value
    console.log(value)
    setCiudad(value)
  }
  const elegirFecha = (startDate, endDate) => {
    setDateIn(startDate)
    setDateOut(endDate)
    
    }
     
  


  return (
    <div className="barSearch">
      <Select
        data-testid="city-selector"

        className="searchCity"
        placeholder='A dónde vamos?'
        options={options}
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
      <DateBuscador handleChange={elegirFecha}  />
      <Button data-testid="button" classN="primary" name="Buscar" cambiarCiudad={props.cambiarCiudad} dateIn={dateIn} dateOut={dateOut} ciudad={ciudad} ></Button>
      {(dateIn != null) && (dateOut != null) 
      ?
      console.log((dateIn).format('DD/MM/YYYY'), (dateOut).format('DD/MM/YYYY'))

      : null}
    </div>
  );
}

export default Buscador;
