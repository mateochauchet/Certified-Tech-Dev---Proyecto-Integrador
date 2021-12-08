import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import Card from '../Cards/Card';

test('render Title Cont-Card', () => {
    const categoriaList = {
        tituloCategoria : 'titulo Prueba',
        img : "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

    }
    render(<Card tituloCategoria={categoriaList.tituloCategoria}/>)
    screen.debug()
    expect(getAllByText(title)[0]).toBeInTheDocument();
});

