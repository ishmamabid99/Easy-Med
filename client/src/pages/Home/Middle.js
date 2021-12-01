import React from 'react';
import { Paper, useTheme, useMediaQuery, Typography, Avatar, Icon, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center"
    },
    webPaper: {
        margin: theme.spacing(1.5),
        width: theme.spacing(30),
        height: theme.spacing(50),
        align: "center",
        "&:hover": {
            transform: "scale3d(1.05,1.05,1)"
        }
    },
    mobilePaper: {
        margin: theme.spacing(0.3),
        width: "100%",
        height: theme.spacing(20),
    },
    content: {
        paddingTop: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3)
    },
    contentMbl: {

        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingTop: theme.spacing(3)
    },
    paperWeb: {
        fontFamily: 'Roboto Condensed',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1)

    },
    paperMobile: {
        padding: theme.spacing(2),
        fontFamily: 'Roboto Condensed',
    },
    paragraphContentWeb: {

        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    paragraphContentMobile: {
        padding: theme.spacing(0.8),
    },
    blocks: {
        display: "inline-block",
        width: theme.spacing(16)
    }
}));

export default function Middle() {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div display='flex'>
            <div className={classes.root}>
                {!isMatch ?

                    <>
                        <Link to='span1' smooth={true}>
                            <Paper elevation={3} className={classes.webPaper} id='hello' >
                                <div className={classes.content} align="center">
                                    <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/1686/1686760.png" />
                                </div>
                                <div align="center">
                                    <Typography variant="h5" paragraph={true} className={classes.paperWeb}>
                                        MANAGE YOUR PHARMACY
                                    </Typography>

                                </div>

                                <List >
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Manage accounts" />
                                    </ListItem>
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Sales details" />
                                    </ListItem>
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Compare bussiness" />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Link>
                        <Link to='span2' smooth={true}>
                            <Paper elevation={3} className={classes.webPaper}>
                                <div className={classes.content} align="center">
                                    <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/1027/1027841.png" />
                                </div>
                                <div align="center">
                                    <Typography variant="h5" paragraph={true} className={classes.paperWeb}>
                                        LESS COST OF MEDICINE
                                    </Typography>
                                </div>
                                <List >
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Save money" />
                                    </ListItem>
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Online delivery" />
                                    </ListItem>
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Regular offers" />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Link>
                        <Link to='span3' smooth={true}>
                            <Paper elevation={3} className={classes.webPaper}>
                                <div className={classes.content} align="center">
                                    <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/1097/1097932.png" />
                                </div>
                                <div align="center">
                                    <Typography variant="h5" paragraph={true} className={classes.paperWeb}>
                                        PAITENT'S <br /> HISTORY
                                    </Typography>
                                </div>
                                <List >
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Access to purchases" />
                                    </ListItem>
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Medical Card" />
                                    </ListItem>
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Doctor's help" />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Link>
                        <Link to='span4' smooth={true}>
                            <Paper elevation={3} className={classes.webPaper}>
                                <div className={classes.content} align="center">
                                    <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/784/784712.png" />
                                </div>
                                <div align="center">
                                    <Typography variant="h5" paragraph={true} className={classes.paperWeb}>
                                        EXPAND YOUR BUSSINESS
                                    </Typography>
                                </div>
                                <List >
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Monitor your products" />
                                    </ListItem>
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Scale your bussiness" />
                                    </ListItem>
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Daily sales update" />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Link>
                        <Link to='span5' smooth={true}>
                            <Paper elevation={3} className={classes.webPaper}>
                                <div className={classes.content} align="center">
                                    <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/2438/2438087.png" />
                                </div>
                                <div align="center">
                                    <Typography variant="h5" paragraph={true} className={classes.paperWeb}>
                                        CONSTATNT ONLINE SUPPORT
                                    </Typography>
                                </div>
                                <List >
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="24X7 online medicare" />
                                    </ListItem>
                                    <ListItem>
                                        <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentWeb}>circle</Icon>
                                        <ListItemText primary="Ambulance Service" />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Link>

                    </>
                    :
                    <>

                        <Paper elevation={3} className={classes.mobilePaper} >
                            <Link to='span1'>
                                <Grid container>
                                    <Grid className={classes.blocks}>
                                        <div className={classes.contentMbl} align="left">
                                            <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/1686/1686760.png" />
                                        </div>
                                        <Typography className={classes.paperMobile} >
                                            MANAGE YOUR <br /> PHARMACY
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <List >
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Manage accounts" />
                                            </ListItem>
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Sales details" />
                                            </ListItem>
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Compare bussiness" />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Paper>


                        <Paper elevation={3} className={classes.mobilePaper} >
                            <Link to='/span2'>
                                <Grid container >
                                    <Grid className={classes.blocks}>
                                        <div className={classes.contentMbl} align="left">
                                            <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/1027/1027841.png" />
                                        </div>
                                        <Typography className={classes.paperMobile} >LESS COST <br />OF MEDICINE</Typography>
                                    </Grid>
                                    <Grid>
                                        <List >
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Save money" />
                                            </ListItem>
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Online delivery" />
                                            </ListItem>
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Regular offers" />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Paper>
                        <Paper elevation={3} className={classes.mobilePaper} >
                            <Link to='span3'>
                                <Grid container >
                                    <Grid className={classes.blocks}>
                                        <div className={classes.contentMbl} align="left">
                                            <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/1097/1097932.png" />
                                        </div>
                                        <Typography className={classes.paperMobile} >PAITENT'S  <br /> HISTORY </Typography>
                                    </Grid>
                                    <Grid>
                                        <List >
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Access to purchases" />
                                            </ListItem>
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Medical card" />
                                            </ListItem>
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Doctor's help" />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Paper>
                        <Paper elevation={3} className={classes.mobilePaper} >
                            <Link to='span4'>
                                <Grid container >
                                    <Grid className={classes.blocks}>
                                        <div className={classes.contentMbl} align="left">
                                            <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/784/784712.png" />
                                        </div>
                                        <Typography className={classes.paperMobile} >EXPAND YOUR <br />BUSSINESS</Typography>
                                    </Grid>
                                    <Grid>
                                        <List >
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Monitor your products" />
                                            </ListItem>
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Scale your business" />
                                            </ListItem>
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Daily sales update" />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Paper>

                        <Paper elevation={3} className={classes.mobilePaper} >
                            <Link to='span5'>
                                <Grid container >
                                    <Grid className={classes.blocks}>
                                        <div className={classes.contentMbl} align="left">
                                            <Avatar variant="square" src="https://image.flaticon.com/icons/png/512/2438/2438087.png" />
                                        </div>
                                        <Typography className={classes.paperMobile} >
                                            CONSTATNT <br />ONLINE SUPPORT
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <List >
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="24X7 online medicare" />
                                            </ListItem>
                                            <ListItem>
                                                <Icon style={{ fontSize: 10, color: "black" }} className={classes.paragraphContentMobile}>circle</Icon>
                                                <ListItemText primary="Ambulance Service" />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Paper>
                    </>
                }
            </div>
        </div>

    );
}
