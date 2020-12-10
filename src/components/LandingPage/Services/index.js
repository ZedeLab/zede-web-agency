import { Button, makeStyles, Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import data from "./data.json";
import clx from "classnames";
import { uniqueId } from "lodash";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    borderRadius: theme.spacing(5),
  },
}));
const Services = (params) => {
  const classes = useStyle();
  const animOptions = (anim) => ({
    loop: true,
    autoplay: true,
    animationData: anim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  return (
    <div className={clx(classes.wrapper, "section services bgaccent-color")}>
      <div className='w-layout-grid grid'>
        <div
          id='w-node-a90a4bea48e4-1508a948'
          className='div-block-10 margin-bottom'
        >
          <Typography variant='body2' className='micro-heading'>
            {data.sectionMicroTitle}
          </Typography>
          <Typography
            variant='h3'
            className='section-heading left-aligned no-margin-top'
          >
            {data.sectionTitle}
          </Typography>
          <Typography
            variant='body2'
            className='section-title fullwidth-grid margin-bottom'
          >
            {data.sectionParagraph}
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            className={clx(classes.button, "button margin-left w-button")}
          >
            Get free consultation
          </Button>
        </div>
        {Object.keys(data.services).map((title) => (
          <div
            id='w-node-f3c27ee0b5e0-1508a948'
            className='margin-bottom'
            key={uniqueId()}
          >
            <img
              src={data.services[title].img}
              width='64'
              alt=''
              className='small-margin-bottom'
            />
            <Typography variant='h4'>{title}</Typography>
            <Typography
              variant='body1'
              className='paragraph-small short-paragraph'
            >
              {data.services[title].content}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
