import GaleriaI from "react-image-gallery"
import "./Galeria.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt, faShuttleVan } from "@fortawesome/free-solid-svg-icons";
import { Mobile, Default } from "./Responsive";

function Galeria({ item }) {
    return (
        <div className="galeria">
            <div className="image-gallery-icon">
                <FontAwesomeIcon className="icono" icon={faShareAlt} />
                <FontAwesomeIcon className="icono" icon={faHeart} />
                
            </div>
            <Mobile >
                <GaleriaI
                items={item}
                showThumbnails={false}
                autoPlay={true}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                showIndex={true}
                
            />
            </Mobile>

            <Default>
            <GaleriaI
                items={item}
                showThumbnails={true}
                autoPlay={false}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={true}
                showIndex={true}
                
            />

            </Default>
            
            

        </div>
            )
}

export default Galeria;