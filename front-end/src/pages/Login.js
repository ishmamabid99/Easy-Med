import { Box, Button, makeStyles, TextField, Typography, Link } from '@material-ui/core'
import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import LockIcon from '@material-ui/icons/Lock'
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Mail';
import LockOpen from '@material-ui/icons/LockOpen';
import MyAppBar from '../components/navbar/MyAppBar';

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
    facebookIconButton: {
        fontFamily: "Abhaya libre",
        width: '80%',
        marginTop: "5%",
        color: "#FFF",
        backgroundColor: '#3B5998',
        '&:hover': {
            backgroundColor: "#3B5998",
        },
        fontWeight: "600"
    },
    googleIconButton: {
        fontFamily: "Abhaya libre",
        width: '80%',
        marginTop: "5%",
        color: "#fff",
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: "red",
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
    }
}))

function Lock(props) {

    const [state, setState] = useState(true);
    return (
        <div>
            {state ?
                <>
                    <LockIcon
                        onClick={() => {
                            setState(false);
                        }}
                    />
                </>
                :
                <>
                    <LockOpen
                        onClick={() => {
                            setState(true);
                        }} />
                </>
            }
        </div>
    )
}


function Login() {
    const classes = useStyles();
    const [password, setPassword] = useState('password');
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }
    return (
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
                    <form noValidate autoComplete='off'>
                        <TextField
                            variant='outlined'
                            label="Email"
                            className={classes.TextFieldLogin}
                            color='primary'
                            type="Email"
                            placeholder='Enter your email'
                            autoComplete='off'
                        />
                        <TextField
                            variant='outlined'
                            label="Password"
                            className={classes.TextFieldLogin}
                            color='primary'
                            type={password}
                            onChange={handleChange}
                            placeholder='enter your password'
                            autoComplete='off'
                            InputProps={{
                                endAdornment: <Button
                                    onClick={() => {
                                        if (password === 'password')
                                            setPassword('text')
                                        else
                                            setPassword("password")
                                    }}
                                    style={{ maxWidth: '0px', maxHeight: '0px', minWidth: '0px', minHeight: '0px' }}
                                    className={classes.IconButton}
                                    endIcon={<Lock />}
                                />
                            }}

                        />

                        <Button variant='contained' className={classes.loginButton}>Login</Button>

                        <Button className={classes.facebookIconButton} variant="contained" endIcon={<FacebookIcon />}>
                            Facebook
                        </Button>

                        <Button className={classes.googleIconButton} variant="contained" endIcon={<GoogleIcon />}>
                            Gmail
                        </Button>
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

    )
}

export default Login
