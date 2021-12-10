import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Card from '../../Cards_list/Card';

test('render Title Card', () => {
    const list = {
        house : {imagenes: 'prueba'},
        line1 : 'linea de Prueba'
       
    }
    const compCard = render(
    <Card list={list}/>)
    expect(compCard.container).toBeInTheDocument();
    
});