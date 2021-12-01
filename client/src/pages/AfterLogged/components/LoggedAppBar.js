import React, { useState } from 'react'
import { AppBar, Avatar, Box, Button, Grid, IconButton, makeStyles, MenuItem, Modal, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LogOut from '@material-ui/icons/ExitToApp'
import Cookies from 'js-cookie'
const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: "Abhaya libre",
        opacity: "0.8",
        fontWeight: "400",
        fontSize: '1.75rem',
        "&:hover": {
            backgroundColor: "transparent",
        }
    },
    icon: {
        color: "black",
        opacity: "0.8",
        fontSize: "1.5rem"
    },
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
function LoggedAppBar() {
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const handleLogout = () => {
        setModal(true);
    }
    const handleClose = () => {
        setModal(false)
    }
    const logout = () => {

        Cookies.remove('access');
        window.location.href = '/login'
    }
    return (
        <div>
            <Modal onClose={handleClose} open={modal}>
                <Box className={classes.boxStyle}>
                    <Typography align='center' className={classes.modalTypo}>
                        Are you sure you want to log out?
                    </Typography>
                    <Grid className={classes.modalGrid} container justifyContent="space-evenly">
                        <Button onClick={logout} size='large' className={classes.buttonYes}>
                            <Typography className={classes.btnTypo}>Yes</Typography>
                        </Button>
                        <Button onClick={handleClose} className={classes.buttonNO} size='large'>
                            <Typography className={classes.btnTypo}>No</Typography>
                        </Button>
                    </Grid>
                </Box>
            </Modal>
            <div style={{ marginBottom: "4rem" }}>
                <AppBar color='inherit'>
                    <Grid container justifyContent='space-between'>
                        <Toolbar>
                            <Avatar src='../../logo512.png' />
                            <MenuItem component={Link} to='/app' className={classes.title}>Easy-Med</MenuItem>
                        </Toolbar>
                        <Toolbar>
                            <IconButton onClick={handleLogout}>
                                <LogOut className={classes.icon} />
                            </IconButton>
                        </Toolbar>
                    </Grid>
                </AppBar>
            </div>
        </div>
    )
}

export default LoggedAppBar
