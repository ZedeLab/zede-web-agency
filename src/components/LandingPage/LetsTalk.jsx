import {
  Button,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import clx from "classnames";
import Lottie from "react-lottie-player";
import * as animationData from "../../../public/animations/contactUs.json";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";

const useStyle = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[0],
    width: "100vw",
    maxWidth: "100%",
  },
  svgContainer: {
    position: "relative",
  },
  svg: {
    position: "relative",
    bottom: "-0.49rem",

    right: 0,
    "& svg": {
      fill: theme.palette.common.black,
      // stroke: theme.palette.primary.main,
    },
  },
  wrapper: {
    borderRadius: 0,
    padding: `${theme.spacing(6)}px 0px`,
    width: "100vw",
    maxWidth: "100%",
    overflow: "hidden",
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.common.black,
  },

  container: {
    width: "70vw",
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  microHeading: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
  },
  sectionHeading: {
    fontWeight: 600,
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
  },

  text: {
    marginBottom: theme.spacing(5),
    color: theme.palette.text.secondary,
  },
  button: {
    // color: theme.palette.common.white,
    paddingTop: "16px",
    paddingBottom: "16px",
    boxShadow: "0 4px 11px 0 rgba(117, 69, 1, 0.33)",
  },
}));

const LetsTalk = (params) => {
  const classes = useStyle();
  const router = useRouter();

  return (
    <Paper className={classes.root}>
      <div className={classes.svgContainer}>
        <ReactSVG className={classes.svg} src='/images/divider-right.svg' />
      </div>
      <Paper className={classes.wrapper}>
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.container}
        >
          <Grid item xs={12} md={6}>
            <Typography className={classes.microHeading}>
              lets work together
            </Typography>
            <Typography variant='h2' className={classes.sectionHeading}>
              Great vision without great people is irrelevant.
              <br />
            </Typography>
            <Typography variant='body1' className={classes.text}>
              A new project is an opportunity to create something unique. <br />
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              className={clx(classes.button, "button")}
              onClick={() => router.push("/contact")}
            >
              Let&#x27;s Talk
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Hidden smDown>
              <Lottie
                animationData={animationData}
                loop
                play
                style={{ width: "100%", height: "100%", maxHeight: "500px" }}
              />
            </Hidden>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default LetsTalk;
