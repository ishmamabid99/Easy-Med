import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import Chart from '@material-ui/icons/Face'
import BorderColor from '@material-ui/icons/Store';
import Inventory from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles(theme => ({
    drawer: {
        marginTop: "9.15vh"
    },
    drawerMobile: {

    },
    typoDrawer: {
        fontFamily: "Abhaya",
        fontWeight: "500",
        fontSize: '1.25rem',
        color: "#2C2E43"
        
    },
    icons: {
        fontSize: '1.5rem',
    },
    menuIconToggle: {
        fontSize: '2rem',
    },
    iconButtonContainer: {
        marginTop: "-1.5rem",
        marginLeft: 'auto',
        color: 'inherit',
    },
    profile: {
        fontFamily: "Abhaya",
        fontSize: "1.2rem",
        fontWeight: "400",
        opacity: '0.7',
        
    }
}));
export default function DrawerAppUser(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const drawerWidth = 380;
    return (
        <div style={{ marginTop: "5rem" }}>
            {!isMatch ?
                <Drawer
                    classes={{
                        paper: classes.drawer
                    }}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant='permanent'
                    anchor="left">
                    <Toolbar >
                        <Typography className={classes.profile}>{props.state.name}</Typography>
                    </Toolbar>
                    <Divider />
                    <List>
                        <ListItem onClick={() => {
                            props.setPage('market');
                        }} id='market' button>
                            <ListItemIcon >
                                <BorderColor className={classes.icons} />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography className={classes.typoDrawer}>Market</Typography>
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => {
                            props.setPage('profile');
                        }} id='profile' button>
                            <ListItemIcon >
                                <Chart className={classes.icons} />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography className={classes.typoDrawer}>Profile</Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
                :
                <>
                    <Drawer
                        onClose={() => setOpenDrawer(false)}
                        open={openDrawer}
                        onOpen={() => setOpenDrawer(true)}
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        anchor="left">
                        <Toolbar >
                            <Typography className={classes.profile}>{props.state.name}</Typography>
                        </Toolbar>
                        <Divider />
                        <List>
                            <ListItem onClick={() => {
                                props.setPage('market');
                            }} id='market' button>
                                <ListItemIcon >
                                    <BorderColor className={classes.icons} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography className={classes.typoDrawer}>Market</Typography>
                                </ListItemText>
                            </ListItem>

                            <ListItem onClick={() => {
                                props.setPage('profile');
                            }} id='profile' button>
                                <ListItemIcon >
                                    <Chart className={classes.icons} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography className={classes.typoDrawer}>Profile</Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Drawer>
                    <IconButton
                        className={classes.iconButtonContainer}
                        onClick={() => setOpenDrawer(!openDrawer)}
                        disableRipple>
                        <MenuIcon className={classes.menuIconToggle} />
                    </IconButton>
                </>
            }
        </div>
    )
}
