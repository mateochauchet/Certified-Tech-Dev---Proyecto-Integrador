import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import TemplateReserva from '../../Reserva/TemplateReserva'
import ContextLoginRegistro from "../../Contexts/ContextLoginRegistro";
import { Route } from 'react-router-dom'

import { BrowserRouter as Router } from "react-router-dom";

test('render <TemplateReserva />', () => {
    const data = {
        nombre: 'nombreTest',
        apellido: 'apellidoTest'
    }
    const compTemplateReserva = render(

        <ContextLoginRegistro.Provider value={data} >

            <Router history={history}>
                <Route path="/productos/1/reserva" >
                    <TemplateReserva >
                    </TemplateReserva >
                </Route>
            </Router>

        </ContextLoginRegistro.Provider>
    )
    expect(compTemplateReserva.container).toBeInTheDocument();  
    
})
