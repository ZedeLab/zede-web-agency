import { createTheme } from "@material-ui/core";
import {
  balooBhai,
  balooBhaiBold,
  balooBhaiSemiBold,
  balooBhaiExtraBold,
} from "@zede-utils/globalFonts";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          balooBhai,
          balooBhaiBold,
          balooBhaiSemiBold,
          balooBhaiExtraBold,
        ],
      },
    },
  },
  palette: {
    type: "light",

    primary: {
      main: "#1E1C19",
    },
    secondary: {
      main: "#73e8ff",
    },
    text: {
      primary: "rgba(255, 255, 255)",
      secondary: "rgba(0, 0, 0)",
    },
    divider: "#73e8ff",
  },
  typography: {
    fontFamily: [
      "BalooBhai",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    h1: {
      marginTop: "20px",
      marginBottom: "10px",

      fontSize: "52px",
      lineHeight: 1.15,
      fontWeight: 700,
    },
    h2: {
      marginTop: "20px",
      marginBottom: "10px",

      fontSize: "36px",
      lineHeight: 1.15,
      fontWeight: 700,
    },
    h3: {
      marginTop: "20px",
      marginBottom: "10px",

      fontSize: "24px",
      lineHeight: 1.15,
      fontWeight: 700,
    },
    h4: {
      marginTop: "10px",
      marginBottom: "10px",

      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    body2: {
      marginTop: "10px",
      marginBottom: "10px",
      fontSize: "14px",
      lineHeight: "34px",
    },

    link: {
      textDecoration: "none",

      fontWeight: 400,
      fontSize: "18px",
    },
    button: {
      padding: "16px 25px",
      textTransform: "capitalize",

      fontFize: "11px",
      fontWeight: 600,
      letterSpacing: "2px",
    },
  },
});

export default theme;
