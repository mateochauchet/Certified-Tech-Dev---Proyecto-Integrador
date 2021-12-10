import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Cancellation from '../../Politicas/Cancellation'

test('render <Cancellation />', () => {   
    const data ={
        preSeleccionFecha: 'prueba'

    }
    const component = render(<Cancellation cancelacion={data}/>) 
    expect(component.container).toBeInTheDocument();
})
