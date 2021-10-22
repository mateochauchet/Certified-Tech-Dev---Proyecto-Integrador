import React from "react";
import "./Header.css";
import Logo from "./logo.png";
import Navbar from "../Navbar/Navbar";

export default function Header() {
    return (
        <div className="header1">
            <div className="logo-eslogan">
                <img className="header_logo" src={Logo} alt="db-logo" />
                <div className="eslogan">
                    <p>Sentite como en tu hogar</p>
                </div>
            </div>
            
            <Navbar />
            
        </div>
    )
}