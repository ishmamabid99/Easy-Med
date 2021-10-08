import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Avatar, Button, Grid, Typography, useTheme, useMediaQuery, Box } from '@material-ui/core';
import DrawerComponent from './Drawer';


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
        "&:hover": {
            backgroundColor: "#fff",
        },
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
        fontSize:"1rem",
        marginLeft:"2%",
        color: "#2C394B"
        ,
        "&:hover":{
            background: "#2C394B",
            color:"#fff"
        }
    }

}));

export default function MyAppBar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    return (

        <Box className={classes.root}>
            <Grid>
                <Grid>
                    <AppBar className={classes.myappbar} position="fixed" color="#FFFFFF">
                        <Toolbar>
                            <Avatar src="../logo512.png" className={classes.large} />
                            <Typography className={classes.h4}>Easy Med</Typography>
                            {isMatch ? <>
                                <DrawerComponent />
                            </> :
                                <>
                                    <Button onClick={() => {
                                        window.location.href = '/'
                                    }} className={classes.Button} color="inherit">Home</Button>
                                    <Button className={classes.Button} color="inherit">Pricing</Button>
                                    <Button className={classes.Button} color="inherit">User Guide</Button>
                                    <Button onClick={() => {
                                        window.location.href = '/#Contact'
                                    }} className={classes.Button} color="inherit">Contact Us</Button>
                                    <div style={{ marginLeft: "5%" , width:"200px" }}>
                                        <Button onClick={()=>{window.location.href='/login'}} variant='outlined' className={classes.ButtonReg} color="inherit">Login</Button>
                                        <Button onClick={()=>{window.location.href='/signup'}} variant='outlined' className={classes.ButtonReg} color="inherit">Signup</Button>
                                    </div>
                                </>}
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </Box>
    );
}