import {
  Chip,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import clx from "classnames";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
// Icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import { findLastIndex, uniqueId } from "lodash";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    width: "90%",
    padding: `${theme.spacing(5)}px 0`,
    marginBottom: theme.spacing(10),
    margin: "auto",
  },
  sectionWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",

    marginBottom: theme.spacing(2),
    padding: `0 ${theme.spacing(5)}px`,
  },
  button: {
    padding: "0.3rem",
    borderRadius: "50%",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.secondary.main,
    marginLeft: theme.spacing(1),
    border: `solid ${theme.palette.grey[500]} ${theme.spacing(1)}`,
    boxShadow: theme.shadows[5],
    "&:hover, &:active": {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.text.secondary,
    },
  },
  icon: {
    // backgroundColor: theme.palette.secondary.main,
    fontSize: theme.spacing(2),
  },
  slideShow: {
    // height: "500px",
    width: "100%",
    maxWidth: "600px",
    overflow: "hidden",
    borderRadius: theme.spacing(2),
    // boxShadow: theme.shadows[5],
    filter: "grayscale(60%)",
    "&:hover, &:active": {
      borderRadius: theme.spacing(2),
      filter: "grayscale(0%)",
      // transform: "scale(1.02)",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    minHeight: "15rem",
    minWidth: "15rem",
    borderRadius: theme.spacing(2),
    // boxShadow: theme.shadows[5],
    filter: "grayscale(60%)",
    "&:hover, &:active": {
      filter: "grayscale(0%)",
      // transform: "scale(1.02)",
    },
  },
  infoSection: {
    width: "100%",
    borderRadius: theme.spacing(2),
    border: "none",
    paddingTop: theme.spacing(3),
  },
  info: {
    display: findLastIndex,
    alignItems: "center",
    width: "fit-content",
  },
  title: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
    paddingTop: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.dark,
  },
  infoIcon: {
    fontSize: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  date: {
    fontSize: "11px",
    fontWeight: 700,
  },
  subTitle: {},
  tags: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  tag: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const PortfolioDetail = ({ prevId, nextId, portfolioData }) => {
  const theme = useTheme();
  const classes = useStyle();

  return (
    <Grid container direction='column' className={classes.wrapper}>
      <Grid xs={12} item className={classes.sectionWrapper}>
        <IconButton disabled={prevId === null} className={classes.button}>
          <Link href={`/portfolios/${prevId}`}>
            <ArrowBackIosIcon className={classes.icon} />
          </Link>
        </IconButton>

        <IconButton disabled={nextId === null} className={classes.button}>
          <Link href={`/portfolios/${nextId}`}>
            <ArrowForwardIosIcon className={classes.icon} />
          </Link>
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent='space-between'
          alignItems='flex-start'
          spacing={1}
        >
          <Grid item md={5} sm={12}>
            <Carousel
              autoPlay={false}
              animation='slide'
              navButtonsAlwaysVisible
              className={classes.slideShow}
              activeIndicatorProps={{
                style: { color: theme.palette.secondary.dark },
              }}
              indicatorProps={{
                style: { color: theme.palette.secondary.light },
              }}
            >
              {portfolioData.imgUrl.map((item, i) => (
                <img key={uniqueId()} src={item} className={classes.image} />
              ))}
            </Carousel>
          </Grid>
          <Grid item md={6} sm={12}>
            <Grid container direction='column'>
              <Grid item md={12} sm={12}>
                <Typography
                  variant='h4'
                  color='textPrimary'
                  className={clx(classes.info, classes.title)}
                >
                  Project summary
                </Typography>
                {!portfolioData.private ? (
                  <>
                    <a
                      target='_blank'
                      href={portfolioData.detail.url}
                      className={clx(classes.info, classes.link)}
                      rel='noreferrer'
                    >
                      <Typography>
                        <LanguageIcon className={classes.infoIcon} />
                        {portfolioData.detail.url}
                      </Typography>
                    </a>
                    <a
                      target='_blank'
                      href={portfolioData.detail.github}
                      className={clx(classes.info, classes.link)}
                      rel='noreferrer'
                    >
                      <Typography>
                        <GitHubIcon className={classes.infoIcon} />
                        {portfolioData.detail.github}
                      </Typography>
                    </a>
                  </>
                ) : (
                  <Typography color='error'>
                    <LanguageIcon className={classes.infoIcon} /> private
                  </Typography>
                )}
                <Typography className={clx(classes.date)}>
                  {portfolioData.detail.date}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.infoSection}>
                  <Typography className={clx(classes.info, classes.detail)}>
                    {portfolioData.description}
                  </Typography>
                  <Typography
                    variant='h6'
                    className={clx(classes.info, classes.title)}
                  >
                    Technology
                  </Typography>
                  <div className={classes.tags}>
                    {portfolioData.detail.technologies.map((tag) => (
                      <Chip
                        key={uniqueId()}
                        className={classes.tag}
                        color='secondary'
                        label={tag}
                      />
                    ))}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioDetail;
