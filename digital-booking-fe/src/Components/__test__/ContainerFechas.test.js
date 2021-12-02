import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import ContainerFechas from '../Detalle/Fechas/ContainerFechas';
import ContextUser from "../../Components/Contexts/ContextUser"


test('render <ContainerFechas />', () => {
    
    const compContFechas = render(
        <ContextUser.Provider value={''} >
            <ContainerFechas />
        </ContextUser.Provider>
    ) ;
    expect(compContFechas.container).toBeInTheDocument();
})

// test('render Title Cont-Fecha', () => {
//                 render(<ContainerFechas />)
//     screen.debug()
//             const title = screen.getByText(/fechas disponibles/i);
//             expect(title).toBeInTheDocument();
// });

// test('render SubTitle Cont-Fecha', () => {
//                 render(<ContainerFechas />)
//     screen.debug()
//             const subtitle = screen.getByText(/agregá tus fechas de viaje para obtener precios exactos/i);
//             expect(subtitle).toBeInTheDocument();
// });