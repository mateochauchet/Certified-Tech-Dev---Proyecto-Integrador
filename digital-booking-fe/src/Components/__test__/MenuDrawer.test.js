import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import MenuDrawer from '../MenuDrawer/MenuDrawer'
import {createMemoryHistory} from 'history'
import ContextLoginRegistro from "../../Components/Contexts/ContextLoginRegistro";
import { Route } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { BrowserRouter as Router } from "react-router-dom";

describe("Render <MenuDrawer />", () => {
    let compMenuDrawer;
    let data;

      
   
    test('render component <MenuDrawer />', () => {
        const history = createMemoryHistory('/home');
        compMenuDrawer = render(
            <ContextLoginRegistro.Provider value={""} >
            
                    <Router history={history}>
                        <Route path="/home" >
                            <MenuDrawer >
                            <Avatar /> </MenuDrawer >
                        </Route>
                    </Router>
                
            </ContextLoginRegistro.Provider>
        )
        screen.debug()
        console.log(compMenuDrawer)
        expect(compMenuDrawer.container).toBeInTheDocument();

    });
    

    
    test('render MENU', () => {
        const history = createMemoryHistory('/home');
        compMenuDrawer = render(
            <ContextLoginRegistro.Provider value={""} >
            
                    <Router history={history}>
                        <Route path="/home" >
                            <MenuDrawer />
                        </Route>
                    </Router>
                
            </ContextLoginRegistro.Provider>
        )
        compMenuDrawer.queryByText('MENÚ');

    });
    
})