import React  from "react";
import { useLocation } from "react-router-dom";
import CardsImg from "./CardsImg";
import CardsInfo from "./CardsInfo";
import CardReserva from "../MisReservas/CardReserva.js";

export default function Card(props) {

  let location = useLocation();

  const renderReserva = () =>{

    if(location === "/misReservas"){
    return <CardReserva/>
    }
    
  }

  return (
    <div className="card">
      {renderReserva}
      <CardsImg house={props.house} />
      <CardsInfo house={props.house} />
    </div>
  );
}
