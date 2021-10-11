import { Grid, Box, Card, makeStyles, Typography, Button, CardContent, CardMedia, ListItemText, List, ListItem } from '@material-ui/core'
import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center"
    },
    box: {
        display: 'inline-block',
        width: theme.spacing(50)
    },
    cardStyle: {
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.4)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.4)",
        },
        height: theme.spacing(70),
        width: theme.spacing(45),

        transition: "transform 0.15s ease-in-out",

        backgroundImage: 'linear-gradient(135deg, #F4F4F2,#F1F6F9,#BBBFCA  )'
    },
    title: {
        paddingTop:theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        fontFamily: 'Abhaya Libre',
        fontSize: "3.5rem"

    },
    titleSm: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        fontFamily: 'Abhaya Libre',
        fontSize: "2.5rem"
    
    },
    cardContent: {
        padding: "10%"
    },
    FontTitle: {
        fontFamily: "Guwan Batang",
        fontSize: "3rem",
        fontWeight: "900",
        color: "#082032"
    },
    moneyTypo: {
        fontFamily: "Robot Condensed",
        fontSize: "2rem",
        fontWeight: "600",
        color: "#000",
        marginTop: "2rem"
    },
    Text: {
        fontSize: "1.15rem",
        marginLeft: "5px",
        fontFamily: 'Abhaya Libre'
    },
    signUp: {
        marginTop: "10%",
        fontFamily: "Gowun",
        fontWeight: "700",
        fontSize: "1rem",
        marginLeft: "2%",
        background: "#2C394B",
        color: "#fff",
        "&:hover": {
            transform: "scale3d(1.05,1.05,1)",
            background: "#2C394B",
            color: "#fff"
        }

    }

}))
function Pricing() {
    const classes = useStyles();
    return (
        <Box className={classes.root} align='center'>

            <Grid sx={{ display: "block", }}>
                <Typography className={classes.title}>
                    Choose Your Plan
                </Typography>
            </Grid>


            <Box className={classes.box}>
                <Card className={classes.cardStyle} >
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.FontTitle}>
                            Regular
                        </Typography>
                        <Typography className={classes.moneyTypo}>
                            0.00 BDT
                        </Typography>
                        <CardMedia>
                            <Grid>
                                <List >
                                    <ListItem>
                                        <CheckIcon />
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography className={classes.Text}>
                                                Online order
                                            </Typography>} />
                                    </ListItem>
                                    <ListItem>
                                        <CheckIcon />
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography className={classes.Text}>
                                                Health card
                                            </Typography>} />
                                    </ListItem>
                                    <ListItem>
                                        <CheckIcon />
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography className={classes.Text}>
                                                Constant online support
                                            </Typography>} />
                                    </ListItem>
                                </List>
                                <Button onClick={()=>{
                                    window.location.href='/signup'
                                }} className={classes.signUp} variant="contained">Sign Up Today</Button>
                            </Grid>
                        </CardMedia>
                    </CardContent>
                </Card>
            </Box>
            <Box className={classes.box}>
                <Card className={classes.cardStyle} >
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.FontTitle}>
                            Organization
                        </Typography>
                        <Typography className={classes.moneyTypo}>
                            2000.00 BDT
                        </Typography>
                        <CardMedia>
                            <Grid>
                                <List >
                                    <ListItem>
                                        <CheckIcon />
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography className={classes.Text}>
                                              Get business report
                                            </Typography>} />
                                    </ListItem>
                                    <ListItem>
                                        <CheckIcon />
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography className={classes.Text}>
                                               Pharmacy management
                                            </Typography>} />
                                    </ListItem>
                                    <ListItem>
                                        <CheckIcon />
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography className={classes.Text}>
                                                Compare your business
                                            </Typography>} />
                                    </ListItem>
                                    <ListItem>
                                        <CheckIcon />
                                        <ListItemText
                                            disableTypography
                                            primary={<Typography className={classes.Text}>
                                                Keep track of inventory
                                            </Typography>} />
                                    </ListItem>
                                </List>
                                <Button onClick={()=>{
                                    window.location.href='/organization-signup'
                                }} className={classes.signUp} variant="contained">Sign Up Today</Button>
                            </Grid>
                        </CardMedia>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default Pricing
