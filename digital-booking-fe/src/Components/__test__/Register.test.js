import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import Register from '../Register/Register'
import ContextLoginRegistro from "../Contexts/ContextLoginRegistro";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from 'react-router-dom'


    
test('render <Register />', () => {   
    
    const component = render(<Register />) 
    expect(component.container).toBeInTheDocument();
})


test('render with context', () => {
    const compRegister = render(
        <ContextLoginRegistro.Provider value={''} >

            <Router history={history}>
                <Route path="/registro" >
                    <Register />
                </Route>
            </Router>

        </ContextLoginRegistro.Provider>
    ) 
    expect(compRegister.container).toBeInTheDocument();
    });

    test('render mensaje para registro ', () => {
        const compRegister = render(
            <ContextLoginRegistro.Provider value={''} >
    
                <Router history={history}>
                    <Route path="/registro" >
                        <Register />
                    </Route>
                </Router>
    
            </ContextLoginRegistro.Provider>
        )
        compRegister.queryByText(/Crear cuenta/i)
    });

