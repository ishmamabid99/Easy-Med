import { Avatar, Box, Grid, makeStyles, Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import axios from '../../../methods/axios'
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#FFF",
        minWidth: 300,
        maxWidth: 600,
        marginLeft: 220,
        marginRight: "1rem",
        marginTop: "2rem",
        marginBottom: '4rem'
    },
    rootPaper: {
        backgroundColor: "#FFF",
        minWidth: 300,
        maxWidth: 600,
        minHeight: 50,
        marginLeft: '1rem',
        marginRight: "1rem",
        marginTop: "1.5rem"
    },
    rootMbl: {
        backgroundColor: "#FFF",
        minWidth: 300,
        maxWidth: 600,
        marginTop: "1.5rem"
    },
    btn: {
        marginTop: "1.5rem",
        height: "3.5rem",
        width: "8rem",
        borderRadius: "0.5rem"
    },
    typo: {
        marginTop: "20rem",
        fontFamily: "Roboto condensed",
        fontSize: "2.5rem",
        fontWeight: "900",
        opacity: "0.8",
        color: "grey"
    },
    div: {
        marginTop: '10rem',
        marginBottom: "10rem"
    },
    title: {
        fontFamily: "Abhaya",
        fontSize: "1.25rem",
        marginLeft: "1rem",
        color: "#2C394B"
    },
    helper: {
        fontFamily: "Abhaya",
        fontSize: "1.25rem",
        marginLeft: "1rem",
        color: "grey",

    },
    img: {
        margin: "1rem",
        borderRadius: '0',
        height: "10rem",
        width: "40%"
    },
    imgMbl: {
        margin: "1rem",
        borderRadius: '0',
        height: "10rem",
        width: "80%"
    }
}))
export default function Profile(props) {
    const [data, setData] = useState(undefined);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    useEffect(() => {
        const token = Cookies.get('access');
        axios.get(`/myorders/${props.state.name}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <>
            {data ?
                <div>
                    {!isMatch ?
                        <>
                            {data.map(item =>
                                <div align='center'>
                                    <Paper className={classes.root} elevation={3}>
                                        <Grid justifyContent='flex-start' container>
                                            <Avatar className={classes.img} src={`/uploads/${item.img}`}></Avatar>
                                            <div style={{ margin: "1rem" }} align='center'>
                                                <Grid container >
                                                    <Typography className={classes.title}>Product:</Typography>
                                                    <Typography className={classes.helper}>{item.name}</Typography>
                                                </Grid>
                                                <Grid container >
                                                    <Typography className={classes.title}>Quantity:</Typography>
                                                    <Typography className={classes.helper}>{item.quantity}</Typography>
                                                </Grid>
                                                <Box align='center'>
                                                    <Grid align='center' container >
                                                        <Typography className={classes.title}>Price:</Typography>
                                                        <Typography className={classes.helper}>{item.price}</Typography>
                                                    </Grid>
                                                </Box>
                                            </div>
                                        </Grid>
                                    </Paper>
                                </div>
                            )}
                        </>
                        :
                        <>
                            {
                                data.map(item =>
                                    <div align='center'>
                                        <Paper className={classes.rootMbl} elevation={3}>
                                            <Grid justifyContent='flex-start' container>
                                                <Avatar className={classes.imgMbl} src={`/uploads/${item.img}`}></Avatar>
                                                <div style={{ margin: "1rem" }} align='center'>
                                                    <Grid container >
                                                        <Typography className={classes.title}>Product:</Typography>
                                                        <Typography className={classes.helper}>{item.name}</Typography>
                                                    </Grid>
                                                    <Grid container >
                                                        <Typography className={classes.title}>Quantity:</Typography>
                                                        <Typography className={classes.helper}>{item.quantity}</Typography>
                                                    </Grid>
                                                    <Box align='center'>
                                                        <Grid align='center' container >
                                                            <Typography className={classes.title}>Price:</Typography>
                                                            <Typography className={classes.helper}>{item.price}</Typography>
                                                        </Grid>
                                                    </Box>
                                                </div>
                                            </Grid>
                                        </Paper>
                                    </div>
                                )
                            }
                        </>
                    }
                </div>
                : null

            }
        </>
    )
}
