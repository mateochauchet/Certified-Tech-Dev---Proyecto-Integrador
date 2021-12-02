import { useState, useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl';


import './Mapa.css'
function Mapa({ lng, lat}) {
    mapboxgl.accessToken = "pk.eyJ1IjoiYW1ldHRpIiwiYSI6ImNrdm1qNjM1MDNnOHYybnFpMTdrY2NtY3oifQ.423dcd4V4Rr5EoZKUwnjvQ"
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(16);


    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/ametti/ckvmmbu1t0nni14nypi52qtzg',
            center: [lng, lat],
            zoom: zoom
        });

    });
    

    return (

        <div>
            <div ref={mapContainer} className="map-container" />
            
        </div>
    )
}

export default Mapa

