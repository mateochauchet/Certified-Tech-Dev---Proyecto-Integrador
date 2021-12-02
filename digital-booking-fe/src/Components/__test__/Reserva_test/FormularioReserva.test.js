import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import FormularioReserva from '../../Reserva/FormularioReserva'
import ContextLoginRegistro from "../../Contexts/ContextLoginRegistro";
import { Route } from 'react-router-dom'

import { BrowserRouter as Router } from "react-router-dom";


test('render <FormularioReserva />', () => {
    const data = {
        nombre: 'nombreTest',
        apellido: 'apellidoTest'
    }
    const compForm = render(

        <ContextLoginRegistro.Provider value={data} >

            <Router history={history}>
                <Route path="/home" >
                    <FormularioReserva value={data.nombre} />
                </Route>
            </Router>

        </ContextLoginRegistro.Provider>
    )
    expect(compForm.container).toBeInTheDocument();
    screen.debug()
    compForm.queryByLabelText('Nombre')
    compForm.queryByLabelText('Apellido')
    compForm.queryByLabelText('Correo electronico')
    compForm.queryByLabelText('Ciudad')
})

test(' texto en componente Form', () => {
    const data = {
        nombre: 'nombreTest',
        apellido: 'apellidoTest'
    }
    const compForm = render(
        <ContextLoginRegistro.Provider value={data} >
            <Router history={history}>
                <Route path="/home" >
                    <FormularioReserva value={data.nombre} />
                </Route>
            </Router>
        </ContextLoginRegistro.Provider>
    )


    compForm.queryByText(/ nombreTest /i);
});

test(' indicaciones en Form', () => {
    
    const compForm = render(
        <ContextLoginRegistro.Provider value={''} >
            <Router history={history}>
                <Route path="/home" >
                    <FormularioReserva  />
                </Route>
            </Router>
        </ContextLoginRegistro.Provider>
    )
    compForm.queryByText(/ Completa tus datos /i);
});

