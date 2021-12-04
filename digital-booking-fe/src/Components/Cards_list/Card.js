import React  from "react";
import { useLocation } from "react-router-dom";
import CardsImg from "./CardsImg";
import CardsInfo from "./CardsInfo";
import CardReserva from "../MisReservas/CardReserva.js";

<<<<<<< HEAD
function Card(props){
  
	return(
     <div className="card">
      <CardsImg house={props.house}/>
      <CardsInfo house={props.house}/>
=======
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
>>>>>>> f67f6cd0a2c34be4e30a21056651a67ac37b6df0
    </div>
  );
}
