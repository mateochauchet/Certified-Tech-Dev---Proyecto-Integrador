import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen, render, prettyDOM, wait } from '@testing-library/react'

import cardsListService from '../../service/cardsListService'
import App from '../../App'
import fetchMock from 'fetch-mock';

jest.mock('../../service/cardsListService')

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


describe("Product list", () => {
  describe("when rendered", () => {

    test.only('api calls', async () => {
        cardsListService.getProductos.mockResolvedValueOnce({ok:true});
        global.fetch = jest.fn();
        const mockAPICall = (option, data) => global.fetch.mockImplementation(() => Promise[option](data));

    });

    it("should call a fetchData function", async () => {
      const mockResponse = {
        data: []
      };
      mockAPICall("resolve", mockResponse);
      return getProductos().then((response) => {
        expect(response).toEqual({
          data: []
        });
      });
    });
  });
});
