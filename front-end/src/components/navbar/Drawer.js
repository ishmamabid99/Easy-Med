import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const DrawerComponent = () => {
  const useStyles = makeStyles(theme => ({

    drawerContainer: {}
    ,
    iconButtonContainer: {
      marginLeft: 'auto',
      color: 'inherit',
    },

    menuIconToggle: {
      fontSize: '3rem',
    },

  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor='right'
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}>
        <List>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={() => { window.location.href = '/' }}> Home</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText> Pricing</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText> User Guide</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={() => {
                window.location.href = '/login'
               }
              }>Login</ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={()=>{
                window.location.href='/signup'
              }}> Signup</ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
