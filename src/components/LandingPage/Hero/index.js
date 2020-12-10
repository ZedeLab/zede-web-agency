import { Button, makeStyles, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import * as animationData from "../../../../public/animations/heroAnim.json";
import clx from "classnames";
const useStyle = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    // backgroundColor: "red",
    position: "relative",
    width: "100vw",
  },
  button: {
    margin: theme.spacing(2),
    borderRadius: theme.spacing(5),
  },
  animBackground: {
    // border: "blue solid 10px",
    margin: "auto",
    width: "100%",
    height: "500px",
    position: "absolute",
    opacity: 0.5,
    zIndex: -1,
    bottom: 0,
    left: 0,
  },
}));

const Hero = (params) => {
  const classes = useStyle();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={clx(
        classes.wrapper,
        "section full-screen background-image-side hero"
      )}
    >
      <div className='wrapper'>
        <div className='row'>
          <div className={clx("col", classes.container)}>
            <div className='hero-content'>
              <Typography variant='h1' className='hero-title'>
                Come to us with a vision. <br />
                We’ll help you craft it.
                <br />
              </Typography>
              <p className='hero-description'>
                We build digital product, from idea to design, development to
                marketing &amp; PR to post launch support
              </p>
              <div className='value-proposition-buttons'>
                <Button
                  className={clx(classes.button, "button")}
                  variant='contained'
                  color='secondary'
                >
                  Get free consultation
                </Button>

                <Button
                  className={clx(classes.button, "button")}
                  variant='outlined'
                >
                  Learn more
                </Button>
              </div>
            </div>

            <div className={classes.animBackground}>
              <Lottie
                options={defaultOptions}
                height='100%'
                width='100%'
                maxHeight='500'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
