import { Link, Box, Button, makeStyles, TextField, Typography, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import LockIcon from '@material-ui/icons/Lock'
import LockOpen from '@material-ui/icons/LockOpen';
import MyAppBar from '../components/navbar/MyAppBar';
import Verification from './Verification';
import validateEmail from '../methods/validateEmail'
import { checkRegistration } from '../methods/getData';
import { SwlCredentialsError, SwlError, SwlSuccess } from '../methods/Swal'
import sendMail from '../methods/sendMail';
import genRand from '../methods/genRand';
import { addUser } from '../methods/postData';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        height: theme.spacing(90),
        align: 'center',
        justifyContent: "center"

    },
    form: {
        height: theme.spacing(70),
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
        margin: "0.65rem"
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
    }
}))
function SignUp() {
    const classes = useStyles();
    const navigate = useHistory();
    const [password1, setPassword1] = useState('password');
    const [password2, setPassword2] = useState('password');
    const [data, setData] = useState(undefined)
    const [vState, setvState] = useState(false);
    const [vCode, setVcode] = useState(undefined);
    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async () => {
        const res = await addUser(data);
        console.log(res)
        if (res) {
            SwlSuccess();
            window.location.href = '/login';

        }
    }
    async function handleVerification() {
        if (data && data.email && data.password && data.name) {
            if (validateEmail(data.email) && data.password === data.re_type) {
                const result = await checkRegistration(data.email);
                if (!result) {
                    const rand = genRand();
                    setVcode(rand);
                    sendMail(data.email, rand);
                    setvState(true);
                }
                else {
                    SwlCredentialsError();
                }
            }
            else {
                SwlError();
            }
        }
        else {
            SwlError();
        }
    }
    return (
        <div>
            {!vState ?
                <>
                    <MyAppBar
                        button1='Home'
                        button4='Contact us'
                        state={false}
                    />
                    <Box className={classes.root} align='center'>
                        <Box className={classes.form}>
                            <Typography className={classes.TypographyTitle}>
                                Sign up as a regular user
                            </Typography>
                            <Link href='/organization-signup' underline='hover'>
                                <Typography className={classes.TypographyLink}>
                                    Signup as an organization
                                </Typography>
                            </Link>
                            <form onChange={(e) => handleChange(e)} noValidate autoComplete='off'>
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
                                    id='name'
                                    variant='outlined'
                                    label="Name"
                                    className={classes.TextFieldLogin}
                                    color='primary'
                                    type="text"
                                    placeholder='Full name'
                                    autoComplete='off'
                                />
                                <TextField
                                    id='password'
                                    variant='outlined'
                                    label="Password"
                                    className={classes.TextFieldLogin}
                                    color='primary'
                                    type={password1}
                                    placeholder='enter your password'
                                    autoComplete='off'
                                    InputProps={{
                                        endAdornment: <IconButton onClick={() => {
                                            if (password1 === 'password') {
                                                setPassword1('text');
                                            }
                                            else {
                                                setPassword1('password');
                                            }
                                        }}>
                                            {password1 === 'password' ?
                                                <LockIcon />
                                                :
                                                <LockOpen />

                                            }
                                        </IconButton>
                                    }}

                                />
                                <TextField
                                    id='re_type'
                                    variant='outlined'
                                    label="Re-type"
                                    className={classes.TextFieldLogin}
                                    color='primary'
                                    type={password2}
                                    placeholder='Re-type your password'
                                    autoComplete='off'
                                    InputProps={{
                                        endAdornment: <IconButton
                                            onClick={() => {
                                                if (password2 === 'password') {
                                                    setPassword2('text')
                                                }
                                                else {
                                                    setPassword2('password');
                                                }
                                            }}
                                        >
                                            {password2 === 'password' ?
                                                <LockIcon />
                                                :
                                                <LockOpen />

                                            }
                                        </IconButton>
                                    }}

                                />

                                <Button onClick={handleVerification} variant='contained' className={classes.loginButton}>Sign Up</Button>
                            </form>
                            <Link href='/login' underline='hover'>
                                <Typography className={classes.TypographyLink}>
                                    Already have an account? Login instead
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Footer />
                </>
                :
                <Verification vCode={vCode} handleSubmit={handleSubmit} />
            }
        </div>

    )
}

export default SignUp
