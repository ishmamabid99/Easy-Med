import { CircularProgress, makeStyles, Paper, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { deleteUser, getAllUserData } from '../../../methods/getData';
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined'
const useStyles = makeStyles(theme => ({
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
    icon: {
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.5)"
        },
        float: "right",
        color: "red",
        fontSize: "2rem"
    },
    root: {
        marginLeft: 250,
        marginBottom: 100
    }
}));

export default function ShowUser() {
    const classes = useStyles();
    const [data, setData] = useState(undefined);
    const [state, setState] = useState(undefined)
    async function getData() {
        const res = await getAllUserData();
        setData(res.data);
    }
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        getData();
    }, [state])
    async function handleDelete(item) {
        await deleteUser(item._id).then(() => {
            setState(!state)
        })
    }
    return (
        <div>
            {data ?
                <div className={classes.root} align='center'>
                    {data.map(item =>
                        <Paper className={classes.paper}>
                            <div style={{ padding: "2rem" }} align='left'>
                                <div>
                                    <DeleteIcon onClick={() => {
                                        handleDelete(item)
                                    }} className={classes.icon} />

                                </div>

                                <Grid container>

                                    <Grid container className={classes.grid}>
                                        <Typography className={classes.title}>Name: <span>&nbsp;</span></Typography>
                                        <Typography className={classes.typo}>{item.name}</Typography>
                                    </Grid>
                                    <Grid container className={classes.grid}>
                                        <Typography className={classes.title}>Role: <span>&nbsp;</span> </Typography>
                                        <Typography className={classes.typo}>{item.role}</Typography>
                                    </Grid>
                                    <Grid container className={classes.grid}>
                                        <Typography className={classes.title}>Email: <span>&nbsp;</span></Typography>
                                        <Typography className={classes.typo}>{item.email}</Typography>
                                    </Grid>
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
