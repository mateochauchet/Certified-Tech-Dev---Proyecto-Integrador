import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Navbar from '../../Navbar/Navbar';

describe('Test_Navbar', () => {
    const compNavbar = render(
        <Navbar  />
           
    );
    test('render component Navbar', () => {
        screen.debug()
        expect(compNavbar.container).toBeInTheDocument();

    });
   
        

});