import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Lottie from "react-lottie-player";
import * as animationData from "../../../../public/animations/heroAnim.json";
import clsx from "classnames";
import { useRouter } from "next/router";
const useStyle = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.dark,
    position: "relative",
    width: "100vw",
    maxWidth: "100%",
    height: "100vh",
    minHeight: "900px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },
  container: {
    zIndex: 1,
    margin: 0,
  },
  section: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  text: {
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
  },

  heroTitle: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "3rem",
    lineHeight: 1.1,
    fontWeight: 900,
    textTransform: "uppercase",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  herodescription: {
    textAlign: "justify",
    maxWidth: "700px",
    marginRight: "auto",
    marginBottom: "0px",
    marginLeft: "auto",
    fontSize: "22px",
    lineHeight: 1.4,
    fontWeight: 400,
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },

  button: {
    margin: theme.spacing(2),
    borderRadius: theme.spacing(5),
  },
  animBackground: {
    // border: "blue solid 10px",
    margin: "auto",
    width: "100%",
    height: "100vh",
    minHeight: "900px",
    position: "absolute",
    opacity: 0.5,
    zIndex: 0,
    top: 0,
    left: 0,
    stroke: theme.palette.secondary.dark,
    strokeWidth: 0,
    strokeOpacity: 0.5,
    fill: theme.palette.secondary.dark,
  },
}));

const Hero = (params) => {
  const classes = useStyle();
  const router = useRouter();
  // const animOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData.default,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <Paper className={classes.wrapper}>
      <Grid
        container
        direction='column'
        alignItems='center'
        className={classes.container}
        spacing={5}
      >
        <Grid item className={classes.section}>
          <Typography className={clsx(classes.text, classes.heroTitle)}>
            Come to us with a vision. <br />
            We’ll help you craft it.
            <br />
          </Typography>
          <Typography className={clsx(classes.text, classes.herodescription)}>
            From idea to design &amp; development to post launch support. Zede
            tech develops cost efficient, future proof solutions for companies
            that aim for impact.
          </Typography>
        </Grid>
        <Grid item className={classes.section}>
          <div>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              onClick={() => router.push("/contact")}
            >
              Get free consultation
            </Button>

            <Button
              className={clsx(classes.button, "button")}
              variant='outlined'
              color='secondary'
              onClick={() => router.push("/#landing-services")}
            >
              Learn more
            </Button>
          </div>
        </Grid>
      </Grid>

      <div className={classes.animBackground}>
        <Lottie
          loop
          play
          animationData={animationData}
          style={{
            width: "100%",
            height: "900px",
          }}
        />
      </div>
    </Paper>
  );
};

export default Hero;
