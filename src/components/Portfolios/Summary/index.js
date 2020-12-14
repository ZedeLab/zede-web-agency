import { Grid, makeStyles, Paper, Slide, Typography } from "@material-ui/core";
import Link from "next/link";
import { useOnScreen } from "../../../utils/hooks/useOnScreen";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "20rem",
    overflow: "hidden",
    boxShadow: theme.shadows[5],
  },
  container: {
    height: "100%",
  },
  section: {
    backgroundColor: theme.palette.secondary.light,
    heigh: "10%",
    height: "fit-content",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    opacity: 0.8,
  },
}));
const PortfolioSummary = ({ id, imgUrl, title }) => {
  const classes = useStyle();
  const imgStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "5% 5%",
  };

  const [setRef, visible] = useOnScreen({ threshold: "0" });

  return (
    <Link href={`portfolios/${id}`}>
      <Paper
        ref={setRef}
        variant='outlined'
        className={classes.wrapper}
        style={imgStyle}
      >
        <Slide direction='down' in={visible}>
          <Grid item className={classes.section}>
            <Typography variant='h4'>{title}</Typography>
          </Grid>
        </Slide>
      </Paper>
    </Link>
  );
};

export default PortfolioSummary;
