import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import Footer from '../Footer/Footer';

test('render Title Cont-Buscador', () => {
    render(<Footer />)
    screen.debug()
    const title = screen.getByText(/© 2021 Digital Booking/i);
    expect(title).toBeInTheDocument();
});

