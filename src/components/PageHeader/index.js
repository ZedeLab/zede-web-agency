import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "classnames";
import { ReactSVG } from "react-svg";

const url = "/images/background-wall.svg";
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
    zIndex: 0,

    backgroundImage: `url(${url})`,
    opacity: 0.5,
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
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "42px",
    },
  },
}));

const PageHeader = ({ pageTitle, backgroundImgUrl }) => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.background} />
      <Paper className={classes.grid}>
        <Typography color='textPrimary' variant='h1' className={classes.title}>
          {pageTitle}
        </Typography>
      </Paper>
    </div>
  );
};

export default PageHeader;
