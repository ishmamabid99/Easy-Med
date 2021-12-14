import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import User from '@material-ui/icons/VerifiedUser'
import React from 'react'
import Explore
    from '@material-ui/icons/Explore'
const useStyles = makeStyles((theme) => ({
    drawer: {
        marginTop: "9.5vh",
        width: "15rem"
    },
    title: {
        marginLeft: "2.5rem",
        fontFamily: "Abhaya libre",
        fontSize: "2rem",
        color: 'grey',
        fontWeight: "600"
    }
}))
export default function HomeDrawer(props) {
    const classes = useStyles();
    const drawerWidth = 380
    return (
        <div>
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
                <Toolbar>
                    <Typography align='center' className={classes.title}>ADMIN</Typography>
                </Toolbar>
                <List>
                    <ListItem divider button onClick={() => { props.setPage('USER') }}>
                        <ListItemIcon><User /></ListItemIcon>
                        <ListItemText> Verified Users</ListItemText>
                    </ListItem>
                    <ListItem divider button onClick={() => { props.setPage('ORGANIZATION') }}>
                        <ListItemIcon><User /></ListItemIcon>
                        <ListItemText>Verified Organization</ListItemText>
                    </ListItem>
                    <ListItem divider button onClick={() => { props.setPage('MAP') }}>
                        <ListItemIcon><Explore /></ListItemIcon>
                        <ListItemText>Show All Organization</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}
