import { Box, Button, makeStyles, TextField, Typography, Link, IconButton, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import LockIcon from '@material-ui/icons/Lock'
import LockOpen from '@material-ui/icons/LockOpen';
import MyAppBar from '../components/navbar/MyAppBar';
import validateEmail from '../methods/validateEmail'
import { loginUser } from '../methods/postData';
import Cookies from 'js-cookie'
import { SwlLoginError } from '../methods/Swal';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: "center",
        height: theme.spacing(70),

    },
    form: {
        height: theme.spacing(80),
        width: theme.spacing(60),
        marginTop: "2%",
        marginBottom: "10%"
    },
    TypographyTitle: {
        padding: '5%',
        fontFamily: "Abhaya libre",
        fontWeight: "900",
        fontSize: "2rem",
    },
    TextFieldLogin: {
        width: '80%',
        margin: "5%"
    },
    loginButton: {
        fontFamily: "Abhaya libre",
        width: '80%',
        marginTop: "5%",
        backgroundColor: "#2C394B",
        color: '#fff',
        '&:hover': {
            backgroundColor: "#2C394B",
        },
        fontWeight: "600"
    },
    IconButton: {
        marginTop: "2%",
        backgroundColor: "inherit",
        "&:hover": {
            backgroundColor: "inherit",
        }
    },
    TypographyLink: {
        marginTop: "2%",
        color: "primary",
        fontFamily: "Abhaya Libre"
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

    }
}))

function Login() {
    const classes = useStyles();
    const [password, setPassword] = useState('password');
    const [data, setData] = useState(undefined);
    const [state, setState] = useState(true)
    async function handleLogin() {
        if (!data) {
            SwlLoginError();
        }
        else if (validateEmail(data.email)) {
            const res = await loginUser(data);
            if (res) {
                Cookies.set('access', res.data.access_token, { expires: 1 }).then(window.location.href = '/app');
            }
            else {
                SwlLoginError();
            }
        }
    }
    useEffect(() => {
        const timefunc = setTimeout(() => {
            setState(false);
        }, 2000)
        return () => clearTimeout(timefunc);
    }, [])
    return (
        <>{!state ?
            <div>
                <MyAppBar
                    button1='Home'
                    button4='Contact us'
                    state={false}
                />
                <Box className={classes.root} align='center'>
                    <Box className={classes.form}>
                        <Typography className={classes.TypographyTitle}>
                            Log in
                        </Typography>
                        <form onChange={(e) => {
                            setData({ ...data, [e.target.id]: e.target.value })
                        }} noValidate autoComplete='off'>
                            <TextField
                                id='email'
                                variant='outlined'
                                label="Email"
                                className={classes.TextFieldLogin}
                                color='primary'
                                type="Email"
                                placeholder='Enter your email'
                                autoComplete='off'
                            />
                            <TextField
                                id='password'
                                variant='outlined'
                                label="Password"
                                className={classes.TextFieldLogin}
                                color='primary'
                                type={password}
                                placeholder='enter your password'
                                autoComplete='off'
                                InputProps={{
                                    endAdornment: <IconButton onClick={() => {
                                        if (password === 'password') {
                                            setPassword('text');
                                        }
                                        else {
                                            setPassword('password');
                                        }
                                    }}>
                                        {password === 'password' ?
                                            <LockIcon />
                                            :
                                            <LockOpen />
                                        }
                                    </IconButton>
                                }}

                            />

                            <Button onClick={handleLogin} variant='contained' className={classes.loginButton}>Login</Button>
                        </form>
                        <Link href='/signup' underline='hover'>
                            <Typography className={classes.TypographyLink}>
                                Don't have an account? Sign up for free
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                <Footer />
            </div>
            :
            <CircularProgress className={classes.progressBar} color='inherit' />
        }
        </>

    )
}

export default Login
