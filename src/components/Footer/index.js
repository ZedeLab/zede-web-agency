import {
  Button,
  Divider,
  Grid,
  Icon,
  InputBase,
  makeStyles,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { loadCSS } from "fg-loadcss";
import { useEffect } from "react";
import clsx from "classnames";
import sharedStyle from "../../utils/style/js/sharedStyle";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useRouter } from "next/router";
const Footer = (params) => {
  const useStyle = makeStyles((theme) => {
    const mainStyle = sharedStyle();
    return {
      wrapper: {
        ...mainStyle.wrapper,
        backgroundColor: theme.palette.primary.dark,
        position: "relative",
        bottom: 0,
      },
      container: {
        ...mainStyle.container,
      },
      svgContainer: {
        "& svg": {
          width: "64px",
          height: "64px",
          fill: theme.palette.secondary.dark,
          "& #ze": {
            stroke: theme.palette.primary.dark,
          },
          "& #de": {
            stroke: theme.palette.secondary.dark,
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
    };
  });
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
            justify='space-between'
            spacing={3}
          >
            <Grid item xs={match ? 10 : 6}>
              <Grid container direction='column'>
                <a href={router.pathname === "" ? "#" : "/"}>
                  <ReactSVG
                    className={classes.svgContainer}
                    src='/images/Zede-logo.svg'
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
                    href='mailto: hello@zede.tch'
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      className={clsx(classes.email, "footer-paragraph")}
                    >
                      hello@zede.tch
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
