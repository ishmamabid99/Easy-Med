import { Box, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import pharmacy from '../../../images/pharmacyExplain.jpg'
import lessCost from '../../../images/LessCostExplain.jpg'
import medicalCard from '../../../images/medicalCard.jpg'
import expandBusiness from '../../../images/expandBusiness.jpg'
import onlineSupport from '../../../images/onlineSupport.jpg'
function SpanBox() {
    const useStyles = makeStyles((theme) => ({
        root: {
            paddingBottom: "10%"
        },

        box: {
            height: theme.spacing(50),
            width: "100%",
            marginBottom: "5%"
        },
        boxMobile: {
            height: theme.spacing(80),
            width: "100%",
            marginBottom: "2%"
        },
        imgRight: {
            float: "right",
            width: '40%',
            height: '90%',
            borderRadius: "5%",
            marginRight: "5%",
            marginLeft: "2%"
        },
        imgLeft: {
            float: "left",
            width: '40%',
            height: '90%',
            borderRadius: "5%",
            marginRight: "2%",
            marginLeft: "5%"
        },
        imgRightMobile: {

            width: '100%',
            height: '300px',
            borderRadius: "5%",
            marginBottom: "10%"
        },
        imgLeftMobile: {

            width: '100%',
            height: '300px',
            borderRadius: "5%",
            marginBottom: "10%"
        },
        TypographyLeft: {
            paddingLeft: "5%",
            paddingRight: "5%",
            textAlign: "justify",
            lineHeight: "2",
            fontFamily: 'Guwan',
            fontSize: "1.35rem",
            fontWeight: '400',
            opacity: "0.8"
        },
        title: {
            opacity: "0.5",
            paddingBottom: theme.spacing(0.01),
            fontFamily: 'Guwan',
            fontWeight: "900",
            fontSize: "2.5rem"
        },
    }));
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    if (!isMatch)
        return (

            <div className={classes.root}>
                <Box id="span1" className={classes.box}>
                    <img
                        src={pharmacy}
                        alt="Manage Pharmacy"
                        className={classes.imgRight}
                    />
                </Box>
                <Box id="span2" className={classes.box}>
                    <img
                        src={lessCost}
                        alt="Less Cost"
                        className={classes.imgLeft}
                    />
                </Box>
                <Box id="span3" className={classes.box}>
                    <img
                        src={medicalCard}
                        alt='Medical Card'
                        className={classes.imgRight}
                    />
                </Box>
                <Box id="span4" className={classes.box}>
                    <img
                        src={expandBusiness}
                        alt="Expand Business"
                        className={classes.imgLeft}
                    />
                    <Typography paragraph={true} className={classes.TypographyLeft}>
                    <Typography className={classes.title}>
                            Expand Business
                        </Typography>
                        Easy-Med can help you grow your pharmaceutical company. 
                        Keep track of all of your clients and their contact information in one location, 
                        which you can access from any device. With just a few clicks, you can keep your goods and inventory up to date.
                        Create a report of your daily, weekly, or monthly sales, or as you'd want to track your sales success. 
                        Check the dates of your prior sales. You will not lose any sales information.
                    </Typography>
                </Box>
                <Box id="span5" className={classes.box}>

                    <img
                        src={onlineSupport}
                        alt='Online Support'
                        className={classes.imgRight}
                    />

                    <Typography paragraph={true} className={classes.TypographyLeft}>
                        <Typography className={classes.title}>
                            Online Support
                        </Typography>
                        Easy-Med is always available to assist you via the internet. Our registered
                        consumers have access to a number of qualified physicians for consultation. In a matter of seconds,
                        one of our trained physicians will provide you with information and advice. We provide you with
                        the tools and advice you require to stay healthy. Our objective is to ensure that everyone has
                        access to inexpensive and accessible healthcare.
                        Register right now.
                    </Typography>

                </Box>
            </div>
        )
    else {
        return (
            <div>
                <Box id="span1" className={classes.boxMobile}>
                    <img
                        src={pharmacy}
                        alt="Manage Pharmacy"
                        className={classes.imgRightMobile}
                    />
                </Box>
                <Box id="span2" className={classes.boxMobile}>
                    <img
                        src={lessCost}
                        alt="Less Cost"
                        className={classes.imgLeftMobile}
                    />
                </Box>
                <Box id="span3" className={classes.boxMobile}>
                    <img
                        src={medicalCard}
                        alt='Medical Card'
                        className={classes.imgRightMobile}
                    />
                </Box>
                <Box id="span4" className={classes.boxMobile}>
                    <img
                        src={expandBusiness}
                        alt="Expand Business"
                        className={classes.imgLeftMobile}
                    />
                </Box>
                <Box id="span5" className={classes.boxMobile}>

                    <img
                        src={onlineSupport}
                        alt='Online Support'
                        className={classes.imgRightMobile}
                    />
                </Box>
            </div>
        )
    }
}
export default SpanBox
