import React from "react";
import "./Header.css";
import Logo from "./logo.png";
import Navbar from "../Navbar/Navbar.js";
import MenuDrawer from "../MenuDrawer/MenuDrawer.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };
  let menu;
  if (show) {
    menu = (
      <MenuDrawer
        e={toggleModal}
        home={props.home}
        direccion={props.direccion}
        nombreBoton={props.nombreBoton}
        direccion2={props.direccion2}
        nombreBoton2={props.nombreBoton2}
      />
    );
  }
  return (
    <>
      <div className="header1">
        <div className="logo-eslogan">
          <Link className="link-img" to="/home" onClick={props.categoriaAll }>
            <img className="header_logo" src={Logo} alt="db-logo" />{" "}
          </Link>
          <div className="eslogan">
            <Link className="link-eslogan" to="/home">
              {" "}
              <p>Sentite como en tu hogar</p>
            </Link>
          </div>
        </div>
        <div className="components">
          <Navbar e={toggleModal} />
        </div>
        {props.children}
      </div>
      {menu}
    </>
  );
}
