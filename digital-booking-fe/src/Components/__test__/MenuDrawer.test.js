import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import MenuDrawer from '../MenuDrawer/MenuDrawer'
import {createMemoryHistory} from 'history'
import ContextLoginRegistro from "../../Components/Contexts/ContextLoginRegistro";
import { Route } from 'react-router-dom'

import { BrowserRouter as Router } from "react-router-dom";

describe("Render <MenuDrawer />", () => {
    let compMenuDrawer;
    let data;

    beforeEach(() => {
       
        

        const history = createMemoryHistory('/home');
        compMenuDrawer = render(
        
            <ContextLoginRegistro.Provider value={""} >
            
                    <Router history={history}>
                        <Route path="/home" >
                            <MenuDrawer direccion="/login" />
                        </Route>
                    </Router>
                
            </ContextLoginRegistro.Provider>
        )
    })
    test('render component <MenuDrawer />', () => {
        screen.debug()
        console.log(compMenuDrawer)
        expect(compMenuDrawer.container).toBeInTheDocument();

    });
    test('render cierre sesion', () => {
        
        compMenuDrawer.queryByText('¿Desea cerrar sesión?');

    });
    test('render MENU', () => {
        
        compMenuDrawer.queryByText('MENÚ');

    });
    
});