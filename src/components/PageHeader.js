import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "classnames";
import { ReactSVG } from "react-svg";

const url = "/images/background.svg";
const useStyle = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    width: "100vw",
    maxWidth: "100%",
    height: "35vh",

    "& > *": {
      boxShadow: theme.shadows[0],
    },
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // left: "-1rem",

    zIndex: 0,
    overflow: "hidden",
    // backgroundImage: `url(${url})`,
    opacity: 0.4,
  },
  grid: {
    position: "relative",
    width: "100vw",
    maxWidth: "100%",
    height: "35vh",
    zIndex: 1,
    opacity: 1,
    textAlign: "center",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingTop: theme.spacing(8),
    fontFamily: "Montserrat, sans-serif",
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 600,
    color: theme.palette.secondary.dark,
  },

  svgContainer: {
    "& svg": {
      width: "100%",
      height: "100%",
      transform: "scale(1.2)",
      "& .dark": {
        fill: theme.palette.primary.main,
      },
      "& .light": {
        fill: theme.palette.secondary.main,
      },
    },
  },
}));

const PageHeader = ({ pageTitle, backgroundImgUrl }) => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.background}>
        <ReactSVG className={classes.svgContainer} src={url} />
      </Paper>
      <Paper className={classes.grid}>
        <Typography color='textPrimary' variant='h1' className={classes.title}>
          {pageTitle}
        </Typography>
      </Paper>
    </div>
  );
};

export default PageHeader;
