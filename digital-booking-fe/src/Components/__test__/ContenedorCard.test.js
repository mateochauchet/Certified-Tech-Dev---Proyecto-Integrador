import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import ContenedorCard from '../Cards/ContenedorCard';

test('render Title Cont-Card', () => {
    render(<ContenedorCard />)
    screen.debug()
    const title = screen.getByText(/buscar por tipo de alojamiento/i);
    expect(title).toBeInTheDocument();
});
