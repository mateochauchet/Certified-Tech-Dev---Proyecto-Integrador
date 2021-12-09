import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Template from "./Components/Template/TemplateGeneral.js";
import { useState, useEffect } from "react";
import ContextLoginRegistro from "./Components/Contexts/ContextLoginRegistro.js";
import ContextUser from "./Components/Contexts/ContextUser.js";
import ContenedorBuscador from "./Components/Buscador/ContenedorBuscador.js";
import ContenedorCard from "./Components/Cards/ContenedorCard.js";
import Login from "./Components/Login/Login.js";
import Registro from "./Components/Register/Register.js";
import CardsContainer from "./Components/Cards_list/CardsContainer";
import ReservaExitosa from "./Components/ReservaExitosa/ReservaExitosa";
import CreacionProducto from "./Components/CreacionProducto/CreacionProducto";
import CreacionProductoParalelo from "./Components/CreacionProducto/CreacionProductoParalelo";
import SkeletonCardsProducto from "./Skeleton/SkeletonCardsProducto";
import SkeletonCategorias from "./Skeleton/SkeletonCategorias";
import "./App.css";
import ContainerDetalle from "./Components/Detalle/ContainerDetalle.js";
import {
  getCategorias,
  getProductos,
  getCity,
  getProductosByDate,
  getCaracteristicas,
} from "./service/cardsListService";
import TemplateReserva from "./Components/Reserva/TemplateReserva.js";
import MisReservas from "./Components/MisReservas/MisReservas.js";
import ReservaNoEfectuada from "./Components/ReservaNoEfectuada/ReservaNoEfectuada.js";
import CreacionExitosa from "./Components/CreacionExitosa/CreacionExitosa.js"

export default function App() {
  const [contextLoginRegistro, setContextLoginRegistro] = useState("");
  const [contextUser, setContextUser] = useState("");
  const [productList, setProductList] = useState(null);
  const [cityList, setCityList] = useState([]);
  const [categoryList, setCategoryList] = useState(null);
  const [listaCaracteristicas, setListaCaracteristicas] = useState([]);
  const [reservedList, setReservedList] = useState("");
  const [filtro, setFiltro] = useState("todos");

  useEffect(() => {
    async function getData() {
      const productJson = await getProductos();
      setProductList(productJson);
    }
    getData();
  }, []);

  const categoriaAll = async () => {
    let response = await getProductos();
    setProductList(response);
    console.log(response)
    setFiltro("todos");
  };

  useEffect(() => {
    async function getDataCity() {
      const productJson = await getCity();
      setCityList(productJson);
    }
    getDataCity();
  }, []);

  useEffect(() => {
    async function getDataCategoria() {
      const response = await getCategorias();
      setCategoryList(response);
    }
    getDataCategoria();
  }, []);

  useEffect(() => {
    async function getDataCaracteristicas() {
      const productJson = await getCaracteristicas();
      setListaCaracteristicas(productJson);
    }
    getDataCaracteristicas();
  }, []);

  useEffect(() => {
    {
      console.log(`Encontrado ProductoId: ${reservedList} en reserva.`);
    }
  }, [reservedList]);

  const cambiarCiudad = async (value, dataIn, dataOut) => {
    //console.log((value.replace(/ /g, "")).split(',')[0] )
    if (dataIn != null && dataOut != null) {
      let urlDataIn = dataIn.format("YYYY-MM-DD");
      let urlDataOut = dataOut.format("YYYY-MM-DD");

      let response = await getProductosByDate(urlDataIn, urlDataOut);
      setReservedList(response);
      if (response != null) {
        const idResponse = response[0].id;
        setReservedList(idResponse);
      }
    }
    setFiltro(value);
  };

  const cambiarCategoria = async (categoria) => {
    console.log(categoria.replace(/ /g, ""));
    setFiltro(categoria);
  };

  return (
    <div id="app">
      <ContextLoginRegistro.Provider
        value={{ contextLoginRegistro, setContextLoginRegistro }}
      >
        <ContextUser.Provider value={{ contextUser, setContextUser }}>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/home"
                component={() => (
                  <Template
                    home={true}
                    direccion="/login"
                    nombreBoton="Iniciar sesión"
                    direccion2="/registro"
                    nombreBoton2="Crear cuenta"
                    categoriaAll={categoriaAll}
                  >
                    <ContenedorBuscador
                      list={cityList}
                      cambiarCiudad={cambiarCiudad}
                    />
                    {categoryList ? (
                      <ContenedorCard categorias={categoryList} cambiarCategoria={cambiarCategoria} />) : <SkeletonCategorias />}
                    {productList ? (
                      <CardsContainer list={productList} filtro={filtro} filtro2={reservedList} tituloComponente="Recomendaciones" />) : <SkeletonCardsProducto />}
                  </Template>
                )}
              />

              <Route
                exact
                path="/"
                component={() => (
                  <Template home={true} direccion="/login" nombreBoton="Iniciar sesión" direccion2="/registro" nombreBoton2="Crear cuenta" categoriaAll={categoriaAll}>
                    <ContenedorBuscador list={cityList} cambiarCiudad={cambiarCiudad} />
                    {categoryList ? (
                      <ContenedorCard categorias={categoryList} cambiarCategoria={cambiarCategoria} />) : <SkeletonCategorias />}
                    {productList ? (
                      <CardsContainer list={productList} filtro={filtro} filtro2={reservedList} tituloComponente="Recomendaciones" />) : <SkeletonCardsProducto />}
                  </Template>
                )}
              />

              <Route
                path={["/login/:mensaje", "/login"]}
                component={() => (
                  <Template
                    home={false}
                    direccion="/registro"
                    nombreBoton="Crear cuenta"
                    categoriaAll={categoriaAll}
                  >
                    <Login />
                  </Template>
                )}
              />
              <Route
                exact
                path="/registro"
                component={() => (
                  <Template
                    home={false}
                    direccion="/login"
                    nombreBoton="Iniciar sesión"
                    categoriaAll={categoriaAll}
                  >
                    <Registro />
                  </Template>
                )}
              />

              <Route
                exact
                path="/productos/:id"
                component={() => (
                  <Template
                    home={true}
                    direccion="/login"
                    nombreBoton="Iniciar sesión"
                    direccion2="/registro"
                    nombreBoton2="Crear cuenta"
                    categoriaAll={categoriaAll}
                  >
                    <ContainerDetalle />
                  </Template>
                )}
              />

              <Route
                exact
                path="/productos/:id/reserva"
                component={() => (
                  <Template
                    home={true}
                    direccion="/login"
                    nombreBoton="Iniciar sesión"
                    direccion2="/registro"
                    nombreBoton2="Crear cuenta"
                    categoriaAll={categoriaAll}
                  >
                    <TemplateReserva />
                  </Template>
                )}
              />

              <Route
                exact
                path="/reservaExitosa"
                component={() => (
                  <Template home={true} categoriaAll={categoriaAll}>
                    <ReservaExitosa categoriaAll={categoriaAll}/>
                  </Template>
                )}
              />
              <Route
                exact
                path="/misReservas"
                component={() => (
                  <Template home={true} categoriaAll={categoriaAll}>
                    <MisReservas categoriaAll={categoriaAll}/>
                  </Template>
                )}
              />

              <Route
                exact
                path="/administracion/creaproductos"
                component={() => (
                  <Template
                    home={true}
                    direccion="/login"
                    nombreBoton="Iniciar sesión"
                    direccion2="/registro"
                    nombreBoton2="Crear cuenta"
                  >
                    <CreacionProducto
                      categorias={categoryList}
                      listaCiudades={cityList}
                      caracteristicas={listaCaracteristicas}
                    />
                  </Template>
                )}
              />

              <Route
                exact
                path="/creacionExitosa"
                component={() => (
                  <Template home={true} categoriaAll={categoriaAll}>
                    <CreacionExitosa categoriaAll={categoriaAll}/>
                  </Template>
                )}
              />
            </Switch>
          </BrowserRouter>
        </ContextUser.Provider>
      </ContextLoginRegistro.Provider>
    </div>
  );
}
