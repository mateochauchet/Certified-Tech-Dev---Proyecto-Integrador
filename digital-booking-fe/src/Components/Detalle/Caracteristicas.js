import './Caracteristicas.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWifi, faDog, faTv, faParking, faAirFreshener, faToilet, faUtensils, faSwimmer, faLock } from "@fortawesome/free-solid-svg-icons";
library.add(faWifi, faDog, faTv, faParking, faAirFreshener, faToilet, faSwimmer, faUtensils, faLock )
function Caracteristicas({list}) {
    

    return ( 
        <>
        <div className="containerCaracteristicas">
            <h1>Qué ofrece este lugar?</h1>
            <hr />
            <div className="items">
                <ul type="none">
                    {list.map((c, i) => <li key={i} >
                        <div className="caractIcons"><FontAwesomeIcon icon={c.icono} /></div>
                        {c.nombre}</li>) }
                        
           
                </ul>    
            </div>
        </div>
        </>
     );
}

export default Caracteristicas;