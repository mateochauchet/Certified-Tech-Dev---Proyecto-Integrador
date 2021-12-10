import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import HealthAndSafety from '../../Politicas/HealthAndSafety'

test('render <HealthAndSafety />', () => {   
    const data ={
        dato1: 'pruebaDato de seguridad'

    }
    const component = render(<HealthAndSafety saludSeguridad={data}/>) 
    expect(component.container).toBeInTheDocument();
})
test('debug HealthAndSafety', () => {
    screen.debug()});

    test(' Dato en HealthAndSafety', () => {
        const data ={
            dato1: 'pruebaDato de seguridad'
    
        }
        const component = render(<HealthAndSafety saludSeguridad={data}/>) 
        component.queryByText('pruebaDato de seguridad')
    });
