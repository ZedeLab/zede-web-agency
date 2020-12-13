import { useTheme } from "@material-ui/core";

const theme = (mode = "light") => {
  // const theme = useTheme();

  return {
    palette: {
      type: "light",

      primary: {
        main: "#2c2925",
      },
      secondary: {
        main: "#f3d940",
      },
      text: {
        primary: "rgba(255, 255, 255)",
        secondary: "rgba(0, 0, 0)",
      },
    },
    typography: {
      h1: {
        marginTop: "20px",
        marginBottom: "10px",
        fontFamily: "Montserrat",
        fontSize: "52px",
        lineHeight: 1.15,
        fontWeight: 700,
      },
      h2: {
        marginTop: "20px",
        marginBottom: "10px",
        fontFamily: "Montserrat",
        fontSize: "36px",
        lineHeight: 1.15,
        fontWeight: 700,
      },
      h3: {
        marginTop: "20px",
        marginBottom: "10px",
        fontFamily: "Montserrat",

        fontSize: "24px",
        lineHeight: 1.15,
        fontWeight: 700,
      },
      h4: {
        marginTop: "10px",
        marginBottom: "10px",
        fontFamily: "Montserrat",

        fontSize: "18px",
        lineHeight: "24px",
        fontWeight: 700,
      },
      body2: {
        marginTop: "10px",
        marginBottom: "10px",
        // fontFamily: "Montserrat",
        fontSize: "14px",
        lineHeight: "34px",
      },
      link: {
        textDecoration: "none",
        fontFamily: "Montserrat",
        fontWeight: 400,
      },
      button: {
        padding: "16px 25px",
        textTransform: "capitalize",
        fontFamily: "Montserrat",
        fontFize: "11px",
        fontWeight: 600,
        letterSpacing: "2px",
      },
    },
  };
};

export default theme;
