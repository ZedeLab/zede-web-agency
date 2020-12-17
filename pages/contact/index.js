import Header from "../../src/components/PageHeader";
import LetsTalk from "../../src/components/LetsTalk";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";

const ContactUs = (params) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={routeAnim.stagger}>
        <motion.div variants={routeAnim.fadeInUp}>
          <Header
            pageTitle='Let us Talk'
            backgroundImgUrl='images/lets-talk.jpg'
          />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <LetsTalk />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
