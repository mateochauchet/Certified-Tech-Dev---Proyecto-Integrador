import React from "react";
import "./Footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedinIn, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";


function Footer(){
    return(
        <div className="footer">
            <p className="digital_footer"> © 2021 Digital Booking</p>
            <div className="icons">
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faLinkedinIn}/>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faInstagram}/>
            </div>
        </div>
    )
}
export default Footer;