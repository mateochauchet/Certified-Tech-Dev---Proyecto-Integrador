import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Descripcion from '../../Detalle/Descripcion'

test('render Title Descripcion', () => {
    const list = {
        titulo : 'Titulo de Prueba',
        line1 : 'linea de Prueba'
       
    }
    const comp = render(<Descripcion />)
    expect(comp.container).toBeInTheDocument();
    
});