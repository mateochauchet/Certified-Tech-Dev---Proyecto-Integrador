import React  from "react";
// import { useLocation } from "react-router-dom";
import CardsImg from "./CardsImg";
import CardsInfo from "./CardsInfo";


export default function Card(props) {

  return (
    <div className="card">
      <CardsImg house={props.house} />
      <CardsInfo house={props.house} />
    </div>
  );
}
