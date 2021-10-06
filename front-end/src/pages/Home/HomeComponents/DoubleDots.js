import React from 'react'
import { Icon, makeStyles, } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center"
    },
    IconStyle: {
        fontSize: theme.spacing(2.5),
        color: "#D8EFF0",
    },
    block:{
        display:'block',
        padding:theme.spacing(3)
    }
}));

function DoubleDots() {
    const classes = useStyles();
    return (

        <div align="center" className={classes.block}>
            <Icon className={classes.IconStyle}>circle</Icon>
            <Icon className={classes.IconStyle}>circle</Icon>
        </div>

    )
}

export default DoubleDots
