import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import Galeria from '../Detalle/Galeria';

test('render <Galeria />', () => {   
    const items =
    [
        {
          "original": "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1460&q=80"
        },
        {
          "original": "https://images.unsplash.com/photo-1495544515279-434b8d991640?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        }
    ]    
    const compGaleria = render(<Galeria item={items} />) 
    expect(compGaleria.container).toBeInTheDocument();
})