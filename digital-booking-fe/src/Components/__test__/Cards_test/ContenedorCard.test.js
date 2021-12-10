import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import ContenedorCard from '../../Cards/ContenedorCard';
import Card from '../../Cards/Card';

const list = [
    {
        tituloCategoria : 'titulo Prueba'
    }
]
describe('render <ContenedorCard />', () => {
    const compContCard = render(
        <ContenedorCard categorias={list}>
            
        </ ContenedorCard >
    );
    test('render component <ContenedorCard />', () => {
        screen.debug()
        expect(compContCard.container).toBeInTheDocument();
    });

    test('render component <ContenedorCard />', () => {
        render(
            <ContenedorCard categorias={list}>
            </ ContenedorCard >
        );
        const title = screen.getByText(/Buscar por tipo de Alojamiento/i);
        expect(title).toBeInTheDocument();
    });
});




