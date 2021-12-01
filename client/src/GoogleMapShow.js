import { makeStyles } from '@material-ui/core'
import React, { useCallback, useRef, useState } from 'react'
import MapGL, { GeolocateControl, Marker } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import "./CSS/MapBox.css"
import "./CSS/Map.css";

const mapToken = process.env.REACT_APP_MAP_API
const useStyles = makeStyles(theme => ({
  root: {
    flex: "50%",
    display: "block",
    height: theme.spacing(50),
    marginTop: "4rem",
    marginBottom: "-4rem"
  },
  refDiv: {
    height: 50,
    marginBottom: "5%",
    width: "85%"
  }
}))
export default function GoogleMapShow(props) {
  const classes = useStyles();
  const mapref = useRef();
  const geoRef = useRef();
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })
  const handleViewPortChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const handleGeocoderViewPortChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewPortChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewPortChange]
  );
  const geolocateStyle = {
    float: 'left',
    marginLeft: '5%',
    padding: '10%'
  };
  return (

    <div align='center' className={classes.root}>
      <div className={classes.refDiv} ref={geoRef} />
      <MapGL
        onClick={(e) => {
          props.setData({
            ...props.data, geoLocation: {
              lng: e.lngLat[0],
              lat: e.lngLat[1]
            }
          })
        }}
        onDblClick={(e) => {
          e.preventDefault();
          props.setData({ ...props.data, geoLocation: undefined })
        }}
        ref={mapref}
        {...viewport}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        width='70%'
        height='80%'
        onViewportChange={handleViewPortChange}
        mapboxApiAccessToken={mapToken}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showAccuracyCircle={false}
          showUserLocation={true}
          capturePointerMove={true}
        />
        <Geocoder
          containerRef={geoRef}
          mapRef={mapref}
          onViewportChange={handleGeocoderViewPortChange}
          mapboxApiAccessToken={mapToken}
          placeholder='Put a marker on you organization'
        />
        {props.data !== undefined && props.data.geoLocation !== undefined ?
          <Marker
            longitude={props.data.geoLocation.lng}
            latitude={props.data.geoLocation.lat}
            offsetTop={-48}
            offsetLeft={-24}
          >
            <img src="https://img.icons8.com/color/48/000000/marker.png" alt='' />
          </Marker>
          :
          <></>
        }
      </MapGL>
    </div>
  )
}
