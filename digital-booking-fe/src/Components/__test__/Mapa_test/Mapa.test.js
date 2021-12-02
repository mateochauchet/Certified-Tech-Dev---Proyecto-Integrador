import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react'
import Mapa from '../../Detalle/Mapa/Mapa'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: jest.fn(),
    Marker: jest.fn().mockReturnValue({
      setLngLat: jest.fn().mockReturnValue({
        setPopup: jest.fn().mockReturnValue({
          addTo: jest.fn().mockReturnValue({})
        })
      })
    }),
    Popup: jest.fn().mockReturnValue({
      setHTML: jest.fn().mockReturnValue({ on: jest.fn() })
    })
  }))
test('render <Mapa />', () => {   
    
    const component = render(<Mapa />) 
    expect(component.container).toBeInTheDocument();
})