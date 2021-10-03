import Head from "next/head";
import Header from "../../src/components/PageHeader";
import AboutZede from "../../src/components/AboutZede";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";
import { getAboutZede } from "@zede-services/api";

const AboutUs = ({ aboutZede }) => {
  return (
    <>
      <Head>
        <title>{aboutZede.title} - Zede Tech Agency</title>
        <meta content={aboutZede.description} name='description' />
        {/* Open Graph tags */}
        <meta
          property='og:title'
          content={`${aboutZede.title} - Zede Tech Agency`}
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SERVER}${aboutZede.shareImgUrl}`}
        />
        <meta property='og:description' content={aboutZede.description} />
      </Head>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <Header
              pageTitle='About Zede'
              backgroundImgUrl='images/about-us.jpg'
            />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <AboutZede data={aboutZede.data} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const aboutZede = await getAboutZede();

  return {
    props: { aboutZede }, // will be passed to the page component as props
  };
}

export default AboutUs;
