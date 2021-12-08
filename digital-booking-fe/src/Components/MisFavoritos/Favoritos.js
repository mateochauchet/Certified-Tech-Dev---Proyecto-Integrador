import React, { useState, useEffect, useContext} from "react";
import Heading from "../Detalle/Heading";
import CardsContainer from "../Cards_list/CardsContainer";
import ContextHeart from '../Contexts/ContextHeart';

function Favoritos(props){

    const { contextHeart, setContextHeart } = useContext(ContextHeart);
    return(
        <>
        <Heading titulo="Mis propiedades favoritas"/>
        <CardsContainer list={props.productos} filtro={props.filtro} filtro2={props.filtro2}/>
        </>
    )
}

export default Favoritos;