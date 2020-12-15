import {
  ClickAwayListener,
  Fade,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Slide,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import clsx from "classnames";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CancelIcon from "@material-ui/icons/Cancel";
const useStyle = makeStyles((theme) => ({
  container: {
    margin: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    borderRadius: theme.shape.borderRadius,
    position: "relative",
    width: "30%",
    maxWidth: "400px",
    overflow: "hidden",
    boxShadow: theme.shadows[8],
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      flexDirection: "column",
    },
  },
  descriptionContainer: {
    position: "absolute",
    left: "0%",
    top: "auto",
    right: "0%",
    bottom: "0%",
    display: "block",
    width: "auto",
    height: "100%",
    padding: theme.spacing(2),
    borderRadius: "5px",
    backgroundColor: "#f3d940",
    opacity: 0.9,
    overflow: "auto",
    padding: theme.spacing(2),
  },
  discriptionHidder: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // paddingTop: theme.spacing(1),
  },
  text: {
    color: theme.palette.text.secondary,
  },
  jobTitle: {
    color: theme.palette.primary.light,
  },
  link: {
    color: theme.palette.primary.dark,
  },
  closerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const TeamMembers = ({
  name,
  jobTitle,
  imgUrl,
  discription,
  facebook,
  linkedIn,
  github,
}) => {
  const classes = useStyle();

  const [showDetail, setshowDitail] = useState(false);
  return (
    // <div className='col-2 lg-4'>
    //   <div className={clsx("portrait-container", classes.container)}>

    //   </div>
    // </div>
    <Paper className={classes.container}>
      <Slide in={showDetail} direction='down' timeout={1000} unmountOnExit>
        <div
          data-w-id='3e6dc9f0-f4eb-a269-2dbe-629385073029'
          className={clsx(classes.descriptionContainer)}
        >
          <ClickAwayListener onClickAway={() => setshowDitail(false)}>
            <Grid container direction='column' spacing={1}>
              <Grid item>
                <Typography
                  variant='h4'
                  className={clsx(classes.text, classes.name)}
                >
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='h5'
                  className={clsx(classes.text, classes.jobTitle)}
                >
                  {jobTitle}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={clsx(classes.text, classes.description)}>
                  {discription}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container justify='space-around'>
                  <Grid item>
                    <a target='_blank' href={facebook} className={classes.link}>
                      <FacebookIcon />
                    </a>
                  </Grid>
                  <Grid item>
                    <a target='_blank' href={linkedIn} className={classes.link}>
                      <LinkedInIcon />
                    </a>
                  </Grid>
                  <Grid item>
                    <a target='_blank' href={github} className={classes.link}>
                      <GitHubIcon />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.closerContainer}>
                <IconButton onClick={() => setshowDitail(false)}>
                  <CancelIcon fontSize='large' />
                </IconButton>
              </Grid>
            </Grid>
          </ClickAwayListener>
        </div>
      </Slide>
      <img
        src={imgUrl}
        width='100%'
        alt=''
        className={clsx("team-photo", classes.photo)}
        onClick={() => setshowDitail(true)}
      />
    </Paper>
  );
};

export default TeamMembers;
