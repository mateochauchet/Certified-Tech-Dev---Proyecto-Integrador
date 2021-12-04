import React , {Component, useState} from 'react';
import CardsImg from './CardsImg';
import CardsInfo from './CardsInfo';

function Card(props){
  
	return(
     <div className="card">
      <CardsImg house={props.house}/>
      <CardsInfo house={props.house}/>
    </div>
  )
}

export default Card;