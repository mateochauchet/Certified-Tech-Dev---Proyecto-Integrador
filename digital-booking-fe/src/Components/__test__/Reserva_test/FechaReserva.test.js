import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import FechaReserva from '../../ReservaCalendario/FechaReserva'

test('render Title FechaReserva', () => {
    const list = {
        categoria : 'categoria Prueba',
        titulo : 'titulo Prueba',
        ubicacion: 'ubicacion Prueba'
    }
    const comp = render(<FechaReserva />)
    expect(comp.container).toBeInTheDocument();
    
});