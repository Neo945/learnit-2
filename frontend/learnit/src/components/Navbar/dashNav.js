import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    background: "#f24334",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const buttonStyle = { color: "white", textDecoration: "none", marginRight: "2rem" };

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Learn It
        </Typography>
        <Typography variant="h6" noWrap><Link to='/' style={buttonStyle}>Dashboard</Link></Typography>
        <Typography variant="h6" noWrap><Link to='/assignments' style={buttonStyle}>Assignments</Link></Typography>
        <Typography variant="h6" noWrap><Link to='/calendar' style={buttonStyle}>Calendar</Link></Typography>
        <Typography variant="h6" noWrap><Link to='/' style={buttonStyle}>Logout</Link></Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
