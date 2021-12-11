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
import {Link} from 'react-scroll'
const DrawerComponent = (props) => {
  const { button1, button2, button3, button4 } = props;
  const useStyles = makeStyles(theme => ({

    drawerContainer: {
     fill:'#42bdff'
    }
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
  const handleClick = () => {
    window.location.href = '/'
  }
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
        {!button1?<></>:
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={handleClick}> {button1}</ListItemText>
            </ListItemIcon>
          </ListItem>
        }
        {!button2?<></>:
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>{button2}</ListItemText>
            </ListItemIcon>
          </ListItem>
        }
        {!button3?<></>:
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>{button3}</ListItemText>
            </ListItemIcon>
          </ListItem>
        }
        {!button4?<></>:
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <Link to='contact'>
                <ListItemText>{button4}</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
        }
          {props.state ?
            <>
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
                  <ListItemText onClick={() => {
                    window.location.href = '/signup'
                  }}> Signup</ListItemText>
                </ListItemIcon>
              </ListItem>
            </>
            :
            <></>
          }
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
