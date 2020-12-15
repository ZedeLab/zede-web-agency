import {
  Button,
  FormControl,
  Grid,
  Input,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import sharedStyle from "../../utils/style/js/sharedStyle";

const useStyle = makeStyles((theme) => {
  const mainStyle = sharedStyle();
  return {
    wrapper: {
      ...mainStyle.wrapper,
      // backgroundColor: theme.palette.primary.dark,
    },
    container: {
      width: "70vw",
      maxWidth: "600px",
      margin: "auto",
      boxShadow: theme.shadows[8],
      // backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down("sm")]: {
        width: "90vw",
      },
    },
    title: {
      ...mainStyle.sectionHeading,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      "& >*": {
        color: theme.palette.primary.main,
      },
      // padding: theme.spacing(5),
    },
    input: {
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
    },
    submit: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      borderRadius: theme.shape.borderRadius,
      width: "fit-content",
      alignSelf: "center",
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
      <Grid
        container
        direction='column'
        justify='center'
        spacing={3}
        className={classes.container}
      >
        <Grid item xs={12}>
          <Typography
            variant='h3'
            color='textSecondary'
            className={classes.title}
          >
            Send us a message
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color='textSecondary'>
            Complete the form below so we can talk about your vision or goal and
            how we might help.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form className={classes.form} noValidate autoComplete='off'>
            <FormControl className={classes.input}>
              <TextField
                id='standard-basic'
                label='name'
                variant='filled'
                color='primary'
              />
            </FormControl>
            <FormControl className={classes.input}>
              <TextField
                id='filled-basic'
                variant='filled'
                label='email'
                color='primary'
              />
            </FormControl>
            <FormControl className={classes.input}>
              <TextField
                id='outlined-basic'
                variant='filled'
                label='message'
                color='primary'
                multiline
                rows={4}
              />
            </FormControl>
            <Button
              variant='contained'
              type='submit'
              className={classes.submit}
              color='secondary'
              onSubmit={(event) => handleSubmit(event)}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ContactUs;
