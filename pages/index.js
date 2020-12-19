import Hero from "../src/components/LandingPage/Hero";
import WorkFlow from "../src/components/LandingPage/WorkFlow";
import FeaturedPortfolios from "../src/components/LandingPage/FeaturedPortfolio";
import Services from "../src/components/LandingPage/Services";
import LetsTalk from "../src/components/LandingPage/LetsTalk";
import { motion } from "framer-motion";
import routeAnim from "../public/animations/routingAnim.json";
const Home = (params) => {
  return (
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
  );
};

export default Home;
