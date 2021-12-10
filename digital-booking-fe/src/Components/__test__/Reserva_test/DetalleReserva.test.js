import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import DetalleReserva from '../../Reserva/DetalleReserva'

test('render Title DetalleReserva', () => {
    const list = {
        categoria : 'categoria Prueba',
        titulo : 'titulo Prueba',
        ubicacion: 'ubicacion Prueba'
    }
    const comp = render(<DetalleReserva list={list}/>)
    expect(comp.container).toBeInTheDocument();
    
});

test(' titulo en DetalleReserva', () => {
    const list = {
        categoria : 'categoria Prueba',
        titulo : 'titulo Prueba',
        ubicacion: 'ubicacion Prueba'
    }
    const comp = render(<DetalleReserva list={list}/>)
    comp.queryByText(/Detalle de la reserva/i);
});

test('debug DetalleReserva', () => {
    screen.debug()});


    test(' categoria en DetalleReserva', () => {
        const list = {
            categoria : 'categoria Prueba',
            
        }
        const comp = render(<DetalleReserva list={list}/>)
        comp.queryByText(/categoria Prueba/i);
    });

    test(' ubicacion en DetalleReserva', () => {
        const list = {
            categoria : 'categoria Prueba',
            titulo : 'titulo Prueba',
            ubicacion: 'ubicacion Prueba'
        }
        const comp = render(<DetalleReserva list={list}/>)
        comp.queryByText(/ubicacion Prueba/i);
    });

