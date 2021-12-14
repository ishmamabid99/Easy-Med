import React, { useCallback, useState } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import "../../../CSS/MapBox.css"
import "../../../CSS/Map.css";
const MAPBOX_TOKEN = process.env.REACT_APP_MAP_API
export default function MapComponent(props) {

    const [viewport, setViewport] = useState({
        latitude: props.lat,
        longitude: props.lng,
        zoom: 16
    });

    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []);
    return (
        <div>
            <MapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                width='40rem'
                height='28rem'
                onViewportChange={handleViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                <Marker
                    offsetTop={-48}
                    offsetLeft={-24}
                    latitude={props.lat}
                    longitude={props.lng}
                >
                    <img src="https://img.icons8.com/color/48/000000/marker.png" alt='' />
                </Marker>
            </MapGL>
        </div>
    )
}
