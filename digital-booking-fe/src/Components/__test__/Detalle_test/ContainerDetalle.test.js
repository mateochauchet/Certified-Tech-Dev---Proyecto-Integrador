import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import ContainerDetalle from '../../Detalle/ContainerDetalle';
import Heading from '../../Detalle/Heading';
import Heading2 from '../../Detalle/Heading2'
import { useParams } from 'react-router-dom';
import { Route } from 'react-router-dom'

import { BrowserRouter as Router } from "react-router-dom";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({}),
}));



    test('render component <ContainerDetalle />', () => {
        const list = [
            {
                titulo: 'pruebaNombre',
                puntaje: 8
            }
        ]
        const compContainerDetalle = render(
            <Router history={history}>
                <Route path="/productos/1" >
                    <ContainerDetalle list={list}>
                        < Heading
                            titulo={list.titulo} />
                        <Heading2
                            puntaje={list.puntaje} />
                    </ ContainerDetalle >

                </Route>
            </Router>
        );
        screen.debug()
        expect(compContainerDetalle.container).toBeInTheDocument();

    });
    test('render component <ContainerDetalle /> with title heading props', () => {
        const list = [
            {
                titulo: 'pruebaNombre',
                puntaje: 8
            }
        ]
        const compContainerDetalle =render(
            <Router history={history}>
                <Route path="/productos/1" >
                    <ContainerDetalle list={list}>
                        < Heading
                            titulo={list.titulo} />
                        <Heading2
                            puntaje={list.puntaje} />
                    </ ContainerDetalle >

                </Route>
            </Router>
        );
        
        compContainerDetalle.queryByText('pruebaNombre');
        });

        test('render component <ContainerDetalle /> with puntaje heading2 props', () => {
            const list = [
                {
                    titulo: 'pruebaNombre',
                    puntaje: 8
                }
            ]
            const compContainerDetalle =render(
                <Router history={history}>
                    <Route path="/productos/1" >
                        <ContainerDetalle list={list}>
                            < Heading
                                titulo={list.titulo} />
                            <Heading2
                                puntaje={list.puntaje} />
                        </ ContainerDetalle >
    
                    </Route>
                </Router>
            );
            
            compContainerDetalle.queryByText(8);
            })

            test('render test', () => {   
    
                const component = render(
                    <Router history={history}>
                    <Route path="/productos/1" >
                        <ContainerDetalle />
                    </Route>
                </Router>) 
                expect(component.container).toBeInTheDocument();
            })



