import cNames from "classnames";

// Material-ui components
import {
  ClickAwayListener,
  Fade,
  Hidden,
  IconButton,
  makeStyles,
  Paper,
  Slide,
} from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// Core components
import NavLink from "./NavLink";
import { useState } from "react";
import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";
import { useOnScreen } from "@zede-hooks/useOnScreen";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 0,
    margin: 0,
    width: "100vw",
    maxWidth: "100%",
    position: "relative",
  },

  pillow: {
    height: theme.mixins.toolbar.minHeight,
  },
  blurBox: {
    width: "100vw",
    height: theme.mixins.toolbar.minHeight,
    position: "fixed",
    zIndex: 300,
    top: 0,
    backgroundColor: "white",
    opacity: 0.7,
    filter: "grayscale(80%)",
  },

  appBar: {
    zIndex: 1000,
    opacity: 0.95,
    height: theme.mixins.toolbar.minHeight,
    backgroundColor: "white",
    width: "100%",
    overflow: "hidden",
    transition: `${theme.transitions.create(["box-shadow"], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeIn,
    })}`,
  },
  toolbar: {
    display: "flex",
    flexDirections: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      // width: "100%",
    },
  },

  mobNavWrapper: {
    position: "fixed",
    zIndex: 200,

    display: "flex",
    width: "100%",
    flexDirection: "column",
    color: "inherit",
    backgroundColor: theme.palette.primary.light,

    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    boxShadow: theme.shadows[1],
    border: "none",
    borderRadius: 0,
  },
  svgContainer: {
    transition: `${theme.transitions.create(["transform", "padding"], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeIn,
    })}`,
    "& svg": {
      width: "150px",
      height: "100%",
      justifySelf: "flex-end",
      fill: theme.palette.secondary.dark,

      "& #monitor": {
        stroke: theme.palette.secondary.dark,
        fill: "transparent",
      },
    },
  },
  noShadow: {
    boxShadow: "none",
  },
  onPageTop: {
    paddingTop: theme.spacing(1),
    // transform: "scale(1.1)",
  },
}));

const Navigation = (props) => {
  const classes = useStyle();
  const [showMobNav, setShowMobNav] = useState(false);
  const route = useRouter();

  const [setRef, visible] = useOnScreen({ threshold: "0" });

  const navLinks = (
    <div
      className={classes.linkWrapper}
      onClickCapture={() => setShowMobNav(false)}
    >
      <div className={classes.pillow} />
      <NavLink path='/'>Home</NavLink>
      <NavLink path='/about'>About Us</NavLink>
      <NavLink path='/team'>Our Team</NavLink>
      <NavLink path='/portfolios'>Portfolio</NavLink>
      <NavLink path='/contact'>Contact Us</NavLink>
    </div>
  );
  return (
    <div ref={setRef} className={classes.wrapper}>
      {/* <div className={classes.pillow} /> */}
      <div className={classes.blurBox} />
      <AppBar
        className={cNames(classes.appBar, { [classes.noShadow]: visible })}
      >
        <Toolbar className={classes.toolbar}>
          <NavLink path='/'>
            <ReactSVG
              className={cNames(classes.svgContainer, {
                [classes.onPageTop]: showMobNav | visible,
              })}
              src='/images/v-logo.svg'
            />
            {/* <img src='/images/Zede-logo.svg' width='60' alt='' /> */}
          </NavLink>
          <Hidden smDown>{navLinks}</Hidden>
          <Hidden mdUp>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              onClick={() => setShowMobNav(!showMobNav)}
            >
              {showMobNav ? (
                <Fade in>
                  <CloseIcon color='secondary' />
                </Fade>
              ) : (
                <Fade in>
                  <MenuIcon color='secondary' />
                </Fade>
              )}
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Slide direction='down' in={showMobNav} unmountOnExit>
          <Paper variant='outlined' className={classes.mobNavWrapper}>
            <ClickAwayListener onClickAway={() => setShowMobNav(false)}>
              {navLinks}
            </ClickAwayListener>
          </Paper>
        </Slide>
      </Hidden>
    </div>
  );
};

export default Navigation;
