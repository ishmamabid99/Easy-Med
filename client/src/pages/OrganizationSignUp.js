import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from "react-router";
import Footer from '../components/Footer/Footer';
import MyAppBar from '../components/navbar/MyAppBar'
import GoogleMapShow from '../GoogleMapShow';
import genRand from '../methods/genRand';
import { checkRegistration } from '../methods/getData';
import { addOrganization } from '../methods/postData';
import sendMail from '../methods/sendMail';
import { SwlCredentialsError, SwlError, SwlSuccess } from '../methods/Swal';
import validateEmail from '../methods/validateEmail';
import Verificaton from './Verification'
const useStyles = makeStyles(theme => ({
    root: {
        flex: "50%",
        width: "100%",
        display: "block",
        marginBottom: "10%",
        height: theme.spacing(50)
    },
    textDiv: {

        marginTop: "6rem"
    },
    textfield: {
        background: "#FFF",
        margin: "0.3rem",
        width: theme.spacing(40)
    },
    placeholder: {
        fontFamily: "Abhaya libre"
    },
    btn: {
        backgroundColor: "#2C394B",
        color: "#FFF",
        marginTop: "0.7rem",
        fontFamily: "Abhaya libre",
        height: "2rem",
        marginLeft: "0.3rem",
        width: theme.spacing(40),
        "&:hover": {
            backgroundColor: "#2C394B",
        }
    },
    div: {
        marginBottom: "5rem"
    }

}))
export default function OrganizationSignUp() {
    const [vState, setVstate] = useState(false)
    const [data, setData] = useState(undefined);
    const [vCode, setVcode] = useState(undefined);
    const classes = useStyles();
    let navigate = useHistory();
    async function handleVerification() {
        if (data) {
            if (data.email && validateEmail(data.email) && data.name &&
                data.phone && data.password === data.retype && data.geoLocation) {
                const res = await checkRegistration(data.email);
                console.log(res)
                if (!res) {
                    const rand = genRand();
                    sendMail(data.email, rand);
                    setVcode(rand);
                    setVstate(true);
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
    const handleChange = (e) => {
        if (e.target.placeholder === 'Name of your organization') {
            setData({ ...data, name: e.target.value })
        }
        if (e.target.placeholder === 'Your email address') {
            setData({ ...data, email: e.target.value })
        }
        if (e.target.placeholder === 'Re-type your password') {
            setData({ ...data, retype: e.target.value })
        }
        if (e.target.placeholder === 'Put your password') {
            setData({ ...data, password: e.target.value })
        }
        if (e.target.placeholder === 'Your phone number') {
            setData({ ...data, phone: e.target.value })
        }
    }
    async function handleSubmit() {
        const res = await addOrganization(data);
        if (res) {
            SwlSuccess();
            navigate.push('/login')
        }
    }

    return (
        <>{!vState ?
            <>
                <div className={classes.div}>
                    <MyAppBar
                        button1='Home'
                        button4='CONTACT US'
                        state={false}
                    />
                    <Grid container justifyContent='space-evenly'>
                        <GoogleMapShow data={data} setData={setData} />
                        <div onChange={(e) => { handleChange(e) }} align='center' className={classes.root}>
                            <form noValidate autoComplete='off' align='center' className={classes.textDiv}>
                                <TextField type='text' placeholder='Name of your organization' label='Name' size='small' className={classes.textfield} variant='outlined' />
                                <br />
                                <TextField type='email' placeholder='Your email address' label='Email' size='small' className={classes.textfield} variant='outlined' />
                                <br />
                                <TextField type='text' placeholder='Your phone number' label='Phone' size='small' className={classes.textfield} variant='outlined' />
                                <br />
                                <TextField type='password' placeholder='Put your password' label='Password' size='small' className={classes.textfield} variant='outlined' />
                                <br />
                                <TextField type='password' placeholder='Re-type your password' label='Re-type' size='small' className={classes.textfield} variant='outlined' />
                                <br />
                                <Button onClick={handleVerification} variant='contained' size='large' className={classes.btn}>Signup</Button>
                            </form>
                        </div>

                    </Grid>
                </div>
                <Footer />
            </>
            :
            <>
                <Verificaton handleSubmit={handleSubmit} vCode={vCode} />
            </>
        }
        </>
    )
}
