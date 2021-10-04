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
    backgroundColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.dark,
    position: "relative",
    bottom: 0,
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
    maxWidth: theme.spacing(55),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "90%",
  },
  subTitle: {
    marginBottom: theme.spacing(2),
  },
  linkContainer: {
    display: "flex",
    "& >*": {
      marginRight: theme.spacing(1),
    },
  },
  email: {
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.light,
  },
  copyright: {
    textAlign: "center",
  },
}));

const Footer = (params) => {
  const classes = useStyle();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

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
    <Paper className={classes.wrapper}>
      <Grid container direction='column' className={classes.container}>
        <Grid item>
          <Grid
            container
            direction={match ? "column" : "row"}
            justifyContent='space-between'
            spacing={3}
          >
            <Grid item xs={match ? 10 : 6}>
              <Grid container direction='column'>
                <a href={router.pathname === "" ? "#" : "/"}>
                  <ReactSVG
                    className={classes.svgContainer}
                    src='/images/logo.svg'
                  />
                </a>
                <Grid item>
                  <Typography className={clsx(classes.text, "ondark")}>
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
                  <Typography>Find Us</Typography>
                </Grid>

                <Grid item className={classes.linkContainer}>
                  <Icon
                    className={clsx(classes.linkIcon, "fab fa-facebook-f")}
                    color='secondary'
                  />
                  <Typography>facebook</Typography>
                </Grid>
                <Grid item className={classes.linkContainer}>
                  <Icon
                    className={clsx(classes.linkIcon, "fab fa-instagram")}
                    color='secondary'
                  />
                  <Typography>instagram</Typography>
                </Grid>
                <Grid item className={classes.linkContainer}>
                  <Icon
                    className={clsx(classes.linkIcon, "fab fa-twitter")}
                    color='secondary'
                  />
                  <Typography>twitter</Typography>
                </Grid>
                <Grid item className={classes.linkContainer}>
                  <Icon
                    className={clsx(classes.linkIcon, "fab fa-linkedin-in")}
                    color='secondary'
                  />
                  <Typography>linkedIn</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <Grid container spacing={1} direction='column'>
                <Grid item>
                  <Typography className={classes.subTitle}>
                    Let&#x27;s Talk
                  </Typography>
                </Grid>
                <Grid item>
                  <a
                    href='mailto: hello@zede.tech'
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      className={clsx(classes.email, "footer-paragraph")}
                    >
                      hello@zede.tech
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs={12} className={classes.copyright}>
          <small>©2020 Zede tech agency. All rights reserved.</small>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
