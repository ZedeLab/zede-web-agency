import Link from "next/link";
import PropTypes from "prop-types";

// Material-ui components
import {
  Button,
  ClickAwayListener,
  Fade,
  Hidden,
  IconButton,
  makeStyles,
  Paper,
  Slide,
  Tab,
  Tabs,
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
import { Router, useRouter } from "next/router";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 0,
    margin: 0,
  },
  appBar: {
    // position: "relative",
    height: "fit-content",
    width: "100vw",
    overflow: "hidden",
  },
  toolbar: {
    display: "flex",
    flexDirections: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  mobNavWrapper: {
    position: "fixed",
    zIndex: 200,
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
    paddingTop: theme.spacing(15),
    boxShadow: theme.shadows[0],
  },
}));

const navigation = (props) => {
  const classes = useStyle();
  const [showMobNav, setShowMobNav] = useState(false);
  const route = useRouter();
  const trigger = useScrollTrigger();
  const clicked = (path) => {
    route.push(path);
  };
  const navLinks = (
    <div
      className={classes.linkWrapper}
      onClickCapture={() => setShowMobNav(false)}
    >
      <NavLink path='/'>Home</NavLink>
      <NavLink path='/aboutus'>About Us</NavLink>
      <NavLink path='/team'>Our Team</NavLink>
      <NavLink path='/portfolios'>Portfolio</NavLink>
      <NavLink path='/contactus'>Contact Us</NavLink>
    </div>
  );
  return (
    <Slide
      appear={false}
      direction='down'
      in={!trigger}
      className={classes.wrapper}
    >
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <NavLink path='/' className='nav-logo w-inline-block'>
              <img src='/images/Zede-logo-white.svg' width='106' alt='' />
            </NavLink>
            <Hidden smDown>{navLinks}</Hidden>
            <Hidden mdUp>
              <IconButton
                style={{ backgroundColor: "transparent" }}
                onClick={() => setShowMobNav(!showMobNav)}
              >
                <Fade
                  in={!showMobNav}
                  unmountOnExit
                  timeout={{
                    enter: 600,
                    exit: 100,
                  }}
                >
                  <MenuIcon color='secondary' />
                </Fade>
                <Fade
                  in={showMobNav}
                  unmountOnExit
                  timeout={{
                    enter: 500,
                    exit: 200,
                  }}
                >
                  <CloseIcon color='secondary' />
                </Fade>
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Slide direction='down' in={showMobNav && !trigger} unmountOnExit>
            <Paper variant='outlined' className={classes.mobNavWrapper}>
              <ClickAwayListener onClickAway={() => setShowMobNav(false)}>
                {navLinks}
              </ClickAwayListener>
            </Paper>
          </Slide>
        </Hidden>
      </div>
    </Slide>
  );
};

export default navigation;
