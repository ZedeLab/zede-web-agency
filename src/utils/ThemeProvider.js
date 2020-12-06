import { useTheme } from "@material-ui/core";

const theme = (mode = "light") => {
  return {
    palette: {
      type: "light",

      primary: {
        main: "#f3d940",
      },
      secondary: {
        main: mode === "light" ? "#000000" : "#ffc400",
      },
    },
    typography: {
      link: {
        textDecoration: "none",
        fontFamily: "Montserrat",
        fontWeight: 600,
      },
      button: {
        textTransform: "capitalize",
      },
    },
  };
};

export default theme;
