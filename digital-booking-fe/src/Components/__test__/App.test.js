import {screen, render} from '@testing-library/react'
import App from '../../App'
import cardsListService, {baseUrl} from '../../service/cardsListService'

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
import {rest} from 'msw';
import {setupServer} from 'msw/node'

const ResponseProducto = rest.get(baseUrl, (req, res, ctx) => {
    return res(ctx.json([{id:1,nombre:"pruebaApiCall",descripcion:"En el corazón de San Telmo, disfruta de una estadía inspirada en las pasiones de Buenos Aires. Una ciudad asombrosa que combina la grandeza europea con la pasión latina. Puedes tenerlo todo! vive la experiencia en un amplio y confortable loft situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del parque San Martín y del distito de Recoleta. Hermitage Loft está completamente equipado con un area de trabajo para permitir el amplio disfrute de su estadia. Moderno y minimalista, con muchos detalles de comfort. Disfruta de un buffet de desayuno variado de 07:00 am a 10:00 am.",puntaje:5,categoria:{id:1,titulo:"LOFT",descripcion:"Concepto de vivienda que consiste en un gran espacio con pocas divisiones, generalmente muy iluminados y con destacado aspecto fabril.",imagen:"https://mediadigitalbooking.s3.amazonaws.com/categorias/loft.jpg"},ciudad:{id:1,nombre:"Buenos Aires, Ciudad Autónoma",pais:"Argentina"},imagenes:[{id:3,titulo:"Hermitage-Sala",imagen:"https://images.unsplash.com/photo-1602872029796-f4ab2010b10b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"},{id:2,titulo:"Hermitage-Comedor",imagen:"https://images.unsplash.com/photo-1495544515279-434b8d991640?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"},{id:4,titulo:"Hermitage-Salon Social",imagen:"https://images.unsplash.com/photo-1600184669397-d1dcc83c7275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"},{id:4,titulo:"Hermitage-Habitacion",imagen:"https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1460&q=80"},{id:5,titulo:"Hermitage-Restaurante",imagen:"https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"}],caracteristicas:[{id:1,nombre:"Baño",icono:"toilet"},{id:3,nombre:"Wifi",icono:"wifi"},{id:5,nombre:"Apto Mascotas",icono:"dog"},{id:7,nombre:"Pileta",icono:"swimmer"},{id:2,nombre:"Estacionamiento",icono:"parking"},{id:6,nombre:"Televisor",icono:"tv"}]}]))
})

const ResponseCategoria = rest.get("http://localhost:8080/api/categorias/", (req, res, ctx) => {
    return res(ctx.json([{id:1,titulo:"LOFT",descripcion:"Concepto de vivienda que consiste en un gran espacio con pocas divisiones, generalmente muy iluminados y con destacado aspecto fabril.",imagen:"https://mediadigitalbooking.s3.amazonaws.com/categorias/loft.jpg"}]))
})

const handlers = [ResponseProducto, ResponseCategoria]

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('it should have the correct nombre test item', async() => {
    render(<App />);
    const item = await screen.findByText("pruebaApiCall")
    expect(item).toBeVisible();
})