import { makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles= makeStyles((theme)=>({
    root:{
        height:theme.spacing(30),
        background:"#2C394B",
    }
}))
function Footer() {
    const classes= useStyles();
    return (
        <div id="contact">
            <div className={classes.root}>
                
            </div>
        </div>
    )
}

export default Footer
