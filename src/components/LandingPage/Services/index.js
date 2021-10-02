import { Grid, makeStyles, Paper } from "@material-ui/core";

import data from "@zede-static/services.json";
import { ReactSVG } from "react-svg";
import useCommonStyle from "../../../utils/style/js/sharedStyle";
import Section from "./Section";
import Header from "./Header";

const useStyle = makeStyles((theme) => {
  const mainStyle = useCommonStyle();
  return {
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
        fill: theme.palette.primary.main,

        margin: 0,
      },
    },
    wrapper: {
      ...mainStyle.wrapper,
      padding: `${theme.spacing(6)}px ${theme.spacing(5)}px`,
      backgroundColor: theme.palette.primary.main,
    },

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
    serviceContainer: {
      backgroundColor: "transparent",
      padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    },
  };
});
const Services = (params) => {
  const classes = useStyle();

  return (
    <Paper className={classes.root}>
      <div className={classes.svgContainer}>
        <ReactSVG className={classes.svg} src='/images/divider-left.svg' />
      </div>
      <Paper className={classes.wrapper}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Grid container direction='column'>
              <Header
                microTitle={data.sectionMicroTitle}
                title={data.sectionTitle}
                text={data.sectionParagraph}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Section services={data.services} />
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default Services;
