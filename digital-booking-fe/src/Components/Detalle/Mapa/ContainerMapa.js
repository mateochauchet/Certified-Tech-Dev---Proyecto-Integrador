import './ContainerMapa.css'
import Mapa from './Mapa';

function ContainerMapa({ location, lng, lat }) {
    return (
        <>
            <div className="cont-mapa">
                <h1 className="title-map">Dónde vas a estar?</h1>
                <hr />
                <h3>{location}</h3>
                
                <Mapa lng={lng} lat={lat} />
                
            </div>        
        </>
     );
}

export default ContainerMapa;