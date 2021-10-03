import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Address from "./Address";
import ContactForm from "./ContactForm";
const useStyle = makeStyles((theme) => ({
  wrapper: {
    borderRadius: 0,
    padding: `${theme.spacing(6)}px 0px`,
    width: "100vw",
    maxWidth: "100%",
    overflow: "hidden",
    boxShadow: theme.shadows[0],
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

  highlightedText: {
    color: theme.palette.secondary.dark,
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "32px",
    lineHeight: 1.15,
    fontWeight: 600,
    fontWeight: 400,
    padding: `${theme.spacing(3)}px 0px ${theme.spacing(2)}px 0px`,
  },

  contact: {
    backgroundColor: "red",
  },
}));

const ContactUs = (params) => {
  const classes = useStyle();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper className={classes.wrapper}>
      <Grid
        container
        direction={match ? "column-reverse" : "row"}
        justifyContent='space-between'
        className={classes.container}
      >
        <Grid item md={6} sm={12} className={classes.section} id='contact-form'>
          <Grid item xs={12}>
            <Typography
              variant='h3'
              color='textSecondary'
              className={classes.title}
            >
              Hello lets get in touch
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text}>
              Tell us about your vision and we’ll figure out the best option for
              you and your project. Dont like Filling up forms ? Mail us then{" "}
              <span className={classes.highlightedText}>hello@zede.tech</span>
            </Typography>
          </Grid>

          <ContactForm />
        </Grid>

        {/* Side section */}
        <Grid
          item
          md={5}
          sm={12}
          className={(classes.contact, classes.section)}
        >
          <Address />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ContactUs;
