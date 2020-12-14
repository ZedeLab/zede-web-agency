import { Button, makeStyles, Slide, Typography } from "@material-ui/core";

import data from "./data.json";
import clx from "classnames";
import { uniqueId } from "lodash";
import { useOnScreen } from "../../../utils/hooks/useOnScreen";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  text: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
  },

  title: {
    fontFamily: "Montserrat, sans-serif",
    lineHeight: 1.15,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(5),
  },
  button: {
    borderRadius: theme.spacing(5),
  },
}));
const Services = (params) => {
  const classes = useStyle();
  const [setRef, visible] = useOnScreen({ threshold: "0.15" });
  let timeout = 300;
  return (
    <div
      ref={setRef}
      className={clx(classes.wrapper, "section services bgaccent-color")}
    >
      <div className='w-layout-grid grid'>
        <Slide in={visible} direction='up' timeout={500}>
          <div
            id='w-node-a90a4bea48e4-1508a948'
            className='div-block-10 margin-bottom'
          >
            <Typography
              variant='body2'
              className={clx(classes.text, "micro-heading")}
            >
              {data.sectionMicroTitle}
            </Typography>
            <Typography
              variant='h3'
              className={clx(classes.title, "left-aligned no-margin-top")}
            >
              {data.sectionTitle}
            </Typography>
            <Typography
              variant='subtitle1'
              className={clx(classes.text, "fullwidth-grid margin-bottom")}
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
        </Slide>
        {Object.keys(data.services).map((title) => {
          return (
            <Slide
              key={uniqueId()}
              direction='left'
              in={visible}
              timeout={(timeout += 100)}
            >
              <div id='w-node-f3c27ee0b5e0-1508a948' className='margin-bottom'>
                <img
                  src={data.services[title].img}
                  width='64'
                  alt=''
                  className='small-margin-bottom'
                />
                <Typography variant='h4' color='secondary'>
                  {title}
                </Typography>
                <Typography
                  variant='body1'
                  className='paragraph-small short-paragraph'
                >
                  {data.services[title].content}
                </Typography>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
