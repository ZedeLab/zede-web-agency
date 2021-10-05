import { Grid, makeStyles, Paper } from "@material-ui/core";

import { ReactSVG } from "react-svg";
import Section from "./Section";
import Header from "./Header";

const useStyle = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[0],
    width: "100vw",
    maxWidth: "100%",
  },
  svgContainer: {
    position: "relative",
  },
  svg: {
    position: "relative",
    width: "75vw",
    bottom: "-0.48rem",
    "& svg": {
      fill: theme.palette.common.black,

      margin: 0,
    },
  },
  wrapper: {
    borderRadius: 0,
    padding: `${theme.spacing(6)}px 0px`,
    width: "100vw",
    maxWidth: "100%",
    overflow: "hidden",
    boxShadow: theme.shadows[0],
    padding: `${theme.spacing(6)}px ${theme.spacing(1)}px`,
    backgroundColor: theme.palette.common.black,
  },
}));
const Services = ({ data }) => {
  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      <div className={classes.svgContainer}>
        <ReactSVG className={classes.svg} src='/images/divider-left.svg' />
      </div>
      <Paper className={classes.wrapper}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Grid container direction='column'>
              <Header
                microTitle={data.sectionMicroTitle}
                title={data.sectionTitle}
                text={data.sectionParagraph}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Section services={data.services} />
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default Services;
