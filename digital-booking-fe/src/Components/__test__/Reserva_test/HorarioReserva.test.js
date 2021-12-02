import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import HorarioReserva from '../../Reserva/HorarioReserva'

test('render <HorarioReserva />', () => {   
    const component = render(<HorarioReserva />) 
    expect(component.container).toBeInTheDocument();
})

test('render HorarioReserva name props', () => {
    const data = {
        name: 'test',
    }
    const component = render(<HorarioReserva  />)
    component.debug()
    component.getByText('Tu horario de llegada')
});

test('render HorarioReserva mensaje props', () => {
    const data = {
        name: 'test',
    }
    const component = render(<HorarioReserva  />)
    component.getByText('Tu habitacion va a estar lista para el check-in entre las 10:00AM y las 11:00PM')
});
