import React from "react";
import "./MenuDrawer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function MenuDrawer(props) {
    return (
        <>
            

                <div className="container-Drawer">
                    <div className="header-drawer">
                        <FontAwesomeIcon onClick={props.e} className="icon-drawer" icon={faTimes} />
                        <h1 className="text-menu">MENÚ</h1>
                    </div>
                    <div className="container-body-drawer">
                        <div className="container-parrafos">
                            <p>Crear cuenta</p>
                            <br /> <hr /> <br />
                            <p>Iniciar sesión</p>
                        </div>
                        <div className="icons-drawer">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>
            
        </>
    )
}