import {
  Button,
  Fade,
  Grid,
  makeStyles,
  Slide,
  Typography,
} from "@material-ui/core";
import { useOnScreen } from "@zede-hooks/useOnScreen";
import { useRouter } from "next/router";

const useStyle = makeStyles((theme) => {
  return {
    title: {
      fontFamily: "Montserrat, sans-serif",
      lineHeight: 1.15,
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(5),
    },

    text: {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(3),
    },
    button: {
      borderRadius: theme.spacing(5),
      width: "fit-content",
    },
  };
});

const WorkFlowHeader = ({ microTitle, title, text }) => {
  const classes = useStyle();

  const [setRef, visible] = useOnScreen({ threshold: "0.25" });
  const router = useRouter();
  return (
    <Fade in={visible} timeout={1500}>
      <div ref={setRef}>
        <Typography variant='body2' className={classes.text}>
          {microTitle}
        </Typography>
        <Typography variant='h3' className={classes.title}>
          {title}
        </Typography>
        <Typography variant='subtitle1' className={classes.text}>
          {text}
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          onClick={() => router.push("/contact#contact-form")}
        >
          Get free consultation
        </Button>
      </div>
    </Fade>
  );
};

export default WorkFlowHeader;
