import Head from "next/head";
import Hero from "../src/components/LandingPage/Hero";
import WorkFlow from "../src/components/LandingPage/WorkFlow";
import FeaturedPortfolios from "../src/components/LandingPage/FeaturedPortfolio";
import Services from "../src/components/LandingPage/Services";
import LetsTalk from "../src/components/LandingPage/LetsTalk";
import { motion } from "framer-motion";
import routeAnim from "../public/animations/routingAnim.json";
const Home = (params) => {
  return (
    <>
      <Head>
        <meta
          content='Zede agency is a web development federation that uses state of the art technologies. From idea to design &amp; development to post launch support. Zede
          tech develops cost efficient, future proof solutions for companies
          that aim for impact.'
          name='description'
        />
        {/* Open Graph tags */}
        <meta property='og:site_name' content='Zede Tech Agency' />
        <meta property='og:title' content='Home Page' />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SERVER}/images/zede-logo-colored.svg`}
        />
        <meta
          property='og:description'
          content='Zede agency is a web development federation that uses state of the art technologies. From idea to design &amp; development to post launch support. Zede
          tech develops cost efficient, future proof solutions for companies
          that aim for impact.'
        />
      </Head>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <Hero />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <WorkFlow />
          </motion.div>
          <motion.div id='landing-services' variants={routeAnim.fadeInUp}>
            <Services />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <FeaturedPortfolios />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <LetsTalk />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
