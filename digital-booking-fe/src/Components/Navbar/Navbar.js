import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default function Navbar(){
    return(
        <div className="navBar">
            <FontAwesomeIcon  className="icon" icon={faBars}/>
        </div>
    )
}