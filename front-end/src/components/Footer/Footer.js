import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles= makeStyles((theme)=>({
    root:{
        height:theme.spacing(30),
        marginTop:"10vh",
        background:"#2C394B"
    }
}))
function Footer() {
    const classes= useStyles();
    return (
        <div id="Contact">
            <Box className={classes.root}>
                
            </Box>
        </div>
    )
}

export default Footer
