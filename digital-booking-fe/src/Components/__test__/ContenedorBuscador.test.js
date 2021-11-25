import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import ContenedorBuscador from '../Buscador/ContenedorBuscador';

test('render Title Cont-Buscador', () => {
    render(<ContenedorBuscador />)
    screen.debug()
    const title = screen.getByText(/busca ofertas en casas, cabañas y mucho más/i);
    expect(title).toBeInTheDocument();
});