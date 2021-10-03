import {
  Button,
  Fade,
  Grid,
  Icon,
  makeStyles,
  Paper,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import clsx from "classnames";
import { useState } from "react";
import axios from "axios";
const emailRegExe =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

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
  microText: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: theme.palette.text.secondary,
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

  formContainer: {
    display: "flex",
    flexDirection: "column",
  },

  formItem: {
    marginBottom: theme.spacing(1),
  },

  input: {
    "& .MuiInputBase-input": {
      color: theme.palette.text.secondary,
      fontFamily: "Montserrat",
      fontWeight: 400,
      padding: theme.spacing(1),
    },
    "& .MuiFormLabel-root": {
      fontFamily: "Montserrat",
      fontWeight: 400,
      color: theme.palette.primary.light,
    },
  },
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
  contactIcon: {
    color: theme.palette.secondary.dark,
    transform: "scaleX(-1)",
  },
  address: {
    paddingBottom: theme.spacing(2),
  },
  subTitle: {
    fontFamily: "Montserrat, sans-serif",
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

const ContactUs = (params) => {
  const classes = useStyle();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameIsNotValid, setNameIsNotValid] = useState(true);
  const [emailIsNotValid, setEmailIsNotValid] = useState(true);
  const [messageIsNotValid, setMessageIsNotValid] = useState(true);

  const [nameIsModified, setNameIsModified] = useState(false);
  const [emailIsModified, setEmailIsModified] = useState(false);
  const [messageIsModified, setMessageIsModified] = useState(false);

  const [showNameErrorMessage, setShowNameErrorMessage] = useState(false);
  const [showEmailErrorMessage, setShowEmailErrorMessage] = useState(false);
  const [showMessageErrorMessage, setShowMessageErrorMessage] = useState(false);

  const [showSnakbar, setshowSnakbar] = useState(false);
  const [snakeMsg, setsnakeMsg] = useState("");
  const [snakbarSeverity, setSnakbarSeverity] = useState();

  const handleSubmit = async (event) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_IP}/subscriber`,
        {
          name: name,
          email: email,
          message: message,
        }
      );
      console.log(response.status);
      setsnakeMsg("Message was seccesfully sent, please check your spam.");
      setSnakbarSeverity("success");
      setshowSnakbar(true);
    } catch (error) {
      setsnakeMsg("We were unable to send your message.");
      setSnakbarSeverity("error");
      setshowSnakbar(true);
    }
  };

  const validateInput = (type) => {
    if (type === "name") {
      if (name.length === 0) {
        setNameIsNotValid(true);
        setShowNameErrorMessage(true);
      } else {
        if (nameIsNotValid === true) {
          setNameIsNotValid(false);
          setShowNameErrorMessage(false);
        }
      }
    } else if (type === "email") {
      if (!emailRegExe.test(email)) {
        setEmailIsNotValid(true);
        setShowEmailErrorMessage(true);
      } else {
        if (emailIsNotValid) {
          setEmailIsNotValid(false);
          setShowEmailErrorMessage(false);
        }
      }
    } else if (type === "message") {
      if (message.length <= 50) {
        setMessageIsNotValid(true);
        setShowMessageErrorMessage(true);
      } else {
        if (messageIsNotValid === true) {
          setMessageIsNotValid(false);
          setShowMessageErrorMessage(false);
        }
      }
    }
  };

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
          {/* Form section */}
          <Grid item xs={12} className={classes.formContainer}>
            <TextField
              id='standard-basic'
              label='name'
              variant='standard'
              required
              color='secondary'
              className={clsx(classes.formItem, classes.input)}
              value={name}
              onChange={(event) => setName(event.target.value)}
              error={nameIsNotValid && nameIsModified}
              onBlur={() => {
                !nameIsModified ? setNameIsModified(true) : null;
                validateInput("name");
              }}
            />
            <Fade in={showNameErrorMessage}>
              <Typography color='error'>
                The name field can not be empty.
              </Typography>
            </Fade>
            <TextField
              id='filled-basic'
              variant='standard'
              label='email'
              required
              color='secondary'
              className={clsx(classes.formItem, classes.input)}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              error={emailIsNotValid && emailIsModified}
              onBlur={() => {
                !emailIsModified ? setEmailIsModified(true) : null;
                validateInput("email");
              }}
            />
            <Fade in={showEmailErrorMessage}>
              <Typography color='error'>
                Please check the email again, you provided an invalid email.
              </Typography>
            </Fade>
            <TextField
              id='outlined-basic'
              variant='standard'
              label='message'
              multiline
              rows={8}
              required
              color='secondary'
              className={clsx(classes.formItem, classes.input)}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              error={messageIsNotValid && messageIsModified}
              onBlur={() => {
                !messageIsModified ? setMessageIsModified(true) : null;
                validateInput("message");
              }}
            />
            <Fade in={showMessageErrorMessage}>
              <Typography color='error'>The message is to short.</Typography>
            </Fade>
            <Button
              variant='contained'
              className={clsx(classes.formItem, classes.button)}
              color='secondary'
              onClick={(event) => handleSubmit(event)}
              disabled={nameIsNotValid || emailIsNotValid || messageIsNotValid}
            >
              Submit
            </Button>
          </Grid>
        </Grid>

        {/* Side section */}
        <Grid
          item
          md={5}
          sm={12}
          className={(classes.contact, classes.section)}
        >
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
                <Typography className={classes.microText}>
                  PG Vejdes 24B
                </Typography>
                <Typography className={classes.microText}>
                  Växjö, Sweden
                </Typography>
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
        </Grid>
      </Grid>
      <Snackbar
        open={showSnakbar}
        autoHideDuration={6000}
        onClose={() => {
          setsnakeMsg("");
          setshowSnakbar(false);
        }}
      >
        <Alert severity={snakbarSeverity}>{snakeMsg}</Alert>
      </Snackbar>
    </Paper>
  );
};
export default ContactUs;
