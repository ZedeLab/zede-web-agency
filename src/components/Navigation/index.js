import cNames from "classnames";
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
} from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// Core components
import NavLink from "./NavLink/NavLink";
import { useState } from "react";
import { Router, useRouter } from "next/router";
import { ReactSVG } from "react-svg";
import { useOnScreen } from "@zede-hooks/useOnScreen";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 0,
    margin: 0,
    width: "100vw",
    maxWidth: "100%",
  },

  pillow: {
    height: theme.spacing(5),
  },
  appBar: {
    // position: "relative",
    height: theme.mixins.toolbar,
    backgroundColor: theme.palette.primary.dark,
    width: "100%",
    overflow: "hidden",
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
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    boxShadow: theme.shadows[0],
    border: "none",
    borderRadius: 0,
  },
  svgContainer: {
    "& svg": {
      borderRadius: "5px",
      width: "48px",
      height: "48px",
      justifySelf: "flex-end",
      fill: theme.palette.secondary.dark,
      "& #ze": {
        stroke: theme.palette.primary.dark,
      },
      "& #de": {
        stroke: theme.palette.secondary.dark,
      },
    },
  },
  noShadow: {
    boxShadow: "none",
  },
  withShadow: {
    "& svg": {
      boxShadow: theme.shadows[6],
    },
  },
}));

const navigation = (props) => {
  const classes = useStyle();
  const [showMobNav, setShowMobNav] = useState(false);
  const route = useRouter();

  const [setRef, visible] = useOnScreen({ threshold: "0" });

  const clicked = (path) => {
    route.push(path);
  };
  const navLinks = (
    <div
      className={classes.linkWrapper}
      onClickCapture={() => setShowMobNav(false)}
    >
      <div className={classes.pillow} />
      <NavLink path='/' underLine>
        Home
      </NavLink>
      <NavLink path='/about' underLine>
        About Us
      </NavLink>
      <NavLink path='/team' underLine>
        Our Team
      </NavLink>
      <NavLink path='/portfolios' underLine>
        Portfolio
      </NavLink>
      <NavLink path='/contact' underLine>
        Contact Us
      </NavLink>
    </div>
  );
  return (
    <div ref={setRef}>
      <div className={classes.pillow} />
      <AppBar
        className={cNames(classes.appBar, { [classes.noShadow]: visible })}
      >
        <Toolbar className={classes.toolbar}>
          <NavLink path='/'>
            <ReactSVG
              className={cNames(classes.svgContainer, {
                [classes.withShadow]: visible,
              })}
              src='/images/Zede-logo.svg'
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

export default navigation;
