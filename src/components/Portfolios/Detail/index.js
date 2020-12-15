import {
  Avatar,
  Chip,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
  useTheme,
} from "@material-ui/core";
import clx from "classnames";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
// Icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import { uniqueId } from "lodash";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    width: "80%",
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
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    marginLeft: theme.spacing(1),
    border: `solid ${theme.palette.grey[500]} ${theme.spacing(1)}`,
    "&:hover, &:active": {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.text.secondary,
    },
  },
  icon: {
    // backgroundColor: theme.palette.secondary.main,
    fontSize: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.spacing(2),
    },
  },
  slideShow: {
    height: "500px",
    width: "100%",
    overflow: "hidden",
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[8],
    filter: "grayscale(60%)",
    "&:hover, &:active": {
      borderRadius: theme.spacing(2),
      filter: "grayscale(0%)",
      transform: "scale(1.02)",
    },
  },
  infoSection: {
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,
  },
  info: {
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.light,
  },
  infoIcon: {
    fontSize: theme.spacing(2),
  },
  detail: {},
  subTitle: {},
  tag: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const PortfolioDetail = ({ prevId, nextId, portfolioData }) => {
  const theme = useTheme();
  const classes = useStyle();

  const imgStyle = (imgUrl) => ({
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "contain",
    // backgroundPosition: "5% 35%",
  });

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
        <Grid container justify='space-between' spacing={6}>
          <Grid item md={8} xs={12}>
            <Carousel
              autoPlay={false}
              animation='slide'
              navButtonsAlwaysVisible
              activeIndicatorProps={{
                style: { color: theme.palette.secondary.dark },
              }}
              indicatorProps={{
                style: { color: theme.palette.secondary.light },
              }}
            >
              {portfolioData.imgUrl.map((item, i) => (
                <Paper
                  key={uniqueId()}
                  className={classes.slideShow}
                  style={imgStyle(item)}
                ></Paper>
              ))}
            </Carousel>
          </Grid>
          <Grid item md={4} xs={12}>
            <Paper className={classes.infoSection}>
              <Typography
                variant='h4'
                color='textPrimary'
                className={clx(classes.info, classes.title)}
              >
                Summary
              </Typography>
              <a
                target='_blank'
                href={portfolioData.detail.url}
                className={clx(classes.info, classes.link)}
              >
                <Typography>
                  <LanguageIcon className={classes.infoIcon} />{" "}
                  {portfolioData.detail.url}
                </Typography>
              </a>
              <a
                target='_blank'
                href={portfolioData.detail.github}
                className={clx(classes.info, classes.link)}
              >
                <Typography>
                  <GitHubIcon className={classes.infoIcon} />{" "}
                  {portfolioData.detail.github}
                </Typography>
              </a>
              <Typography className={clx(classes.info, classes.detail)}>
                {portfolioData.date}
              </Typography>
              <Typography className={clx(classes.info, classes.detail)}>
                {portfolioData.description}
              </Typography>
              <Typography
                variant='h6'
                className={clx(classes.info, classes.subTitle)}
              >
                Technology
              </Typography>
              <div>
                {portfolioData.detail.technologies.map((tag) => (
                  <Chip
                    key={uniqueId()}
                    className={classes.tag}
                    color='secondary'
                    label={tag}
                  />
                ))}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioDetail;
