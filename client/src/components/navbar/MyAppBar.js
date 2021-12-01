import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Avatar, Button, Grid, Typography, useTheme, useMediaQuery, Box } from '@material-ui/core';
import DrawerComponent from './Drawer';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(8)
    },
    myappbar: {
        height: `calc{0.8*${window.screen.height}}vh`,
        backgroundColor: "#FFFFFF",

    },
    large: {
        marginRight: theme.spacing(2),
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    h4: {
        flexGrow: 0.45,
        color: "#2C2E43",
        fontFamily: 'Gowun Batang',
        fontSize: "2rem"
    },
    Button: {
        fontFamily: "Gowun Batang",
        fontWeight: "1000",
        marginRight: theme.spacing(4)
    },
    ButtonReg: {

        fontFamily: "Gowun",
        fontWeight: "700",
        fontSize: "1rem",
        marginLeft: "1%",
        color: "#2C394B"
        ,
        "&:hover": {
            background: "#2C394B",
            color: "#fff"
        }
    }

}));

export default function MyAppBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const onLandingPage = props.state;
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClick = () => {
        window.location.href = '/'
    }
    return (

        <Box className={classes.root}>
            <Grid>
                <Grid>
                    <AppBar className={classes.myappbar} position="fixed" color="#FFFFFF">
                        <Toolbar>
                            <Avatar src="../logo512.png" className={classes.large} />
                            <Typography className={classes.h4}>Easy Med</Typography>
                            {isMatch ? <>
                                <DrawerComponent
                                    {...props}
                                />
                            </> :
                                <>
                                    {!props.button1 ? <></> :

                                        <Button onClick={handleClick} className={classes.Button} color="inherit">{props.button1}</Button>
                                    }
                                    {!props.button2 ? <></> :
                                        <Button className={classes.Button} color="inherit">{props.button2}</Button>
                                    }
                                    {!props.button3 ? <></> :
                                        <Button className={classes.Button} color="inherit">{props.button3}</Button>
                                    }
                                    {!props.button4 ? <></> :
                                        <Button className={classes.Button} color="inherit">
                                            <Link to='contact' smooth={true} duration={0}>{props.button4}</Link>
                                        </Button>
                                    }
                                    {onLandingPage ?
                                        <>

                                            <Button onClick={() => { window.location.href = '/login' }} variant='outlined' className={classes.ButtonReg} color="inherit">Login</Button>
                                            <Button onClick={() => { window.location.href = '/signup' }} variant='outlined' className={classes.ButtonReg} color="inherit">Signup</Button>
                                        </> :
                                        <></>
                                    }
                                </>}
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </Box>
    );
}