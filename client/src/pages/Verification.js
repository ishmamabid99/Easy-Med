import { Button, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { SwlSubmitError } from '../methods/Swal';
const useStyles = makeStyles((theme) => ({
    verificationFeild: {
        width: theme.spacing(35),
        marginTop: "4rem",
        background: "#fff"
    },
    btn: {
        backgroundColor: "#2C394B",
        color: '#fff',
        '&:hover': {
            backgroundColor: "#2C394B",
        },
        fontWeight: "500",
        fontFamily: "Roboto",
        width: theme.spacing(35),
        marginTop: "1rem",
        marginBottom: "2rem"
    }
}))
export default function Verification(props) {

    const [vCode, setVcode] = useState(undefined);
    const classes = useStyles();
    async function handleSubmit() {
        if (props.vCode.toString() === vCode.toString()) {
            props.handleSubmit();
        }
        else {
            SwlSubmitError();
        }
    }
    return (
        <>
            <div align='center'>
                <TextField onChange={(e) => { setVcode(e.target.value) }} label='Verification code' placeholder='Your code goes here' className={classes.verificationFeild} variant='outlined' size='small' />
            </div>
            <div align='center'>
                <Button onClick={handleSubmit} className={classes.btn} variant='contained'>Verify</Button>
            </div>
        </>
    )
}
