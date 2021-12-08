import GaleriaI from "react-image-gallery";
import "./Galeria.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Mobile, Default } from "./Responsive";
import { useState, useEffect } from "react";



function Galeria({ item }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '50px';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [show]);

    const handleClick = () => {
        setShow(!show);
    };
   
    let gallery;
    if (show) {

        gallery = (
            <Default>
                <div className="galleryOpen">
                    <div className="divIcon">
                        <FontAwesomeIcon onClick={handleClick} className="iconsalir"
                            icon={faTimes} /> </div>
                    <GaleriaI 
                        items={item}
                        showThumbnails={true}
                        autoPlay={false}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav={true}
                        showIndex={true}
                        useTranslate3D={false}
                        disableSwipe={true}
                    /></div>
            </Default>
        );



    }

    return (
        <>
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

            </div>
            <Default>
                {gallery}
                <div className="verGrid">
                    <div className="iconos-grid">
                        <FontAwesomeIcon className="iconogrid" icon={faShareAlt} />
                        <FontAwesomeIcon className="iconogrid" icon={faHeart} />
                    </div>
                    <div className="grid-container">
                        {item.map((imagen, i) =>
                            <div key={i} className={`imagen` + (i + 1)}>
                                <img key={i} src={imagen.original} alt=""></img>
                            </div>)}
                        <div className="verMas">
                            <p onClick={handleClick}>Ver más</p>
                        </div>
                    </div>

                </div>
            </Default>




        </>
    )
}

export default Galeria;