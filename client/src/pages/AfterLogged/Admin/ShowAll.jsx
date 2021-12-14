import { makeStyles, Modal, Paper, Grid, Typography, Avatar } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import "../../../CSS/MapBox.css"
import "../../../CSS/Map.css";
import { getAllOrg } from '../../../methods/getData';
import logo from './logo.png'
const MAPBOX_TOKEN = process.env.REACT_APP_MAP_API
const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 241,
        marginTop: -28
    },
    boxStyle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        backgroundColor: "#FFF",
        width: theme.spacing(80),
        height: theme.spacing(30),
        transform: 'translate(-50%, -50%)',
        outline: "none",
        borderRadius: "1rem"
    },
    avatar: {
        height: theme.spacing(20),
        width: theme.spacing(25),
        borderRadius: 0
    },
    grid: {
        marginBottom: "1.25rem"
    },
    typo: {
        fontFamily: "Abhaya Libre",
        fontSize: "1.25rem",
        color: 'grey'
    },
    title: {
        fontFamily: "Abhaya Libre",
        fontSize: "1.25rem",
    },

}))

export default function ShowAll() {
    const classes = useStyles();
    const [data, setData] = useState(undefined)
    const [viewport, setViewport] = useState(undefined);
    const [marker, setMarker] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState(undefined)
    async function getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                function successCallback(p) {
                    return ({
                        lat: p.coords.latitude,
                        lng: p.coords.longitude
                    })
                }
                resolve(successCallback(position));
            }, reject);
        });
    }
    async function setter() {
        const geo = await getLocation();
        Promise.all([geo]).then(() => {
            setData({
                lat: geo.lat,
                lng: geo.lng
            });
            setViewport({
                latitude: geo.lat,
                longitude: geo.lng,
                zoom: 12
            })
        })
    }
    async function getOrganizationData() {

        const res = await getAllOrg();
        setMarker(res)
    }

    React.useEffect(() => {
        setter();
        getOrganizationData();
    }, [])

    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []);
    const handleClick = (item) => {
        setModalData(item);
        setModal(true)
    }
    console.log(data)
    return (

        <>
            {modal ?
                <Modal
                    open={modal}
                    onClose={() => {
                        setModal(false)
                    }}
                >
                    <Paper elevation={3} className={classes.boxStyle}>

                        <div align='left' style={{ padding: "1.5rem" }}>
                            <Grid container >
                                <Avatar src={`/uploads/${modalData.img}`} alt='' className={classes.avatar} />
                                <div style={{ marginLeft: "2rem" }}>
                                    <Grid container className={classes.grid}>
                                        <Typography className={classes.title}>Name: <span>&nbsp;</span></Typography>
                                        <Typography className={classes.typo}>{modalData.name}</Typography>
                                    </Grid>
                                    <Grid container className={classes.grid}>
                                        <Typography className={classes.title}>Mobile: <span>&nbsp;</span></Typography>
                                        <Typography className={classes.typo}> {modalData.phone}</Typography>
                                    </Grid>
                                    <Grid container className={classes.grid}>
                                        <Typography className={classes.title}>Role: <span>&nbsp;</span> </Typography>
                                        <Typography className={classes.typo}>{modalData.role} Organization</Typography>
                                    </Grid>
                                    <Grid container className={classes.grid}>
                                        <Typography className={classes.title}>Email: <span>&nbsp;</span></Typography>
                                        <Typography className={classes.typo}>{modalData.email}</Typography>
                                    </Grid>
                                </div>
                            </Grid>
                        </div>
                    </Paper>

                </Modal>
                : null}
            < div className={classes.root} >
                <MapGL
                    {...viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    width='auto'
                    height='98vh'
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                >
                    {data ?
                        <Marker
                            offsetTop={-48}
                            offsetLeft={-24}
                            latitude={data.lat}
                            longitude={data.lng}
                        >
                            <img src="https://img.icons8.com/color/48/000000/marker.png" alt='' />
                        </Marker>
                        :
                        null
                    }
                    {marker ?
                        <>
                            {marker.map(item =>
                                <Marker
                                    onClick={() => {
                                        handleClick(item)
                                    }}
                                    offsetTop={-48}
                                    offsetLeft={-24}
                                    latitude={item.geoLocation.lat}
                                    longitude={item.geoLocation.lng}
                                >   {console.log(item)}
                                    <img style={{
                                        height: "2.7rem",
                                        width: "2rem"
                                    }} src={logo} alt='' />
                                </Marker>
                            )}
                        </>
                        : null
                    }
                </MapGL>
            </div >
        </>
    )
}
