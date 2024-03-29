import { Box, Fade, Grid, makeStyles, Typography } from "@material-ui/core";
import { uniqueId } from "lodash";
import { useOnScreen } from "@zede-hooks/useOnScreen";
import { ReactSVG } from "react-svg";

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
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
    color: theme.palette.text.primary,
  },
  subSectionParagraph: {
    color: theme.palette.text.primary,
    textAlign: "justify",
    paddingBottom: theme.spacing(2),
  },
  svgContainer: {
    "& svg": {
      width: "100%",
      height: "100%",
      maxHeight: "350px",
      fill: theme.palette.secondary.dark,
      stroke: theme.palette.text.secondary,
      strokeWidth: "20px",
      textShadow: "5px",
    },
  },
}));

const WorkFlowSection = ({ index, title, mediaUrl, paragraphs }) => {
  const classes = useStyle();
  const [setRef, visible] = useOnScreen({ threshold: "0.15" });

  // const [refMedia, visibleMedia] = useOnScreen({ threshold: "0.25" });
  return (
    <Box ref={setRef} className={classes.container}>
      <Grid
        key={uniqueId()}
        container
        alignItems='center'
        justifyContent='space-between'
        direction={index % 2 === 0 ? "row" : "row-reverse"}
        className={classes.subSectionContainer}
      >
        <Grid item xs={12} sm={6}>
          <Fade in={visible} timeout={1500}>
            <div>
              <Typography
                variant='h3'
                color='textSecondary'
                className={classes.subSectionTitle}
              >
                {title}
              </Typography>
              {Object.keys(paragraphs).map((paragraph) => (
                <Typography
                  key={uniqueId()}
                  className={classes.subSectionParagraph}
                >
                  {paragraphs[paragraph]}
                </Typography>
              ))}
            </div>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Fade in={visible} timeout={1000}>
            <ReactSVG className={classes.svgContainer} src={mediaUrl} />
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkFlowSection;
