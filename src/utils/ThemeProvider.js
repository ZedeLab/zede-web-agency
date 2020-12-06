const theme = (mode = "light") => {
  return {
    palette: {
      type: mode,
      primary: {
        main: "#BA000D",
      },
      secondary: {
        main: mode === "light" ? "#000000" : "#ffc400",
      },
    },
  };
};

export default theme;
