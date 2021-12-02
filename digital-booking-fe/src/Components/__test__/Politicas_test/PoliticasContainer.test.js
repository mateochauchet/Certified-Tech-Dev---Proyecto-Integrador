import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import PoliticsContainer from '../../Politicas/PoliticsContainer'

test('render <PoliticsContainer />', () => {   
    const list ={
        normas: {norma1: 'pruebaNorma1'}, 
        saludSeguridad: {dato1: 'prueba1', dato2: 'prueba2', dato3: 'prueba3'},
        cancelacion: {preSeleccionFecha: 'pruebaCancelacion'},
    }
    
    const component = render(<PoliticsContainer normas={list.normas} saludSeguridad= {list.saludSeguridad} cancelacion={list.cancelacion}/>) 
    expect(component.container).toBeInTheDocument();
})
test('debug PoliticsContainer', () => {
    screen.debug()});

    test(' Dato en PoliticsContainer', () => {
        const list ={
            normas: {norma1: 'pruebaNorma1'}, 
            saludSeguridad: {dato1: 'prueba1', dato2: 'prueba2', dato3: 'prueba3'},
            cancelacion: {preSeleccionFecha: 'pruebaCancelacion'},
        }
        const component = render(<PoliticsContainer normas={list.normas} saludSeguridad= {list.saludSeguridad} cancelacion={list.cancelacion}/>) 
        component.queryByText('Qué tenés que saber')
    });


