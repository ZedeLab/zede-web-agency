import { Fade, Grid, makeStyles, Typography } from "@material-ui/core";
import { useOnScreen } from "@zede-hooks/useOnScreen";
import clx from "classnames";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      overflow: "hidden",
    },
    intro: {
      textAlign: "center",
      // padding: theme.spacing(2),
    },
    quote: {
      color: theme.palette.text.primary,
      marginTop: theme.spacing(2),
    },
    sectionTitle: {
      fontSize: "1.6rem",
      lineHeight: 1.8,
      letterSpacing: 1.8,
      fontWeight: 400,
      textTransform: "none",
      color: theme.palette.text.primary,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.3rem",
      },
    },
    subSection: {
      width: "90%",
      paddingTop: theme.spacing(5),
    },
  };
});

const WorkFlowHeader = ({ intro, quote }) => {
  const classes = useStyle();

  const [setRef, visible] = useOnScreen({ threshold: "0.5" });

  return (
    <Grid
      container
      direction='column'
      ref={setRef}
      className={classes.container}
    >
      <Grid item>
        <Fade direction='up' in={visible}>
          <Typography
            variant='h5'
            color='textSecondary'
            className={clx(classes.intro, classes.sectionTitle)}
          >
            {intro}
          </Typography>
        </Fade>
      </Grid>
      <Grid item>
        <Fade direction='up' in={visible} timeout={500}>
          <Typography className={clx(classes.intro, classes.quote)}>
            {quote}
          </Typography>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default WorkFlowHeader;
