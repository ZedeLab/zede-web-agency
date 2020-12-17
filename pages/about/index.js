import Header from "../../src/components/PageHeader";
import AboutZede from "../../src/components/AboutZede";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";

const AboutUs = (params) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={routeAnim.stagger}>
        <motion.div variants={routeAnim.fadeInUp}>
          <Header
            pageTitle='About Zede'
            backgroundImgUrl='images/about-us.jpg'
          />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <AboutZede />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
