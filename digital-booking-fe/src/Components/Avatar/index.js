import React from "react";
import "./Avatar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Avatar() {
  return (
      <>
    
    <div className="container-avatar">
    <FontAwesomeIcon className="icon" icon={faTimes} />
      <div className="container-avatar-text">
        <div className="avatar">
          <h4 className="text-avatar">BR</h4>
        </div>
        <div className="text-name">
          <h4 className="saludo">
            Hola,
            <span className="name">
              <br/>
              Bruno Rodríguez
            </span>
          </h4>
        </div>
      </div>
    </div>
    </>
  );
}