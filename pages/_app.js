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
import "../src/utils/style/css/main.css";
// import "../src/utils/style/css/normalize.css";
import "../src/utils/style/css/webflow.css";
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
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
          rel='stylesheet'
        />
        <link
          href='/images/Duduk-Thumb.gif'
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
