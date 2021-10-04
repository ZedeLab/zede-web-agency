import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

// Materuial-ui elements
import { ThemeProvider, Paper, responsiveFontSizes } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalTheme from "@zede-utils/globalTheme";

import { AnimatePresence } from "framer-motion";

// Core components
import Nav from "../src/components/Navigation";
import Footer from "../src/components/Footer";
export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const theme = responsiveFontSizes(GlobalTheme);
  return (
    <>
      <Head>
        <title>Zede Tech Agency</title>
        <meta http='Content-Type' content='text/html; charSet=utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#ffffff' />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/images/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/images/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
      </Head>
      <>
        <CssBaseline />
        <Paper>
          <ThemeProvider theme={theme}>
            <Nav />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
            <Footer />
          </ThemeProvider>
        </Paper>
      </>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
