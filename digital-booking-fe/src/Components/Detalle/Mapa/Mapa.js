import { useState, useEffect, useRef } from 'react'
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';


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
    



    // new mapboxgl.Marker.setLngLat([lng, lat]).addTo(map);



    return (
        // <ReactMapGL
        //     mapStyle="mapbox://styles/ametti/ckvmmbu1t0nni14nypi52qtzg"
        //     mapboxApiAccessToken="pk.eyJ1IjoiYW1ldHRpIiwiYSI6ImNrdm1qNjM1MDNnOHYybnFpMTdrY2NtY3oifQ.423dcd4V4Rr5EoZKUwnjvQ"
        //     {...map}
        // >
        // </ReactMapGL>
        <div>
            <div ref={mapContainer} className="map-container" />
            
        </div>
    )
}

export default Mapa

