import Header from "../../src/components/PageHeader";
import Team from "../../src/components/Team";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";

const OurTeam = (params) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={routeAnim.stagger}>
        <motion.div variants={routeAnim.fadeInUp}>
          <Header
            pageTitle='Meet our team'
            backgroundImgUrl='images/alex-kotliarskyi-361081-unsplash.jpg'
          />
        </motion.div>
        <motion.div variants={routeAnim.fadeInUp}>
          <Team />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OurTeam;
