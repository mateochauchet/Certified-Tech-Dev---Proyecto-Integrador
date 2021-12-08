import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Caracteristicas from '../Detalle/Caracteristicas';


describe("Render <Caracteristicas />", () => {
    const caracteristicasTest = [
            {
                "nombre": "Televisor",
                "iconName": "tv"
            },
            {
                "nombre": "Estacionamiento",
                "iconName": "parking"
            },
            {
                "nombre": "Pileta",
                "iconName": "swimmer"
            }]

    test('render component', () => {
        const compCaracteristicas = render(<Caracteristicas list={caracteristicasTest} />)
        expect(compCaracteristicas.container).toBeInTheDocument();
    });

    test('render Title Caracteristicas', () => {
        render(<Caracteristicas list={caracteristicasTest} />)
        screen.debug()
        const title = screen.getByText(/qué ofrece este lugar/i);
        expect(title).toBeInTheDocument();
    });

});