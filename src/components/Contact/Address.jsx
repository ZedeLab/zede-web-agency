import { Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import clsx from "classnames";

const useStyle = makeStyles((theme) => ({
  contactTitle: {
    lineHeight: 1.15,
    fontSize: "24px",
    paddingTop: theme.spacing(8),
  },
  contactIcon: {
    color: theme.palette.secondary.dark,
    transform: "scaleX(-1)",
  },
  microText: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
  },
  address: {
    paddingBottom: theme.spacing(2),
  },
  subTitle: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
    fontWeight: 400,
    paddingBottom: theme.spacing(1),
  },
  socialMedia: {
    paddingRight: theme.spacing(2),
  },
}));

const Address = (params) => {
  const classes = useStyle();

  return (
    <Grid container direction='row' spacing={2}>
      <Grid item xs={2}>
        <Icon
          fontSize='large'
          className={clsx(classes.contactIcon, "far fa-paper-plane")}
          color='secondary'
        />
      </Grid>
      <Grid item xs={10}>
        <Typography className={clsx(classes.text, classes.contactTitle)}>
          Contact Information
        </Typography>
        <div className={classes.address}>
          <Typography className={classes.microText}>PG Vejdes 24B</Typography>
          <Typography className={classes.microText}>Växjö, Sweden</Typography>
        </div>
        <Typography className={clsx(classes.text, classes.subTitle)}>
          Follow Us
        </Typography>
        <Grid container>
          <Grid item className={classes.socialMedia}>
            <Icon
              fontSize='small'
              className={"fab fa-facebook-f"}
              color='secondary'
            />
          </Grid>
          <Grid item className={classes.socialMedia}>
            <Icon
              fontSize='small'
              className={"fab fa-instagram"}
              color='secondary'
            />
          </Grid>
          <Grid item className={classes.socialMedia}>
            <Icon
              fontSize='small'
              className={"fab fa-twitter"}
              color='secondary'
            />
          </Grid>
          <Grid item className={classes.socialMedia}>
            <Icon
              fontSize='small'
              className={"fab fa-linkedin-in"}
              color='secondary'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Address;
