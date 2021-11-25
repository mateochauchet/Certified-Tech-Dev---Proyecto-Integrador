import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Template from "./Components/Template/TemplateGeneral.js";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ContextLoginRegistro from "./Components/Contexts/ContextLoginRegistro.js";
import ContenedorBuscador from "./Components/buscador/ContenedorBuscador.js";
import ContenedorCard from "./Components/cards/ContenedorCard.js";
import Login from "./Components/Login/Login.js";
import data from "./Components/Cards_list/dataj.json"
import Registro from "./Components/Register/Register.js";
import CardsContainer from "./Components/Cards_list/CardsContainer"
import ReservaExitosa from "./Components/ReservaExitosa/ReservaExitosa";
import './App.css'

import ContainerDetalle from "./Components/Detalle/ContainerDetalle.js";
import { getCategorias, getProductos, getCity} from './service/cardsListService';
import TemplateReserva from "./Components/Reserva/TemplateReserva.js";

export default function App() {

  const [contextLoginRegistro, setContextLoginRegistro] = useState("");
  const [productList, setProductList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
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
  


  const cambiarCiudad = async (value, dataIn, dataOut) => {
    
    console.log((value.replace(/ /g, "")).split(',')[0] )
    setFiltro(value)
    // (dataIn !=null) && (dataOut !=null) ?
    // console.log((dataIn).format('DD/MM/YYYY'), (dataOut).format('DD/MM/YYYY')):null
  }
    
  

  const cambiarCategoria = async (categoria) => {
    console.log(categoria.replace(/ /g, ""))
    setFiltro(categoria)
  }


  return (
    <div id="app">
      <ContextLoginRegistro.Provider value={{ contextLoginRegistro, setContextLoginRegistro }}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/home"
              component={() => (
                <Template home={true} direccion="/login" nombreBoton="Iniciar sesión" direccion2="/registro" nombreBoton2="Crear cuenta">
                  <ContenedorBuscador list={cityList} cambiarCiudad={cambiarCiudad} />
                  <ContenedorCard categorias={categoryList} cambiarCategoria={cambiarCategoria} />
                  <CardsContainer list={productList} filtro={filtro} />
                </Template>
              )}
            ></Route>
            <Route
              exact
              path="/login"
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
                <Template home={false} direccion="/login" nombreBoton="Iniciar sesión">
                  <Registro />
                </Template>
              )}
            ></Route>

            <Route
              exact
              path="/productos/:id"
              component={() => (
                <Template home={true} direccion="/login" nombreBoton="Iniciar sesión" direccion2="/registro" nombreBoton2="Crear cuenta">
                  <ContainerDetalle />
                </Template>
              )}
            ></Route>

            <Route
              exact
              path="/productos/:id/reserva"
              component={() => (
                <Template home={true} direccion="/login" nombreBoton="Iniciar sesión" direccion2="/registro" nombreBoton2="Crear cuenta">
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
      </ContextLoginRegistro.Provider>
    </div>
  )
}
