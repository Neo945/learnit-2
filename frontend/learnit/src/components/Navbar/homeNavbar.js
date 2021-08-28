import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'; 
// import ModalDialog from './ModalDialog';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const buttonStyle = {color: "white", textDecoration: "none", marginRight: "2rem"};

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
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
          <Link to='/' style={buttonStyle}>Learn It</Link>
        </Typography>
        <Typography variant="h6" noWrap><Link to='/sign-up' style={buttonStyle}>Sign Up</Link></Typography>
        <Typography variant="h6" noWrap><Link to='/sign-in' style={buttonStyle}>Sign In</Link></Typography>
      </Toolbar>
      {/* <ModalDialog open={open} handleClose={handleClose} /> */}
    </AppBar>
  );
};

export default Navbar;
