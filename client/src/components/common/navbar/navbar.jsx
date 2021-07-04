// core
import React, {useState} from 'react';
// styles
import "./navbar.scss";
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// auth0
import { useAuth0 } from "@auth0/auth0-react";
// components
import LogoutButton from "components/auth0/logout_button";
// material-ui
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#2a303a"
  },
  userButton: {
    textTransform: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  // material-ui
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // auth0 hook
  const { isAuthenticated, user } = useAuth0();
  // material-ui handlers 
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // render component
  return (
    <header className="navbar">
      <div position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span>F</span>&nbsp;<span className="logo-description">Striming</span>
          </Typography>
          <div>
            {
              user && (
                <Button
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  className={classes.userButton}
                  color="inherit">{user.email}</Button>
              ) 
            }
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}>
                <MenuItem onClick={handleClose}>{
                  isAuthenticated
                  ? <LogoutButton />
                  : ""
                }</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </div>
    </header>
  );
}
export default React.memo(Navbar);
