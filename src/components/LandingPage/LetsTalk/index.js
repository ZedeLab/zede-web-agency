import {
  Button,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import clx from "classnames";
import useCommonStyle from "../../../utils/style/js/sharedStyle";
import Lottie from "react-lottie";
import * as animationData from "../../../../public/animations/contactUs.json";
import { ReactSVG } from "react-svg";

const useStyle = makeStyles((theme) => {
  const mainStyle = useCommonStyle();
  return {
    root: {
      boxShadow: theme.shadows[0],
      width: "100vw",
    },
    svgContainer: {
      position: "relative",
    },
    svg: {
      position: "relative",
      bottom: "-0.48rem",
      left: 0,
      "& svg": {
        fill: theme.palette.primary.main,
        // stroke: theme.palette.primary.main,
      },
    },
    wrapper: {
      ...mainStyle.wrapper,
      backgroundColor: theme.palette.primary.main,
    },

    container: {
      ...mainStyle.container,
    },
    microHeading: {
      ...mainStyle.microHeading,
    },
    sectionHeading: {
      ...mainStyle.sectionHeading,
      marginBottom: theme.spacing(3),
    },

    text: {
      marginBottom: theme.spacing(5),
    },
    button: {
      // color: theme.palette.common.white,
      paddingTop: "16px",
      paddingBottom: "16px",
      boxShadow: "0 4px 11px 0 rgba(117, 69, 1, 0.33)",
    },
  };
});

const LetsTalk = (params) => {
  const classes = useStyle();

  const animOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
            <Typography color='textPrimary' className={classes.microHeading}>
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
            >
              Let&#x27;s Talk
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Hidden smDown>
              <Lottie
                options={animOptions}
                height='100%'
                width='100%'
                maxHeight='500'
              />
            </Hidden>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default LetsTalk;
