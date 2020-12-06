import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

// Materuial-ui elements
import {
  ThemeProvider,
  createMuiTheme,
  useMediaQuery,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import mainTheme from "../src/utils/ThemeProvider";

// Global css styles
import "../src/utils/style/main.css";
import "../src/utils/style/normalize.css";
import "../src/utils/style/webflow.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// Core components
import Nav from "../src/components/Navigation";
import Footer from "../src/components/Footer";
export default function MyApp(props) {
  const { Component, pageProps } = props;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () => createMuiTheme(mainTheme(prefersDarkMode ? "dark" : "light")),
    [prefersDarkMode]
  );

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet='utf-8' />
        <title>Zede agency</title>
        <meta content='Zede agency is ....' name='description' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta content='Webflow' name='generator' />

        <link
          href='images/Duduk-Thumb.gif'
          rel='shortcut icon'
          type='image/x-icon'
        />
        <link href='images/Duduk-Thumb-big.gif' rel='apple-touch-icon' />
        {/* <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
          integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
          crossorigin='anonymous'
        /> */}
      </Head>
      {/* <ThemeProvider theme={theme}>
        
      </ThemeProvider> */}
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
