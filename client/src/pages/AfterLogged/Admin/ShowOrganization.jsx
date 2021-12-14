import { Avatar, Box, CircularProgress, Grid, makeStyles, Modal, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { deleteOrg, getAllOrg } from '../../../methods/getData';
import DeleteIcon from '@material-ui/icons/Delete'
import Explore from '@material-ui/icons/Explore'
import MapComponent from './MapComponent';
const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 250,
        marginBottom: 100
    },
    progressBar: {

        width: "100px",
        height: "100px",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",

    },
    paper: {
        marginBottom: theme.spacing(2.5),
        maxWidth: theme.spacing(80),
        minHeight: theme.spacing(25),
        "&:hover": {
            transform: "scale(1.015)"
        }
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
    delete: {
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.5)"
        },
        float: "right",
        color: "red",
        fontSize: "2rem"
    },
    explore: {
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.5)"
        },
        float: "right",
        color: "primary",
        fontSize: "2rem",
        marginRight: "1rem"
    },
    boxStyle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        backgroundColor: "#FFF",
        height: "28rem",
        width: "40rem",
        minWidth: '240px',
        minHeight: "180px",
        transform: 'translate(-50%, -50%)',
        outline: "none",
        borderRadius: "1rem"
    },

}))

export default function ShowOrganization() {
    const classes = useStyles();
    const [data, setData] = useState(undefined);
    const [modal, setModal] = useState(false)
    const [itemData, setItemData] = useState(undefined)
    const [state, setState] = useState(false)
    async function getOrganizationData() {
        const res = await getAllOrg();
        console.log(res)
        setData(res)
    }
    useEffect(() => {
        getOrganizationData();
    }, []);
    async function handleDelete(item) {
        await deleteOrg(item._id).then(() => {
            setState(!state)
        })
    }
    useEffect(() => {
        getOrganizationData();
    }, [state]);
    return (
        <div>
            {modal ?
                <Modal
                    open={modal}
                    onClose={() => {
                        setModal(false)
                    }}
                >
                    <Box className={classes.boxStyle}>
                        <MapComponent lat={itemData.geoLocation.lat} lng={itemData.geoLocation.lng} />
                    </Box>

                </Modal>
                : null}
            {data ?
                <div align='center' className={classes.root}>
                    {data.map(item =>
                        <Paper elevation={3} className={classes.paper}>

                            <div align='left' style={{ padding: "1.5rem" }}>
                                <div>
                                    <DeleteIcon
                                        onClick={() => {
                                            handleDelete(item)
                                        }}
                                        className={classes.delete} />
                                    <Explore onClick={() => {
                                        setModal(true)
                                        setItemData(item)
                                    }} className={classes.explore} />
                                </div>

                                <Grid container >
                                    <Avatar src={`/uploads/${item.img}`} alt='' className={classes.avatar} />
                                    <div style={{ marginLeft: "2rem" }}>
                                        <Grid container className={classes.grid}>
                                            <Typography className={classes.title}>Name: <span>&nbsp;</span></Typography>
                                            <Typography className={classes.typo}>{item.name}</Typography>
                                        </Grid>
                                        <Grid container className={classes.grid}>
                                            <Typography className={classes.title}>Mobile: <span>&nbsp;</span></Typography>
                                            <Typography className={classes.typo}> {item.phone}</Typography>
                                        </Grid>
                                        <Grid container className={classes.grid}>
                                            <Typography className={classes.title}>Role: <span>&nbsp;</span> </Typography>
                                            <Typography className={classes.typo}>{item.role} Organization</Typography>
                                        </Grid>
                                        <Grid container className={classes.grid}>
                                            <Typography className={classes.title}>Email: <span>&nbsp;</span></Typography>
                                            <Typography className={classes.typo}>{item.email}</Typography>
                                        </Grid>
                                    </div>
                                </Grid>
                            </div>
                        </Paper>
                    )}
                </div>
                :
                <CircularProgress className={classes.progressBar} color='inherit' />
            }
        </div>
    )
}
