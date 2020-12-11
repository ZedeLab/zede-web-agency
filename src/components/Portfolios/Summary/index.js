import { Grid, makeStyles, Paper } from "@material-ui/core";
import clx from "classnames";
import Link from "next/link";
const PortfolioSummary = ({
  id,
  large,
  imgUrl,
  imgSrcSet,
  title,
  description,
}) => {
  const useStyle = makeStyles((theme) => ({
    wrapper: {
      // margin: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
    },
    imageContainer: {
      overflow: "hidden",
      width: "500px",
      height: "500px",
      boxShadow: theme.shadows[1],
      // marginBottom: theme.spacing(5),
      margin: theme.spacing(2),
    },
    image: {
      width: "100%",
      height: "400px",
      overflow: "hidden",
      filter: "grayscale(60%)",
      "&:hover, &:active": {
        filter: "grayscale(0%)",
        transform: "scale(1.02)",
      },
    },
    info: {
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyle();
  const imgStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "5% 5%",
  };

  return (
    <Link href={`portfolios/${id}`}>
      <Grid container direction='row' className={classes.imageContainer}>
        <Grid item xs={12}>
          <Paper
            variant='outlined'
            className={classes.image}
            style={imgStyle}
          ></Paper>
        </Grid>
        <Grid item xs={12} className={classes.info}>
          <h4 className='no-bottom-margins'>{title}</h4>
          <p className='low-opacity'>{description}</p>
        </Grid>
      </Grid>
    </Link>
  );
};

export default PortfolioSummary;
