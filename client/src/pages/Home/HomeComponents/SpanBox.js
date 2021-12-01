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
            paddingBottom: "0"
        },

        box: {
            height: 'auto',
            width: "100%",
            marginBottom: "5%"
        },
        boxMobile: {
            height: 'auto',
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
            paddingBottom: "5%",
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
        TypographyLeftMobile: {
            paddingLeft: "5%",
            paddingRight: "5%",
            textAlign: "justify",
            lineHeight: "2",
            fontFamily: 'Guwan',
            fontSize: "1.35rem",
            fontWeight: '400',
            opacity: "0.7",
            paddingBottom: "5%"
        },

        titleMobile: {
            opacity: "0.5",
            paddingBottom: theme.spacing(0.01),
            fontFamily: 'Guwan',
            fontWeight: "900",
            fontSize: "1.5rem"
        }
    }));
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('600'));
    if (!isMatch)
        return (

            <div className={classes.root}>
                <Box id="span1" className={classes.box}>
                    <img
                        src={pharmacy}
                        alt="Manage Pharmacy"
                        className={classes.imgRight}
                    />
                    <Typography className={classes.TypographyLeft}>
                        <Typography className={classes.title}>
                            Manage Your Pharmacy
                        </Typography>
                        Easy-Med allows you to manage your own pharmacy.
                        Easy-Med may help you keep track of your pharmacy's daily sales.
                        You'll be able to keep track of how well your products sell.
                        You may also send daily sales data to your vendors.
                        You'll be able to see which goods are selling well and which ones aren't.
                        The product's provider can also monitor how well their products are selling.
                    </Typography>
                </Box>
                <Box id="span2" className={classes.box}>
                    <img
                        src={lessCost}
                        alt="Less Cost"
                        className={classes.imgLeft}
                    />
                    <Typography paragraph={true} className={classes.TypographyLeft}>
                        <Typography className={classes.title}>
                            Less Cost
                        </Typography>
                        Easy-Med offers medication at a lower cost than a local drugstore.
                        We have direct relationships with pharmaceutical companies,
                        allowing us to sell medicine at a lower cost while maintaining
                        the greatest level of product quality. You can place an order online
                        and have it delivered to your home within 20 minutes if you live in
                        our service area. We also provide drugs at a reduced price to our premium consumers.

                    </Typography>
                </Box>
                <Box id="span3" className={classes.box}>
                    <img
                        src={medicalCard}
                        alt='Medical Card'
                        className={classes.imgRight}
                    />
                    <Typography paragraph={true} className={classes.TypographyLeft}>
                        <Typography className={classes.title}>
                            Health card
                        </Typography>
                        Easy Med generates a health card for its registered users based on their previous medical history.
                        They can use the card to acquire their regular pharmacy services.
                        Health card holders are frequently offered discounts.
                        This health card will also show the owner exactly what type of medicine they are taking.
                        We also offer printable PDF versions of your health card, which can be used for a variety of purposes.

                    </Typography>
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
                    <Typography className={classes.TypographyLeftMobile}>
                        <Typography className={classes.titleMobile}>
                            Manage Your Pharmacy
                        </Typography>
                        Easy-Med allows you to manage your own pharmacy.
                        Easy-Med may help you keep track of your pharmacy's daily sales.
                        You'll be able to keep track of how well your products sell.
                        You may also send daily sales data to your vendors.
                        You'll be able to see which goods are selling well and which ones aren't.
                        The product's provider can also monitor how well their products are selling.
                    </Typography>
                </Box>
                <Box id="span2" className={classes.boxMobile}>
                    <img
                        src={lessCost}
                        alt="Less Cost"
                        className={classes.imgLeftMobile}
                    />
                    <Typography paragraph={true} className={classes.TypographyLeftMobile}>
                        <Typography className={classes.titleMobile}>
                            Less Cost
                        </Typography>
                        Easy-Med offers medication at a lower cost than a local drugstore.
                        We have direct relationships with pharmaceutical companies,
                        allowing us to sell medicine at a lower cost while maintaining
                        the greatest level of product quality. You can place an order online
                        and have it delivered to your home within 20 minutes if you live in
                        our service area. We also provide drugs at a reduced price to our premium consumers.

                    </Typography>
                </Box>
                <Box id="span3" className={classes.boxMobile}>
                    <img
                        src={medicalCard}
                        alt='Medical Card'
                        className={classes.imgRightMobile}
                    />
                    <Typography paragraph={true} className={classes.TypographyLeftMobile}>
                        <Typography className={classes.titleMobile}>
                            Health card
                        </Typography>
                        Easy Med generates a health card for its registered users based on their previous medical history.
                        They can use the card to acquire their regular pharmacy services.
                        Health card holders are frequently offered discounts.
                        This health card will also show the owner exactly what type of medicine they are taking.
                        We also offer printable PDF versions of your health card, which can be used for a variety of purposes.

                    </Typography>
                </Box>
                <Box id="span4" className={classes.boxMobile}>
                    <img
                        src={expandBusiness}
                        alt="Expand Business"
                        className={classes.imgLeftMobile}
                    />
                    <Typography paragraph={true} className={classes.TypographyLeftMobile}>
                        <Typography className={classes.titleMobile}>
                            Expand Business
                        </Typography>
                        Easy-Med can help you grow your pharmaceutical company.
                        Keep track of all of your clients and their contact information in one location,
                        which you can access from any device. With just a few clicks, you can keep your goods and inventory up to date.
                        Create a report of your daily, weekly, or monthly sales, or as you'd want to track your sales success.
                        Check the dates of your prior sales. You will not lose any sales information.
                    </Typography>
                </Box>
                <Box id="span5" className={classes.boxMobile}>

                    <img
                        src={onlineSupport}
                        alt='Online Support'
                        className={classes.imgRightMobile}
                    />
                    <Typography paragraph={true} className={classes.TypographyLeftMobile}>
                        <Typography className={classes.titleMobile}>
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
    }
}
export default SpanBox
