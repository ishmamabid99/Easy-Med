import React from 'react'
import { makeStyles, Typography, useMediaQuery, useTheme, } from '@material-ui/core'
import Carousel from './HomeComponents/HomeCarousel';
import DoubleDots from './HomeComponents/DoubleDots';
import SpanBox from './HomeComponents/SpanBox';


const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center"
    },
    title: {
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(1),
        fontFamily: 'Roboto Condensed',
        fontSize: "3.5rem"
    },
    titleSm: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        fontFamily: 'Roboto Condensed',
        fontSize: "2.5rem"
    }
}));

export default function MiddleLower() {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.root}>
            <DoubleDots />
            {!isMatch ?
                <>
                    <Typography className={classes.title} paragraph={true} align="center">
                        WHY PEOPLE LOVE US?
                    </Typography>
                </>
                :
                <>
                    <Typography className={classes.titleSm} paragraph={true} align="center">
                        WHY PEOPLE LOVE US?
                    </Typography>
                </>
            }
            <Carousel />
            <DoubleDots />
            {!isMatch ?
                <>
                    <Typography className={classes.title} paragraph={true} align="center">
                        Know More!
                    </Typography>
                </>
                :
                <>
                    <Typography className={classes.titleSm} paragraph={true} align="center">
                        Know More!
                    </Typography>
                </>
            }
            <SpanBox />
            <DoubleDots/>
        </div>
    )
}