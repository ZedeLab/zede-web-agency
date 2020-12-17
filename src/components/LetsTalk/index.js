import {
  Button,
  FormControl,
  Grid,
  Icon,
  Input,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import sharedStyle from "../../utils/style/js/sharedStyle";
import clsx from "classnames";

const useStyle = makeStyles((theme) => {
  const mainStyle = sharedStyle();
  return {
    wrapper: {
      ...mainStyle.wrapper,
      // backgroundColor: theme.palette.primary.dark,
    },
    container: {
      width: "70vw",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "90vw",
      },
    },
    text: {
      color: theme.palette.text.secondary,
      fontFamily: "Montserrat, sans-serif",
      paddingBottom: theme.spacing(3),
      width: "90%",
    },
    microText: {
      ...mainStyle.microHeading,
      color: theme.palette.text.secondary,
    },
    heighlightedText: {
      color: theme.palette.secondary.dark,
    },
    title: {
      ...mainStyle.sectionHeading,
      fontWeight: 400,
      padding: `${theme.spacing(3)}px 0px ${theme.spacing(2)}px 0px`,
    },

    formContainer: {
      display: "flex",
      flexDirection: "column",
    },

    formItem: {
      marginBottom: theme.spacing(1),
    },

    input: {},
    button: {
      width: "fit-content",
      marginTop: theme.spacing(2),
      boxShadow: theme.shadows[5],
    },

    contact: {
      backgroundColor: "red",
    },

    contactTitle: {
      fontFamily: "Montserrat, sans-serif",
      lineHeight: 1.15,
      fontSize: "24px",
      paddingTop: theme.spacing(8),
    },
    address: {
      paddingBottom: theme.spacing(2),
    },
    subTitle: {
      ...mainStyle.microHeading,
      color: theme.palette.text.secondary,
      fontWeight: 400,
      paddingBottom: theme.spacing(1),
    },
    socialMedia: {
      paddingRight: theme.spacing(2),
    },
  };
});

const ContactUs = (params) => {
  const classes = useStyle();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <Paper className={classes.wrapper}>
      <Grid container justify='space-between' className={classes.container}>
        <Grid item sm={6} xs={12} className={classes.section}>
          <Grid item xs={12}>
            <Typography
              variant='h3'
              color='textSecondary'
              className={classes.title}
            >
              Hello let's get in touch
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text}>
              Tell us about your vision and we’ll figure out the best option for
              you and your project. Don't like Filling up forms ? Mail us then{" "}
              <span className={classes.heighlightedText}>hello@zede.tech</span>
            </Typography>
          </Grid>
          {/* Form section */}
          <Grid item xs={12} className={classes.formContainer}>
            <TextField
              id='standard-basic'
              label='name'
              variant='standard'
              className={clsx(classes.formItem, classes.input)}
            />
            <TextField
              id='filled-basic'
              variant='standard'
              label='email'
              className={clsx(classes.formItem, classes.input)}
            />
            <TextField
              id='outlined-basic'
              variant='standard'
              label='message'
              multiline
              rows={4}
              className={clsx(classes.formItem, classes.input)}
            />
            <Button
              variant='contained'
              type='submit'
              className={clsx(classes.formItem, classes.button)}
              color='secondary'
              onSubmit={(event) => handleSubmit(event)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>

        {/* Side section */}
        <Grid
          item
          sm={4}
          xs={12}
          className={(classes.contact, classes.section)}
        >
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
              <Icon className={"fab fa-facebook-f"} color='secondary' />
            </Grid>
            <Grid item className={classes.socialMedia}>
              <Icon className={"fab fa-instagram"} color='secondary' />
            </Grid>
            <Grid item className={classes.socialMedia}>
              <Icon className={"fab fa-twitter"} color='secondary' />
            </Grid>
            <Grid item className={classes.socialMedia}>
              <Icon className={"fab fa-linkedin-in"} color='secondary' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ContactUs;
