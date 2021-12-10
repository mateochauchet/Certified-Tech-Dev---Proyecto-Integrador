import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Rules from '../../Politicas/Rules'

test('render <Rules />', () => {   
    const data ={
        norma1: 'pruebaNorma'

    }
    const component = render(<Rules normas={data}/>) 
    expect(component.container).toBeInTheDocument();
})
test('debug Rules', () => {
    screen.debug()});

    test(' Dato en Rules', () => {
        const data ={
            norma1: 'pruebaNorma'
    
        }
        const component = render(<Rules normas={data}/>) 
        component.queryByText('pruebaNorma')
    });