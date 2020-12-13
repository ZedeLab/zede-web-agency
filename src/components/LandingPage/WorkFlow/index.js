import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import clx from "classnames";
import { uniqueId } from "lodash";
import data from "./data.json";
import useMainStyle from "../../../utils/style/js/sharedStyle";

const useStyle = makeStyles((theme) => {
  const mainStyle = useMainStyle();
  return {
    wrapper: {
      ...mainStyle.wrapper,
    },
    container: {
      ...mainStyle.container,
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
    subSectionContainer: {
      width: "100%",
    },
    subSectionTitle: {
      paddingBottom: theme.spacing(3),
    },
    subSectionParagraph: {
      color: theme.palette.text.secondary,
      paddingBottom: theme.spacing(2),
    },
  };
});

const WorkFlow = (params) => {
  const classes = useStyle();
  return (
    <Paper className={classes.wrapper}>
      <Grid
        container
        direction='column'
        alignItems='center'
        justify='center'
        className={classes.container}
        style={{
          backgroundImage: `url(/images/dashed-path.png)`,
          backgroundSize: "contain",
        }}
      >
        <Grid item>
          <Typography
            variant='h3'
            className={clx(classes.intro, classes.sectionTitle)}
          >
            {data.intro}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={clx(classes.intro, classes.quote)}>
            {data.quote}
          </Typography>
        </Grid>
        <Grid item className={classes.subSection}>
          {Object.keys(data.sections).map((section, index) => (
            <Grid
              key={uniqueId()}
              container
              alignItems='center'
              direction={index % 2 === 0 ? "row" : "row-reverse"}
              className={classes.subSectionContainer}
            >
              <Grid item xs={12} sm={6}>
                <Typography variant='h3' className={classes.subSectionTitle}>
                  {data.sections[section].title}
                </Typography>
                {Object.keys(data.sections[section].paragraphs).map(
                  (paragraph) => (
                    <Typography
                      key={uniqueId()}
                      className={classes.subSectionParagraph}
                    >
                      {data.sections[section].paragraphs[paragraph]}
                    </Typography>
                  )
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src={data.sections[section].media}
                  width='571'
                  // srcSet='images/funnels-p-500.png 500w, images/funnels-p-800.png 800w, images/funnels.png 877w'
                  sizes='(max-width: 479px) 81vw, (max-width: 767px) 88vw, (max-width: 991px) 44vw, 37vw'
                  alt=''
                  // className='value-proposition-hero-image'
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WorkFlow;
