import { useState, useEffect, useRef } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import mapboxgl from 'mapbox-gl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faWifi } from "@fortawesome/free-solid-svg-icons";

import './Mapa.css'
function Mapa({ lng, lat}) {
    mapboxgl.accessToken = "pk.eyJ1IjoiYW1ldHRpIiwiYSI6ImNrdm1qNjM1MDNnOHYybnFpMTdrY2NtY3oifQ.423dcd4V4Rr5EoZKUwnjvQ"
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(16);

   
    // map.on('load', () => {
    //     /* Add the data to your map as a layer */
    //     map.addLayer({
    //       id: 'locations',
    //       type: 'circle',
    //       /* Add a GeoJSON source containing place coordinates and information. */
    //       source: {
    //         type: 'geojson',
    //         data: houses
    //       }
    //     });
    //   });
    // /* Assign a unique ID to each store */
    // houses.features.forEach(function (house, i) {
    //     house.properties.id = i;
    // });

    

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

