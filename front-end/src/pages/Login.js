import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme) => ({
    root: {
        height: theme.spacing(50),

    },
    form: {
        height: '20%',
        width: theme.spacing(50),
        margin: "5%",
        background: "blue"
    }
}))
function Login() {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.root} align='center'>
                <Box className={classes.form}>

                </Box>
            </Box>
        </div>
    )
}

export default Login
