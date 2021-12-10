import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import ContenedorBuscador from '../../Buscador/ContenedorBuscador';
import Buscador from '../../Buscador/Buscador';


const list = [
    {
        nombre: 'pruebaNombre',
        pais: 'pruebaPais'
    }
]
describe('Test_Buscador', () => {
    const compContBuscador = render(
        <ContenedorBuscador list={list}>
            <Buscador list={list} />
        </ ContenedorBuscador >
    );
    test('render component <ContenedorBuscador />', () => {
        screen.debug()
        expect(compContBuscador.container).toBeInTheDocument();

    });

    test('render Title Cont-Fecha', () => {
        render(
            <ContenedorBuscador list={list}>
                <Buscador list={list} />
            </ ContenedorBuscador >
        );
        screen.debug()
        const title = screen.getByText(/Busca ofertas en casas, cabañas y mucho más/i);
        expect(title).toBeInTheDocument();
    });


});





