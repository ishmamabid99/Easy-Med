import { Box, makeStyles, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        marginLeft: 240,
        height: '100vh',
        backgroundColor: "red"
    },
    mobileRoot: {
        width: '100vw',
        height: '100vh',
        backgroundColor: "red"
    }
}))
export default function OrderOrg() {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div>
            {!isMatch ?
                <Box className={classes.root}></Box>
                :
                <Box className={classes.mobileRoot}></Box>
            }
        </div>
    )
}
