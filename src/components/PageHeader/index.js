import { makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "classnames";

const PageHeader = ({ pageTitle, backgroundImgUrl }) => {
  const useStyle = makeStyles((theme) => ({
    wrapper: {
      position: "relative",
      width: "100vw",
      height: "60vh",
      display: "flex",
      alignItems: "center",

      overflow: "hidden",
      borderRadius: 0,

      paddingTop: theme.spacing(5),
    },
    background: {
      backgroundImage: `url(${backgroundImgUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "5% 35%",
      filter: " blur(2px)",
      width: "100%",
      height: "100%",

      position: "absolute",
      zIndex: 0,
    },
    title: {
      position: "relative",
      zIndex: 1,
      width: "90%",
      margin: "auto",
      color: theme.palette.secondary.main,
    },
  }));
  const classes = useStyle();

  return (
    <Paper className={classes.wrapper}>
      <div className={classes.background} />
      <Typography variant='h1' className={classes.title}>
        {pageTitle}
      </Typography>
    </Paper>
  );
};

export default PageHeader;
