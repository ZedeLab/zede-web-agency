import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import clsx from "classnames";
import axios from "axios";
import { useForm } from "react-hook-form";

const useStyle = makeStyles((theme) => ({
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
}));

const ContactForm = (params) => {
  const classes = useStyle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event) => {
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
    } catch (error) {}
  };
  console.log(errors);
  return (
    <Grid
      item
      xs={12}
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      className={classes.formContainer}
    >
      <TextField
        id='standard-basic'
        label='name'
        variant='standard'
        required
        color='secondary'
        {...register("name", { required: true, min: 3 })}
        className={clsx(classes.formItem, classes.input)}
      />

      {errors.name && <span>Name is not valid</span>}

      <TextField
        id='filled-basic'
        variant='standard'
        label='email'
        required
        color='secondary'
        {...register("email", { required: true, min: 4 })}
        className={clsx(classes.formItem, classes.input)}
      />
      {errors.email && <span>Email is not valid</span>}
      <TextField
        id='outlined-basic'
        variant='standard'
        label='message'
        multiline
        rows={8}
        required
        color='secondary'
        {...register("message", { required: true, min: 10 })}
        className={clsx(classes.formItem, classes.input)}
      />
      {errors.message && <span>Message is not valid</span>}
      <Button
        variant='contained'
        className={clsx(classes.formItem, classes.button)}
        color='secondary'
        type='submit'
      >
        Submit
      </Button>
    </Grid>
  );
};
export default ContactForm;
