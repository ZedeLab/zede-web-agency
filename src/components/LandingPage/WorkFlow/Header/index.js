import { Grid, makeStyles, Slide, Typography } from "@material-ui/core";
import { useOnScreen } from "../../../../utils/hooks/useOnScreen";
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
      color: theme.palette.text.hint,
    },
    sectionTitle: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "1.6rem",
      lineHeight: 1.3,
      fontWeight: 300,
      textTransform: "none",

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

  const [setRef, visible] = useOnScreen({ threshold: "1" });

  return (
    <Grid
      container
      direction='column'
      ref={setRef}
      className={classes.container}
    >
      <Grid item>
        <Slide direction='up' in={visible} timeout={800}>
          <Typography
            variant='h3'
            color='textSecondary'
            className={clx(classes.intro, classes.sectionTitle)}
          >
            {intro}
          </Typography>
        </Slide>
      </Grid>
      <Grid item>
        <Slide direction='up' in={visible} timeout={1000}>
          <Typography className={clx(classes.intro, classes.quote)}>
            {quote}
          </Typography>
        </Slide>
      </Grid>
    </Grid>
  );
};

export default WorkFlowHeader;
