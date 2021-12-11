import React, { useState } from 'react'
import { AppBar, Avatar, Box, Button, Grid, IconButton, InputBase, makeStyles, MenuItem, Modal, TextField, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LogOut from '@material-ui/icons/ExitToApp'
import Cart from '@material-ui/icons/ShoppingCart'
import axios from '../../../methods/axios'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode';
import SearchIcon from '@material-ui/icons/Search'
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
    inputField: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        fontSize: '.75rem'
    },
    input: {
        height: "5vh",
        borderRadius: 20,
        background: "#EEEEEE",
        width: '30vw',
        marginLeft: '1vw'
    },
}))
function LoggedAppBar(props) {
    const token = Cookies.get('access');
    const role = jwt_decode(token)._role;
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState(false)
    const [hidden, setHidden] = useState(false)
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
            <div style={{ marginBottom: "6rem" }}>
                <AppBar color='inherit'>
                    <Grid container justifyContent='space-between'>
                        <Toolbar>
                            <Avatar src='../../logo512.png' />
                            {!hidden ? <MenuItem component={Link} to='/app' className={classes.title}>Easy-Med</MenuItem> : null}
                        </Toolbar>
                        <Toolbar>
                            {props.showSearch ?
                                <>{hidden ?
                                    <InputBase

                                        className={classes.input}
                                        onChange={(e) => {
                                            const token = Cookies.get('access')
                                            if (e.target.value !== '') {
                                                axios.get(`/search/${e.target.value}`, {
                                                    headers: {
                                                        Authorization: "Bearer " + token
                                                    }
                                                }).then(res => {
                                                    console.log(res.data)
                                                    setSearch(res.data)
                                                })
                                            }
                                        }}
                                        placeholder="Search Restaurant"
                                        inputProps={{ 'aria-label': 'search', className: classes.inputField }}
                                    /> :
                                    null
                                }
                                    <IconButton onClick={() => {
                                        setSearch(null)
                                        setHidden(!hidden)
                                    }}>
                                        <SearchIcon className={classes.icon} />
                                    </IconButton>
                                </>
                                : null

                            }
                            {role === 'LOCAL' ?
                                <Link to='/cart'>
                                    <IconButton>
                                        <Cart className={classes.icon} />
                                    </IconButton>
                                </Link>
                                :
                                null
                            }
                            {role === 'USER' ?
                                <Link to='/cart-user'>
                                    <IconButton>
                                        <Cart className={classes.icon} />
                                    </IconButton>
                                </Link>
                                :
                                null

                            }
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
