import { Grid, makeStyles, Paper } from "@material-ui/core";
import { uniqueId } from "lodash";

import Header from "./Header";
import Section from "./Section";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    borderRadius: 0,
    padding: `${theme.spacing(2)}px 0px`,
    width: "100vw",
    maxWidth: "100%",
    overflow: "hidden",
    boxShadow: theme.shadows[0],
  },

  container: {
    width: "70vw",
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },

  sectionTitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "1.6rem",
    lineHeight: 1.3,
    fontWeight: 300,
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
}));

const WorkFlow = ({ data }) => {
  const classes = useStyle();
  return (
    <Paper className={classes.wrapper}>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        className={classes.container}
      >
        <Grid item>
          <Header intro={data.intro} quote={data.quote} />
        </Grid>

        <Grid item className={classes.subSection}>
          {Object.keys(data.sections).map((section, index) => (
            <Section
              key={uniqueId()}
              index={index}
              title={data.sections[section].title}
              mediaUrl={data.sections[section].media}
              paragraphs={data.sections[section].paragraphs}
            />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WorkFlow;
