import { createTheme } from "@material-ui/core";
import {
  courierRegular,
  courierBold,
  playfairRegular,
  PlayfairBold,
} from "@zede-utils/Fonts";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
          WebkitTapHighlightColor: "transparent",
        },
        "@font-face": [
          courierRegular,
          courierBold,
          playfairRegular,
          PlayfairBold,
        ],
      },
    },
  },
  palette: {
    type: "light",

    primary: {
      main: "rgba(255, 255, 255)",
    },
    secondary: {
      main: "#3B7790",
    },
    text: {
      primary: "#383838",
      secondary: "rgba(255, 255, 255)",
      hint: "#6B6B6B",
    },
    divider: "#73e8ff",
  },
  typography: {
    h1: {
      marginTop: "20px",
      marginBottom: "10px",
      fontSize: "52px",
      lineHeight: 1.15,
      letterSpacing: 2.1,
      fontWeight: 700,
      fontFamily: "Courier",
    },
    h2: {
      marginTop: "20px",
      marginBottom: "10px",
      letterSpacing: 1.8,
      fontSize: "36px",
      lineHeight: 1.15,
      fontWeight: 700,
    },
    h3: {
      marginTop: "20px",
      marginBottom: "10px",
      fontSize: "24px",

      fontWeight: 700,
      fontFamily: "Courier",
    },
    h4: {
      marginTop: "10px",
      marginBottom: "10px",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 700,
      fontFamily: "Courier",
    },

    h6: {
      fontFamily: "Courier",
    },
    subtitle1: {
      fontFamily: "Playfair",
    },

    body1: {
      fontFamily: "Courier",
    },
    body2: {
      marginTop: "10px",
      marginBottom: "10px",
      fontSize: "14px",
      lineHeight: "34px",
      fontFamily: "Courier",
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

  shadows: [
    "none",
    "0px 2px 4px 1px rgba(97, 231, 253, 0.11)", // 1
    "0px 2px 4px 2px rgba(97, 231, 253, 0.11)", // 2
    "0px 2px 4px 3px rgba(97, 231, 253, 0.11)", // 3
    "0px 2px 4px 4px rgba(97, 231, 253, 0.11)", // 4
    "0px 2px 4px 5px rgba(97, 231, 253, 0.11)", // 5
    "0px 2px 4px 6px rgba(97, 231, 253, 0.11)", // 5

    // From material-ui
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
});

export default theme;
