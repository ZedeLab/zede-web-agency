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
    // ,
  },
  toolbar: {
    display: "flex",
    flexDirections: "row",
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  mobNavWrapper: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
    paddingTop: `${theme.spacing(15)}px `,
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
      <NavLink path='/aboutus'>
        <Typography>About Us</Typography>
      </NavLink>
      <NavLink path='/team'>
        <Typography>Our Team</Typography>
      </NavLink>
      <NavLink path='/portfolio'>
        <Typography>Portfolio</Typography>
      </NavLink>
      <NavLink path='/contactus'>
        <Typography>Contact Us</Typography>
      </NavLink>
    </div>
  );
  return (
    <HideOnScroll {...props}>
      <div>
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
                <Fade
                  in={!showMobNav}
                  unmountOnExit
                  timeout={{
                    enter: 600,
                    exit: 100,
                  }}
                >
                  <MenuIcon />
                </Fade>
                <Fade
                  in={showMobNav}
                  unmountOnExit
                  timeout={{
                    enter: 500,
                    exit: 200,
                  }}
                >
                  <CloseIcon />
                </Fade>
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Slide direction='down' in={showMobNav} unmountOnExit>
            <Paper variant='outlined' className={classes.mobNavWrapper}>
              {navLinks}
            </Paper>
          </Slide>
        </Hidden>

        {!showMobNav ? <Toolbar /> : null}
      </div>
    </HideOnScroll>
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
