import Head from "next/head";
import Header from "../../src/components/PageHeader";
import Portfolios from "../../src/components/Portfolios";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";
import { getPortfolios } from "@zede-services/api";

const Portfolio = ({ portfolios }) => {
  return (
    <>
      <Head>
        <title>{portfolios.title} - Zede Tech agency</title>
        <meta content={portfolios.description} name='description' />
        {/* Open Graph tags */}
        <meta
          property='og:title'
          content={`${portfolios.title} - Zede Tech Agency`}
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SERVER}${portfolios.shareImgUrl}`}
        />
        <meta property='og:description' content={portfolios.description} />
      </Head>

      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <Header
              pageTitle='Our Work'
              backgroundImgUrl='images/our-work.jpg'
            />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <Portfolios data={portfolios.data} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const portfolios = await getPortfolios();

  return {
    props: { portfolios }, // will be passed to the page component as props
  };
}

export default Portfolio;
