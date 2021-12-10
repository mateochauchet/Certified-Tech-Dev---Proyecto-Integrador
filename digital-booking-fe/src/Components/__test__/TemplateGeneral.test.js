import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import TemplateGeneral from '../../Components/Template/TemplateGeneral';
import { Route } from 'react-router-dom'
import ContextLoginRegistro from "../../Components/Contexts/ContextLoginRegistro";
import Login from '../Login/Login';
import { BrowserRouter as Router } from "react-router-dom";

test('render <TemplateGeneral />', () => {   
    const compTemplateGeneral = render(
    <ContextLoginRegistro.Provider value={''} >
            
    <Router history={history}>
        <Route path="/login" >
            <TemplateGeneral home={false} direccion="/registro" nombreBoton="Crear cuenta" />
            <Login />
        </Route>
    </Router>

</ContextLoginRegistro.Provider>   
    ) 
    expect(compTemplateGeneral.container).toBeInTheDocument();
})