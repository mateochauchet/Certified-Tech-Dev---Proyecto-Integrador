import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Template from "./Components/Template/TemplateGeneral.js";
import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import ContextLoginRegistro from "./Components/Contexts/ContextLoginRegistro.js";
import ContextUser from "./Components/Contexts/ContextUser.js";
import ContenedorBuscador from "./Components/Buscador/ContenedorBuscador.js";
import ContenedorCard from "./Components/Cards/ContenedorCard.js";
import Login from "./Components/Login/Login.js";
import data from "./Components/Cards_list/dataj.json"
import Registro from "./Components/Register/Register.js";
import CardsContainer from "./Components/Cards_list/CardsContainer"
import ReservaExitosa from "./Components/ReservaExitosa/ReservaExitosa";
import './App.css'

import ContainerDetalle from "./Components/Detalle/ContainerDetalle.js";
import { getCategorias, getProductos, getCity, getProductosByDate } from './service/cardsListService';
import TemplateReserva from "./Components/Reserva/TemplateReserva.js";

export default function App() {

  const [contextLoginRegistro, setContextLoginRegistro] = useState("");
  const [contextUser, setContextUser] = useState("");
  const [productList, setProductList] = useState([])
  const [cityList, setCityList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [reservedList, setReservedList] = useState("");
  const [filtro, setFiltro] = useState("todos");


 
  
  
    
  



  useEffect(() => {
    async function getData() {
      const productJson = await getProductos()
      setProductList(productJson)
    } getData()
  }, []);

  useEffect(() => {
    async function getDataCity() {
      const productJson = await getCity()
      setCityList(productJson)
    }
    getDataCity()
  }, []);

  useEffect(() => {
    async function getDataCategoria() {
      const response = await getCategorias()
      setCategoryList(response)
    } getDataCategoria()
  }, []);

  // useEffect(() => {
  //   async function getReservedProducts(dataIn, dataOut) {
  //     if(dataIn != null && dataOut != null){
  //       const response = await getProductosByDate(dataIn, dataOut)
  //     setReservedList(response)
  //     }
  //   } 
  //   getReservedProducts() 
  //   console.log(`productos reservados: ${reservedList}`)
  // }

  // , []);

  useEffect(() => {






    {console.log(`Encontrado ProductoId: ${reservedList} en reserva.`)}  
    } , [reservedList]);
  
    
  const cambiarCiudad = async (value, dataIn, dataOut) => {
    //console.log((value.replace(/ /g, "")).split(',')[0] )
      if(dataIn != null && dataOut != null){
        let urlDataIn= dataIn.format('YYYY-MM-DD')
        let urlDataOut= dataOut.format('YYYY-MM-DD')

        let response = await getProductosByDate(urlDataIn, urlDataOut)
        setReservedList(response)
        if (response !=null ){
          const idResponse = response[0].id
          setReservedList(idResponse)
        }
      }
      setFiltro(value)
  }

  

  const cambiarCategoria = async (categoria) => {
    console.log(categoria.replace(/ /g, ""))
    setFiltro(categoria)
  }

  
  return (
    <div id="app">
      
      <ContextLoginRegistro.Provider value={{ contextLoginRegistro, setContextLoginRegistro }}>
      <ContextUser.Provider value={{ contextUser, setContextUser }}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/home"
              component={() => (
                <Template home={true} direccion="/login/:mensaje" nombreBoton="Iniciar sesión" direccion2="/registro" nombreBoton2="Crear cuenta">
                  <ContenedorBuscador list={cityList} cambiarCiudad={cambiarCiudad} />
                  <ContenedorCard categorias={categoryList} cambiarCategoria={cambiarCategoria} />
                  <CardsContainer list={productList} filtro={filtro} filtro2={reservedList}/>
                </Template>
              )}
            ></Route>
            <Route
              exact
              path="/login/:mensaje"
              component={() => (
                <Template home={false} direccion="/registro" nombreBoton="Crear cuenta">
                  <Login />
                </Template>
              )}
            ></Route>
            <Route
              exact
              path="/registro"
              component={() => (
                <Template home={false} direccion="/login/:mensaje" nombreBoton="Iniciar sesión">
                  <Registro />
                </Template>
              )}
            ></Route>

            <Route
              exact
              path="/productos/:id"
              component={() => (
                <Template home={true} direccion="/login/:mensaje" nombreBoton="Iniciar sesión" direccion2="/registro" nombreBoton2="Crear cuenta">
                  <ContainerDetalle />
                </Template>
              )}
            ></Route>

            <Route
              exact
              path="/productos/:id/reserva"
              component={() => (
                <Template home={true} direccion="/login/:mensaje" nombreBoton="Iniciar sesión" direccion2="/registro" nombreBoton2="Crear cuenta">
                  <TemplateReserva />
                </Template>
              )}
            ></Route>

            <Route
              exact
              path="/ReservaExitosa"
              component={() => (
                <Template home={false}  >
                  <ReservaExitosa />
                </Template>
              )}
            ></Route>

          </Switch>
        </BrowserRouter>
        </ContextUser.Provider>
      </ContextLoginRegistro.Provider>
    </div>
  )
}
