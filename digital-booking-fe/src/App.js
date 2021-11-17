import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Template from "./Components/Template/TemplateGeneral.js";
import { useState, useEffect } from "react";
import ContextLoginRegistro from "./Components/Contexts/ContextLoginRegistro.js";
import ContenedorBuscador from "./Components/buscador/ContenedorBuscador.js";
import ContenedorCard from "./Components/cards/ContenedorCard.js";
import Login from "./Components/Login/Login.js";
import Registro from "./Components/Register/Register.js";
import CardsContainer from "./Components/Cards_list/CardsContainer"
import './App.css'
import ContainerDetalle from "./Components/Detalle/ContainerDetalle.js";
import { getProductos, getProductosByCategoria, getProductosByCiudad} from './service/cardsListService';

 export default function App() {

  const [contextLoginRegistro, setContextLoginRegistro] = useState("");
  const [productList,setProductList] = useState([]);
  const [filtro,setFiltro] = useState("todos");

  useEffect(() => {
    async function getData (){
      //  const productJson = await getProductos()
      //  setProductList(productJson)
    } getData() 
  } ,[]);
    
  const cambiarCiudad = async (value) => {
    
    console.log(value.replace(/ /g,""))
    setFiltro(value)
    
  }

  const cambiarCategoria = async (categoria) => {
    
    console.log(categoria.replace(/ /g,""))
    setFiltro(categoria)
  }

  

  return (
    <div id="app">
       <ContextLoginRegistro.Provider value={{contextLoginRegistro, setContextLoginRegistro }}>
        <BrowserRouter>
           <Switch>
             <Route
              exact
              path="/home"
              component={() => (
                <Template home={true} direccion="/login" nombreBoton="Iniciar sesión" direccion2="/registro" nombreBoton2="Crear cuenta">
                   <ContenedorBuscador cambiarCiudad={cambiarCiudad}  />
                   <ContenedorCard cambiarCategoria={cambiarCategoria} />
                   <CardsContainer productList={productList} filtro={filtro} />
                </Template>
              )}
            ></Route>
              <Route
              exact
              path="/login"
              component={() => (
                <Template home={false} direccion="/registro" nombreBoton="Crear cuenta">
                <Login/>
                </Template>
              )}
            ></Route>
              <Route
              exact
              path="/registro"
              component={() => (
                <Template home={false} direccion="/login" nombreBoton="Iniciar sesión">
                   <Registro/>
                </Template>
              )}
            ></Route>

            <Route
              exact
              path="/productos/:idLink"
              component={() => (
                <Template home={true} direccion="/login" nombreBoton="Iniciar sesión" direccion2="/registro" nombreBoton2="Crear cuenta">
                   <ContainerDetalle />
                </Template>
              )}
            ></Route>


          </Switch>
        </BrowserRouter>
      </ContextLoginRegistro.Provider>
    </div>
  )}
