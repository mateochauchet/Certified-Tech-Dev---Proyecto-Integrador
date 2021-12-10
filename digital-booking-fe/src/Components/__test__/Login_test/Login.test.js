import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen, render, prettyDOM } from '@testing-library/react'
import Login from '../../Login/Login';
import { Route } from 'react-router-dom'
import ContextLoginRegistro from "../../Contexts/ContextLoginRegistro";
import useForm from '../../Hooks/useForm';
import { BrowserRouter as Router } from "react-router-dom";

describe("Login", () => {

    test('render <Login />', () => {
    const compLogin = render(
        <ContextLoginRegistro.Provider value={''} >

            <Router history={history}>
                <Route path="/login" >
                    <Login />
                </Route>
            </Router>

        </ContextLoginRegistro.Provider>
    ) 
    expect(compLogin.container).toBeInTheDocument();
    });

test('render mensaje para registro desde <Login />', () => {
    const compLogin = render(
        <ContextLoginRegistro.Provider value={''} >

            <Router history={history}>
                <Route path="/login" >
                    <Login />
                </Route>
            </Router>

        </ContextLoginRegistro.Provider>
    )
    compLogin.queryByText(/¿Aún no tenes cuenta?/i)
});

test('email field should have label in <Login />', () => {

    const compLogin = render(
        

            <Router history={history}>
                <Route path="/login" >
                    <Login />
                </Route>
            </Router>

        
    )
    const emailInputNode = compLogin.container.querySelector('input')
    console.log(prettyDOM(emailInputNode))
});

// test('clicking Ingresar in Login', () => {

//     const compLogin = render(
        

//             <Router history={history}>
//                 <Route path="/login" >
//                     <Login />
//                 </Route>
//             </Router>

        
//     )
//     const ingresar = compLogin.getByDisplayValue('Ingresar')
    
//     fireEvent.click(ingresar)
// });

});
