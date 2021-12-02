import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import CardsContainer from '../../Cards_list/CardsContainer';
import CardsList from '../../Cards_list/CardsList';


const list = [
    {
        nombre: 'pruebaNombre',
        categoria: {
            titulo: 'pruebaTitulo'
        },
        ciudad: {
            nombre: 'Bogota'
        }
    }
]
describe('Test_CardsContainer', () => {
    const compContCardContainer = render(
        <CardsContainer list={list}>
            <CardsList list={list} filtro={'pruebaTitulo'}  />
        </ CardsContainer >
    );
    test('render component <CardsContainer />', () => {
        screen.debug()
        expect(compContCardContainer.container).toBeInTheDocument();

    });
    test('render if filtro =  todos', () => {
        const compContCardContainer = render(
            <CardsContainer list={list}>
                <CardsList list={list} filtro={'todos'}  />
            </ CardsContainer >
        );
        screen.debug()
        expect(compContCardContainer.container).toBeInTheDocument();

    });


    test('render titulo Recomendaciones <CardsContainer />', () => {
        render(
            <CardsContainer list={list}>
            
        </ CardsContainer >
        );
        const title = screen.getByText(/Recomendaciones/i);
        expect(title).toBeInTheDocument();
    });
})