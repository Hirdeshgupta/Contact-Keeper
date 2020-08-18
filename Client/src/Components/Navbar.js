import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withRouter } from 'react-router';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonPinSharpIcon from '@material-ui/icons/PersonPinSharp';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PermContactCalendarSharpIcon from '@material-ui/icons/PermContactCalendarSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import {Link} from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
 function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  
  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
  }
  const handleMenu = (event) => {
    setAnchorEl(document.getElementById("menu"));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout =()=>{
    localStorage.setItem('token',' ');
    props.setIsLoggedIn(false);
    props.history.push("/");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          <Link to="/register" style={{color:"white",textDecoration:"none",marginLeft:20}}>
            Contact Kepper
        </Link>
          </Typography>
          <PermContactCalendarSharpIcon style={{marginLeft:10}} />
          {auth && (
            <div id="menu" style={{position:"absolute",top:10,right:0}}>
            <BootstrapTooltip title="Profile">
                            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </BootstrapTooltip>

              <Menu
              style={{position:"absolute"}}
                id="menu-appbar"
                anchorEl={anchorEl}
                // anchorOrigin={{
                //   vertical: 'top',
                //   horizontal: 'right',
                // }}
                // keepMounted
                // transformOrigin={{
                //   vertical: 'top',
                //   horizontal: 'right',
                // }}
                open={open1}
                onClose={handleClose}
              >
                <Link to="/profile/edit" style={{color:"black"}}><MenuItem   onClick={handleClose}>Edit Profile</MenuItem></Link>
                <Link  style={{color:"black"}}><MenuItem onClick={handleLogout}>Log Out</MenuItem></Link>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <List>
            <Link to="/register" style={{color:"black",textDecoration:"none"}}>
            <BootstrapTooltip title="Home">
                <ListItem button >
                    <ListItemIcon><HomeSharpIcon/></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </BootstrapTooltip>
            </Link>
            <Link to="/contacts" style={{color:"black",textDecoration:"none"}}>
            <BootstrapTooltip title="My Contacts">
            <ListItem button >
              <ListItemIcon><PersonPinSharpIcon/></ListItemIcon>
              <ListItemText primary="My Contacts" />
            </ListItem>
            </BootstrapTooltip>
            </Link>
            <Link to="/contacts/add" style={{color:"black",textDecoration:"none"}}>
            <BootstrapTooltip title="Add Contact">
            <ListItem button >
              <ListItemIcon><PersonAddSharpIcon/></ListItemIcon>
              <ListItemText primary="Add Contact" />
            </ListItem>
            </BootstrapTooltip>
            </Link>
            <Link to="/"  style={{color:"black",textDecoration:"none"}}>
            <BootstrapTooltip title="Log Out">

            <ListItem button >
            <ListItemIcon><ExitToAppSharpIcon/></ListItemIcon>
            <ListItemText primary="Log Out" />
            </ListItem>
            </BootstrapTooltip>
            </Link>
 


        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BootstrapTooltip title="Add Contact">
        <Fab color="primary" aria-label="add" style={{position:"absolute",bottom:"auto",right:40}}>
            <AddIcon />
        </Fab>
      </BootstrapTooltip>
        {props.children}


      </main>

    </div>
  );
}
export default withRouter(MiniDrawer);