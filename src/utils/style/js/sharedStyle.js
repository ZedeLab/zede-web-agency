import { useTheme } from "@material-ui/core";
import { useEffect } from "react";

const theme = () => {
  let theme = useTheme();

  return {
    wrapper: {
      borderRadius: 0,
      padding: `${theme.spacing(6)}px 0px`,
      width: "100vw",
      overflow: "hidden",
    },
    container: {
      width: "70vw",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "90vw",
      },
    },
    sectionHeading: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "36px",
      lineHeight: 1.15,
    },
    microHeading: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "2px",
      textTransform: "uppercase",
    },
  };
};

export default theme;
