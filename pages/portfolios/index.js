import Header from "../../src/components/PageHeader";
import Portfolios from "../../src/components/Portfolios";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";

const Portfolio = (params) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={routeAnim.stagger}>
        <motion.div variants={routeAnim.fadeInUp}>
          <Header pageTitle='Our Work' backgroundImgUrl='images/our-work.jpg' />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <Portfolios />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
