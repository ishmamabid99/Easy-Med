import { Box, makeStyles, Typography, useTheme, useMediaQuery, Button, Grid } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(10),
    },
    box: {

        height: theme.spacing(10),
        background: "#2C394B",

    },
    box1: {
        height: theme.spacing(40),
        background: "inherit",
        justifyContent: 'cente'

    },
    typo: {
        color: "#fff",
        paddingTop: theme.spacing(1.8)
    },
    title: {
        padding: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(0.01),
        fontFamily: "Abhaya libre",
        fontSize: "3.5rem"
    },
    titleSm: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(0.01),
        fontFamily: "Abhaya libre",
        fontSize: "2.5rem"
    },
    decription: {
        color: "#787A91",
        fontSize: "1.25rem",
        fontFamily: "Guwan Batang",
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(5)
    },
    Button: {
        display: "inline-block",
        width: theme.spacing(40),
        background: "red",
        height: theme.spacing(5),
        color: "#fff",
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            background: "#2C394B",
            transform: "scale3d(1.05,1.05,1)"
        },
    },
}))

function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div className={classes.root}>
            <Box className={classes.box}>

                <Typography paragraph={true} align="center" className={classes.typo}>
                    Welcome to Easy Med<br />
                    Get a discount of 10% on your first Order!<br />
                </Typography>
            </Box>

            <Box className={classes.box1}>
                {!isMatch ?
                    <>
                        <Typography paragraph={true} align="center" className={classes.title}>
                            WE PROVIDE THE BEST DEAL
                        </Typography>
                        <Typography paragraph={true} align="center" className={classes.decription}>
                            Easy Med mantains supply management <br />from large scale pharmaceutical company <br />to local
                            pharmacy and paitents
                        </Typography>
                    </> :
                    <>
                        <Typography paragraph={true} align="center" className={classes.titleSm}>
                            WE PROVIDE THE BEST DEAL
                        </Typography>
                        <Typography paragraph={true} align="center" className={classes.decription} >
                            Easy Med mantains supply management <br /> from large scale pharmaceutical company <br />to local pharmacy and paitents
                        </Typography>
                    </>
                }
                <Grid container className={classes.root} align="center" justify="center" alignItems="center"  >
                    <Grid item xs={12} sm={4} md={6}>
                        <Button onClick={() => {
                            window.location.href = '/signup'
                        }} variant="contained" className={classes.Button}>Try For Free</Button>
                    </Grid>
                </Grid>`
            </Box>
        </div>

    )
}

export default Header
