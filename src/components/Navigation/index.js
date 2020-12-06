import Link from "next/link";
import PropTypes from "prop-types";

// Material-ui components
import {
  Fade,
  Hidden,
  IconButton,
  makeStyles,
  Paper,
  Slide,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// Core components
import NavLink from "./NavLink/NavLink";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  appBar: {
    height: theme.mixins.toolbar,
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
  },
  toolbar: {
    display: "flex",
    flexDirections: "row",
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  mobNavWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
    padding: `${theme.spacing(2)}px 0`,
  },
}));

const navigation = (props) => {
  const classes = useStyle();
  const [showMobNav, setShowMobNav] = useState(false);

  const navLinks = (
    <div className={classes.linkWrapper}>
      <NavLink path='/'>
        <Typography>Home</Typography>
      </NavLink>
      <NavLink path='/'>
        <Typography>About Us</Typography>
      </NavLink>
      <NavLink path='/'>
        <Typography>Our Team</Typography>
      </NavLink>
      <NavLink path='/'>
        <Typography>Blog</Typography>
      </NavLink>
      <NavLink path='/'>
        <Typography>Portfolio</Typography>
      </NavLink>
      <NavLink path='/'>
        <Typography>Contact Us</Typography>
      </NavLink>
    </div>
  );
  return (
    <div
      data-collapse='medium'
      data-animation='default'
      data-duration='400'
      className='nav-bar w-nav'
    >
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className='logo-area'>
              <NavLink path='/' className='nav-logo w-inline-block'>
                <img src='images/Zede-logo.svg' width='106' alt='' />
              </NavLink>
            </div>
            <Hidden smDown>{navLinks}</Hidden>
            <Hidden mdUp>
              <IconButton
                style={{ backgroundColor: "transparent" }}
                onClick={() => setShowMobNav(!showMobNav)}
              >
                <Fade in={!showMobNav}>
                  <MenuIcon />
                </Fade>
                <Fade in={showMobNav}>
                  <CloseIcon />
                </Fade>
              </IconButton>
            </Hidden>
          </Toolbar>
          <Slide direction='down' in={showMobNav}>
            {showMobNav ? (
              <Paper variant='outlined' className={classes.mobNavWrapper}>
                {navLinks}
              </Paper>
            ) : (
              <div />
            )}
          </Slide>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
};

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default navigation;
