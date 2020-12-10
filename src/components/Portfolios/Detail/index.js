import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import clx from "classnames";
import Carousel from "react-material-ui-carousel";

// Icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";

const PortfolioSummary = ({ imgUrl, imgSrcSet, title, description }) => {
  const useStyle = makeStyles((theme) => ({
    wrapper: {
      width: "80%",
      padding: `${theme.spacing(10)}px 0`,
      marginBottom: theme.spacing(10),
      margin: "auto",
    },
    sectionWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(5),
      padding: `0 ${theme.spacing(5)}px`,
    },
    slideShow: {
      maxHeight: "500px",
      width: "100%",
    },
    infoSection: {
      borderRadius: theme.spacing(2),
      height: "90%",
      backgroundColor: theme.palette.primary.main,
    },
  }));

  const classes = useStyle();
  const items = ["/images/colonization.jpg", "/images/sruvs.jpeg"];
  return (
    <Grid container direction='column' className={clx(classes.wrapper)}>
      <Grid xs={12} item className={clx(classes.sectionWrapper)}>
        <Typography variant='h1'> Title</Typography>
        <div>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify='space-between' spacing={4}>
          <Grid item sm={8} xs={12}>
            <Carousel
              autoPlay={false}
              animation='slide'
              navButtonsAlwaysVisible
            >
              {items.map((item, i) => (
                <img className={clx(classes.slideShow)} key={i} src={item} />
              ))}
            </Carousel>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className={clx(classes.infoSection)}>
              <Typography variant='h5'>Summary</Typography>
              <Typography>Url</Typography>
              <Typography>Github</Typography>
              <Typography>Date</Typography>
              <Typography>Description</Typography>
              <Typography>Technology</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioSummary;
