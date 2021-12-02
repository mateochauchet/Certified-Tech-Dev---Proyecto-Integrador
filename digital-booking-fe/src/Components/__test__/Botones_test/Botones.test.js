import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import Botones from '../../Botones/Botones'
import {Router, Route} from 'react-router-dom'
import { Link} from "react-router-dom";

describe("Render <Botones />", () => {
    let compBotones;

    
    beforeEach(() => {
       const data = {nombre: 'tituloBoton'}
        const history = createMemoryHistory('/home');
        compBotones = render(
            <Router history={history}>
                <Route path="/home" >
                    <Botones nombreBoton={data.nombre}>
                    <Link to={'/home'}> {'tituloBoton'}  </Link></Botones>
                </Route>    
            </Router>
        )
    })

    test('render container Botones', () => {   
        expect(compBotones.container).toBeInTheDocument();
        
    })
    
    test("debug", () => {
        compBotones.debug();
    })   
     
    
})

