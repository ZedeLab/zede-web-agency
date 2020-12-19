import { Grid, makeStyles, Slide, Typography } from "@material-ui/core";
import { uniqueId } from "lodash";
import { useOnScreen } from "../../../../utils/hooks/useOnScreen";
import { ReactSVG } from "react-svg";

const useStyle = makeStyles((theme) => ({
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
  svgContainer: {
    "& svg": {
      width: "100%",
      height: "100%",
      maxHeight: "350px",
      fill: theme.palette.secondary.main,
      stroke: theme.palette.primary.main,
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
    <div ref={setRef}>
      <Grid
        key={uniqueId()}
        container
        alignItems='center'
        direction={index % 2 === 0 ? "row" : "row-reverse"}
        className={classes.subSectionContainer}
      >
        <Grid item xs={12} sm={6}>
          <Slide
            direction={index % 2 === 0 ? "right" : "left"}
            in={visible}
            timeout={1000}
          >
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
          </Slide>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Slide
            direction={index % 2 === 0 ? "left" : "right"}
            in={visible}
            timeout={1000}
          >
            <ReactSVG className={classes.svgContainer} src={mediaUrl} />
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
};

export default WorkFlowSection;
