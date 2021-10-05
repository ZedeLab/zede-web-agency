import {
  Divider,
  Grid,
  Icon,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { loadCSS } from "fg-loadcss";
import { useEffect } from "react";
import clsx from "classnames";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    borderRadius: 0,
    padding: `${theme.spacing(6)}px 0px`,
    width: "100vw",
    maxWidth: "100%",
    overflow: "hidden",
    boxShadow: theme.shadows[0],
    padding: `${theme.spacing(6)}px ${theme.spacing(5)}px`,

    position: "relative",
    bottom: 0,
  },
  light: {
    backgroundColor: theme.palette.common.white,
  },
  dark: {
    backgroundColor: theme.palette.common.black,
  },
  container: {
    width: "70vw",
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  svgContainer: {
    "& svg": {
      width: "150px",
      height: "100px",
      justifySelf: "flex-end",
      fill: theme.palette.secondary.dark,

      "& #monitor": {
        stroke: theme.palette.secondary.dark,
        fill: "transparent",
      },
    },
  },
  text: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "90%",
    textAlign: "justify",
  },
  textLight: {
    color: theme.palette.text.secondary,
  },
  textDark: {
    color: theme.palette.text.primary,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    "& >*": {
      marginRight: theme.spacing(1),
      textTransform: "capitalize",
    },
  },
  email: {
    color: theme.palette.secondary.main,
  },
  copyright: {
    textAlign: "center",
  },
  divider: {
    margin: `${theme.spacing(3)}px 0px`,
  },
}));

const Footer = (params) => {
  const classes = useStyle();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <Paper
      className={clsx(classes.wrapper, {
        [classes.light]: isHomePage,
        [classes.dark]: !isHomePage,
      })}
    >
      <Grid container direction='column' className={classes.container}>
        <Grid item>
          <Grid
            container
            direction={match ? "column" : "row"}
            justifyContent='space-between'
            spacing={3}
          >
            <Grid item xs={match ? 12 : 6}>
              <Grid container direction='column'>
                <a href={router.pathname === "" ? "#" : "/"}>
                  <ReactSVG
                    className={classes.svgContainer}
                    src={
                      isHomePage
                        ? "/images/logo.svg"
                        : "/images/logo_darkTheme.svg"
                    }
                  />
                </a>
                <Grid item>
                  <Typography
                    varian='body1'
                    className={clsx(
                      classes.text,
                      {
                        [classes.textDark]: isHomePage,
                        [classes.textLight]: !isHomePage,
                      },
                      classes.zedeInfo
                    )}
                  >
                    From empowering challenger brands to think big to helping
                    global brands feel closer to home, we leverage technology to
                    bring people closer to the products, content, and
                    experiences they love.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {match ? (
              <Divider orientation='horizontal' variant='middle' />
            ) : null}
            <Grid item xs={3}>
              <Grid container spacing={1} direction='column'>
                <Grid item className={classes.subTitle}>
                  <Typography>
                    <strong
                      className={clsx(
                        classes.text,
                        {
                          [classes.textDark]: isHomePage,
                          [classes.textLight]: !isHomePage,
                        },
                        classes.title
                      )}
                    >
                      Find Us
                    </strong>
                  </Typography>
                </Grid>

                <Grid item className={classes.linkContainer}>
                  <Icon
                    className={clsx(classes.linkIcon, "fab fa-facebook-f")}
                    color='secondary'
                  />
                  <Typography
                    className={clsx(
                      classes.text,
                      {
                        [classes.textDark]: isHomePage,
                        [classes.textLight]: !isHomePage,
                      },
                      classes.link
                    )}
                  >
                    facebook
                  </Typography>
                </Grid>
                <Grid item className={classes.linkContainer}>
                  <Icon
                    className={clsx(classes.linkIcon, "fab fa-instagram")}
                    color='secondary'
                  />
                  <Typography
                    className={clsx(
                      classes.text,
                      {
                        [classes.textDark]: isHomePage,
                        [classes.textLight]: !isHomePage,
                      },
                      classes.link
                    )}
                  >
                    instagram
                  </Typography>
                </Grid>
                <Grid item className={classes.linkContainer}>
                  <Icon
                    className={clsx(classes.linkIcon, "fab fa-twitter")}
                    color='secondary'
                  />
                  <Typography
                    className={clsx(
                      classes.text,
                      {
                        [classes.textDark]: isHomePage,
                        [classes.textLight]: !isHomePage,
                      },
                      classes.link
                    )}
                  >
                    twitter
                  </Typography>
                </Grid>
                <Grid item className={classes.linkContainer}>
                  <Icon
                    className={clsx(classes.linkIcon, "fab fa-linkedin-in")}
                    color='secondary'
                  />
                  <Typography
                    className={clsx(
                      classes.text,
                      {
                        [classes.textDark]: isHomePage,
                        [classes.textLight]: !isHomePage,
                      },
                      classes.link
                    )}
                  >
                    linkedIn
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography
                    className={clsx(
                      classes.text,
                      {
                        [classes.textDark]: isHomePage,
                        [classes.textLight]: !isHomePage,
                      },
                      classes.title
                    )}
                  >
                    <strong>Let&#x27;s Talk</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <a
                    href='mailto: hello@zede.tech'
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      className={clsx(
                        classes.text,
                        {
                          [classes.textDark]: isHomePage,
                          [classes.textLight]: !isHomePage,
                        },
                        classes.email
                      )}
                    >
                      hello@zede.tech
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid
          item
          xs={12}
          className={clsx(
            classes.text,
            {
              [classes.textDark]: isHomePage,
              [classes.textLight]: !isHomePage,
            },
            classes.copyright
          )}
        >
          <small>©2020 Zede tech agency. All rights reserved.</small>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
