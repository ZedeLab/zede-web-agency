import { Grid, makeStyles, Paper } from "@material-ui/core";
import { uniqueId } from "lodash";

import data from "@zede-static/workflow.json";
import useMainStyle from "../../../utils/style/js/sharedStyle";
import Header from "./Header";
import Section from "./Section";

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
        justifyContent='center'
        className={classes.container}
        style={{
          backgroundImage: `url(/images/dashed-path.webp)`,
          backgroundSize: "contain",
          // backgroundRepeat: matches ? "repeat" : "no-repeat",
        }}
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
