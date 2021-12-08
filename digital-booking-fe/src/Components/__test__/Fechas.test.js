import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import Fecha from '../Detalle/Fechas/Fecha';

test('render <Fecha />', () => {   
        
    const compFecha = render(<Fecha />) 
    expect(compFecha.container).toBeInTheDocument();
})