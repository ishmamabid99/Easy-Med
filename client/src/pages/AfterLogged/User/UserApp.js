import { Box, makeStyles, Modal, Typography, Grid, } from '@material-ui/core';
import React, { useState } from 'react'
import { getMarketData } from '../../../methods/postData';
import LoggedAppBar from '../components/LoggedAppBar';
import DrawerAppUser from './DrawerAppUser'
import Profile from './Profile';
import UserMarket from './UserMarket';
const useStyles = makeStyles(theme => ({
    boxStyle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        backgroundColor: "#FFF",
        height: "14rem",
        width: "22rem",
        minWidth: '240px',
        minHeight: "180px",
        transform: 'translate(-50%, -50%)',
        outline: "none",
        borderRadius: "1rem"
    },
    modalTypo: {
        fontFamily: "Roboto",
        fontWeight: "600",
        opacity: "0.8",
        color: "#2C2E43",
        fontSize: "20px",
        padding: "2rem",
    },
    buttonYes: {
        backgroundColor: "#2C2E43",
        fontFamily: "Roboto",
        fontSize: "1rem",
        color: "#FFF",
        fontWeight: "400",
        width: "6.5rem",
        "&:hover": {
            backgroundColor: "#2C2E43",
        }
    },
    buttonNO: {
        backgroundColor: "#9A9483",
        fontFamily: "Roboto",
        fontSize: "1rem",
        color: "#FFF",
        fontWeight: "400",
        width: "6.5rem",
        "&:hover": {
            backgroundColor: "#9A9483",
        }
    },
    btnTypo: {
        fontFamily: "Roboto",
        fontSize: "1rem",
        fontWeight: "600",
        color: "#FFF",
    },
    modalGrid: {
        marginTop: "1.5rem"
    },
}))
export default function UserApp(props) {
    const [page, setPage] = useState('market');
    const classes = useStyles();
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
    const [data, setData] = useState(undefined);
    async function setter() {
        const geo = await getLocation();
        Promise.all([geo]).then(() => {
            setData({ ...props.state, geoLocation: geo });
        })
    }
    React.useEffect(() => {
        setter();
    }, [])
    return (
        <div>
            <LoggedAppBar
                showSearch={true}
                state={props.state}
            />
            <DrawerAppUser
                setPage={setPage}
                state={props.state}
                show={false}
            />
            {page === 'market' && data !== undefined ?

                <UserMarket state={data} /> : null
            }
            {page === 'profile' ?
                <Profile state={data} /> : null
            }
        </div>
    )
}
