import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import Heading2 from '../../Detalle/Heading2';
import {Router, Route} from 'react-router-dom'

describe("Render <Heading />", () => {
    let compHeading2;


    beforeEach(() => {
        const data = {loc: 'locPrueba'}
        const history = createMemoryHistory('/productos/1');
        compHeading2 = render(
            <Router history={history}>
                <Route path="/productos/1" >
                    <Heading2 location={data.loc}/>
                </Route>    
            </Router>
        )
    })

    test('render container Heading', () => {   
        expect(compHeading2.container).toBeInTheDocument();
     
    })
    test("debug", () => {
        compHeading2.debug();
    })   
    






    

}) 