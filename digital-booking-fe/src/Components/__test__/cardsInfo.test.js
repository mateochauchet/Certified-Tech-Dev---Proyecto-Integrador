import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import CardsInfo from '../Cards_list/CardsInfo';
import { BrowserRouter, Switch, Route } from "react-router-dom";

test('render Title', () => {
    
    const house = {
        title:"test",
        id:1,
        categoria:"test",
        puntaje:8,
        location:"test",
        description: {
            titulo: "Alójate en el corazón de Bu",
            text1: "En ciudantana, del parque San Martín y del distito de Recoleta.",
            text2: "Hermitoderno y miam a 10:00 am."
          }
    }
    const component = render(<BrowserRouter ><Route path="/home" component={<CardsInfo house={house}/>} /></BrowserRouter>)
    console.log(component)

});
