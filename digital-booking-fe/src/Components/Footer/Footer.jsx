import React from "react";
import "./Footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedinIn, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";


function Footer(){
    return(
        <div className="footer">
            <p> © 2021 Digital Booking</p>
            <div className="icons">
            <FontAwesomeIcon className="icon" icon={faFacebook}/>
            <FontAwesomeIcon icon={faLinkedinIn}/>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faInstagram}/>
            </div>
        </div>
    )
}
export default Footer;