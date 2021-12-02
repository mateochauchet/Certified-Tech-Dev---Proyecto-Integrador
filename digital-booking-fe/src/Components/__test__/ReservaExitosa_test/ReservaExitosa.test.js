import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import ReservaExitosa from '../../ReservaExitosa/ReservaExitosa'
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";


test('render <ReservaExitosa />', () => {
    const component = render(
        <Router history={history}>
            <Route path="/home" >
                <ReservaExitosa>
                <Link to='/home'> <button className="button-ok">ok</button> </ Link>
                </ReservaExitosa >
            </Route>
        </Router>)



    expect(component.container).toBeInTheDocument();
})

test('render ReservaExitosa mensaje', () => {

    const component = render(
        <Router >
            <Route path="/home" >
                <ReservaExitosa />
            </Route>
        </Router>)

component.debug()
component.queryByText('¡Muchas gracias!')
    
});

test('render ReservaExitosa mensaje reserva', () => {

    const component = render(
        <Router history={history}>
            <Route path="/home" >
                <ReservaExitosa />
            </Route>
        </Router>)

    component.queryByText('Su reserva se ha realizado con éxito')
});