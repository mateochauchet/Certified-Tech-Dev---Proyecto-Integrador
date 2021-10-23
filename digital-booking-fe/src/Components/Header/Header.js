import React from "react";
import "./Header.css";
import Logo from "./logo.png";
import Navbar from "../Navbar/Navbar";
import Botones from "../Botones";
import MenuDrawer from "../MenuDrawer";
import { useState } from "react";

export default function Header() {

    const [show, setShow] = useState(false)
    const toggeModal = () => {
        setShow(!show)
    }

    let menu;
    if(show){
        menu = <MenuDrawer e={toggeModal} />
    }

    return (
        <>
        <div className="header1">
            <div className="logo-eslogan">
                <img className="header_logo" src={Logo} alt="db-logo" />
                <div className="eslogan">
                    <p>Sentite como en tu hogar</p>
                </div>
            </div>
           <div className="components">
                <Navbar e={toggeModal} />
            </div> 
            <div className="container-botones">
                <Botones />
            </div>
        </div>
        {menu}
        </>
    )
}