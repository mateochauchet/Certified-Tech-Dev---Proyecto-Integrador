import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Header from '../Header/Header';
import { BrowserRouter , Route } from 'react-router-dom'
import {createMemoryHistory} from 'history'
import MenuDrawer from '../MenuDrawer/MenuDrawer';




test('render Header slogan', () => {
    const compHeader = render(
        <BrowserRouter history={history} >
            <Route path="/home" >
                <Header >
                    <MenuDrawer nombreBoton={'nombreBoton'} direccion={'/home'} />
                    </Header>
            </Route>
        </BrowserRouter>)

        screen.debug()
        compHeader.queryByText(/Sentite como en tu hogar/i);
    expect(compHeader.container).toBeInTheDocument();

});




