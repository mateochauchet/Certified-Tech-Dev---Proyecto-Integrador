import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import CardsContainer from '../Cards_list/CardsContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

test('render <cardsContainer/>', () => {
    let componente = render(<BrowserRouter ><Route path="/home" component={CardsContainer} /></BrowserRouter>)
    console.log(componente)
    

});

    