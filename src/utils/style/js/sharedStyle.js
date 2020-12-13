import { useTheme } from "@material-ui/core";

const theme = () => {
  const theme = useTheme();
  return {
    wrapper: {
      borderRadius: 0,
      padding: `${theme.spacing(6)}px 0px`,
    },
    container: {
      width: "70vw",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "90vw",
      },
    },
  };
};

export default theme;
