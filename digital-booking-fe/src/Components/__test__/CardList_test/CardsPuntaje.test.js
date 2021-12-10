import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import CardsPuntaje from '../../Cards_list/CardsPuntaje';


const list = [
    {
        puntaje: 0,
    }
]
describe('Test_CardPuntaje', () => {
    const compCardPuntaje = render(
        <CardsPuntaje puntaje={list.puntaje} />
           
    );
    test('render component <CardPuntaje />', () => {
        screen.debug()
        expect(compCardPuntaje.container).toBeInTheDocument();

    });
    test('render mensaje if puntaje = 0', () => {
        render(
            <CardsPuntaje puntaje={0} />
        );
        screen.debug()
        expect(screen.getByText(/malo/i));
    });
    test('render mensaje if puntaje = 2', () => {
        render(
            <CardsPuntaje puntaje={2} />
        );
        screen.debug()
        expect(screen.getByText(/malo/i));
    });
    test('render mensaje if puntaje = 4', () => {
        render(
            <CardsPuntaje puntaje={4} />
        );
        screen.debug()
        expect(screen.getByText(/regular/i));
    });
    test('render mensaje if puntaje = 6', () => {
        render(
            <CardsPuntaje puntaje={6} />
        );
        screen.debug()
        expect(screen.getByText(/bueno/i));
    });
    test('render mensaje if puntaje = 9', () => {
        render(
            <CardsPuntaje puntaje={9} />
        );
        screen.debug()
        expect(screen.getByText(/excelente/i));
    });
})



