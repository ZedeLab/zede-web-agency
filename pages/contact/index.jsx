import Head from "next/head";
import Header from "../../src/components/PageHeader";
import Contact from "../../src/components/Contact";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";

const ContactUs = (params) => {
  return (
    <>
      <Head>
        <title> Contact Us - Zede Tech Agency</title>
        <meta
          content='Tell us about your vision and we’ll figure out the best option for
              you and your project.'
          name='description'
        />
        {/* Open Graph tags */}
        <meta property='og:title' content={`Contact Us - Zede Tech Agency`} />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SERVER}/images/contact.svg`}
        />
        <meta
          property='og:description'
          content='Tell us about your vision and we’ll figure out the best option for
              you and your project.'
        />
      </Head>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <Header
              pageTitle='Let us Talk'
              backgroundImgUrl='images/lets-talk.jpg'
            />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <Contact />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactUs;
