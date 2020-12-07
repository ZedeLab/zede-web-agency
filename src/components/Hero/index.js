import { Button, makeStyles, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import * as animationData from "../../../public/animations/heroAnim.json";
import clx from "classnames";
const useStyle = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    borderRadius: theme.spacing(5),
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
    <div className='section full-screen background-image-side hero'>
      <div className='wrapper'>
        <div className='row'>
          <div className='col'>
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

            <Lottie
              options={defaultOptions}
              height={500}
              width={500}
              className='hero-image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
