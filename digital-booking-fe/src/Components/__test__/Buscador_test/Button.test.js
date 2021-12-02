import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import Button from '../../Buscador/Button';

test('render <Button />', () => {   
    const component = render(<Button />) 
    expect(component.container).toBeInTheDocument();
})

test('render button name props', () => {
    const data = {
        name: 'test',
    }
    const component = render(<Button name={data.name} />)
    component.getByText('test')
});


