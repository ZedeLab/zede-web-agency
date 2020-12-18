import {
  Button,
  Fade,
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
import { useRef, useState } from "react";

const emailRegExe = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

const ContactUs = (params) => {
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

  const classes = useStyle();

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
              onSubmit={(event) => handleSubmit(event)}
              disabled={nameIsNotValid || emailIsNotValid || messageIsNotValid}
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
