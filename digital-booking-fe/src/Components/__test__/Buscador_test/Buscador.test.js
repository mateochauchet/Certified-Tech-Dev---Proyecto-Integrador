import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import Buscador from '../../Buscador/Buscador';
import Select from 'react-select'

const list = [
        {nombre: 'pruebaNombre',
        pais: 'pruebaPais'}
    ]

test('render component <Buscador />', () => {
    
    
    render(<Buscador list={list} > 
        <Select options= {list} />
    </ Buscador >)
    screen.debug();
});

