import {
  ClickAwayListener,
  Fade,
  IconButton,
  makeStyles,
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
    marginTop: theme.spacing(3),
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
    padding: "30px",
    borderRadius: "5px",
    backgroundColor: "#f3d940",
    opacity: 0.9,
    overflow: "auto",
  },
  discriptionHidder: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // paddingTop: theme.spacing(1),
  },
  jobTitle: {
    marginBottom: theme.spacing(1),
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
    <div className='col-2 lg-4'>
      <div className={clsx("portrait-container", classes.container)}>
        <Slide in={showDetail} direction='down' timeout={1000} unmountOnExit>
          <div
            data-w-id='3e6dc9f0-f4eb-a269-2dbe-629385073029'
            className={clsx(classes.descriptionContainer)}
          >
            <ClickAwayListener onClickAway={() => setshowDitail(false)}>
              <div
                data-w-id='3e6dc9f0-f4eb-a269-2dbe-62938507302a'
                className='team-detail-container'
              >
                <Typography variant='h4' className='no-bottom-margins-2'>
                  {name}
                </Typography>
                <Typography variant='h5' className={classes.jobTitle}>
                  {jobTitle}
                </Typography>
                <Typography className='paragraph-small'>
                  {discription}
                </Typography>
                <div className='social-media-icons-container'>
                  {facebook ? (
                    <a
                      target='_blank'
                      href={facebook}
                      className='footer-link w-inline-block'
                    >
                      <FacebookIcon />
                    </a>
                  ) : null}
                  {linkedIn ? (
                    <a
                      target='_blank'
                      href={linkedIn}
                      className='footer-link w-inline-block'
                    >
                      <LinkedInIcon />
                    </a>
                  ) : null}
                  {github ? (
                    <a
                      target='_blank'
                      href={github}
                      className='footer-link w-inline-block'
                    >
                      <GitHubIcon />
                    </a>
                  ) : null}
                </div>
                <div className={classes.discriptionHidder}>
                  <IconButton onClick={() => setshowDitail(false)}>
                    <CancelIcon fontSize='large' />
                  </IconButton>
                </div>
              </div>
            </ClickAwayListener>
          </div>
        </Slide>
        <img
          src={imgUrl}
          width='418'
          alt=''
          className={clsx("team-photo", classes.photo)}
          onClick={() => setshowDitail(true)}
        />
      </div>
    </div>
  );
};

export default TeamMembers;
