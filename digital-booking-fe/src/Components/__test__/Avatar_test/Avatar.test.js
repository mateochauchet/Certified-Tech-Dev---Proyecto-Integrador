import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import ContextLoginRegistro from "../../Contexts/ContextLoginRegistro";
import Avatar from '../../Avatar/Avatar'
import { createMemoryHistory } from 'history'
import { useContext } from "react";
import { Router, Route } from 'react-router-dom'

describe("Render <Avatar />", () => {
    let compAvatar;
    let data;

    beforeEach(() => {
        data = {
            nombre: 'nombreTest',
            apellido: 'apellidoTest'
        }
        

        const history = createMemoryHistory('/home');
        compAvatar = render(
        
            <ContextLoginRegistro.Provider value={data} >
            
                    <Router history={history}>
                        <Route path="/home" >
                            <Avatar payload={data} />
                        </Route>
                    </Router>
                
            </ContextLoginRegistro.Provider>
        )
    })
    test('render component <Avatar />', () => {
        screen.debug()
        console.log(compAvatar)
        expect(compAvatar.container).toBeInTheDocument();

    });
    
});
