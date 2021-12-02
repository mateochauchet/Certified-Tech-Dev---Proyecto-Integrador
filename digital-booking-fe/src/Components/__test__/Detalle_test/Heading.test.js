import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import Heading from '../../Detalle/Heading';
import {Router, Route} from 'react-router-dom'

describe("Render <Heading />", () => {
    let compHeading;

    
    beforeEach(() => {
        const data = {titulo: 'titulotest', categoria: 'testCategoria'}
        const history = createMemoryHistory('/productos/1');
        compHeading = render(
            <Router history={history}>
                <Route path="/productos/1" >
                    <Heading titulo={data.titulo}/>
                </Route>    
            </Router>
        )
    })

    test('render container Heading', () => {   
        expect(compHeading.container).toBeInTheDocument();
     
    })
    test("debug & tituloTest", () => {
        compHeading.debug();
        compHeading.queryByText('titulotest')
    })   
    test("debug & categoriaTest", () => {
        compHeading.debug();
        compHeading.queryByText('testCategoria')
    })
    






    

})    

