import Head from "next/head";
import Header from "../../src/components/PageHeader";
import Team from "../../src/components/Team";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";
import data from "../../src/components/Team/data.json";

const OurTeam = ({ pageData }) => {
  return (
    <>
      <Head>
        <title>{pageData.title} - Zede agency</title>
        <meta content={pageData.description} name='description' />
        {/* Open Graph tags */}
        <meta
          property='og:title'
          content={`${pageData.title} - Zede Tech Agency`}
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SERVER}${pageData.shareImgUrl}`}
        />
        <meta property='og:description' content={pageData.description} />
      </Head>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <Header
              pageTitle='Meet our team'
              backgroundImgUrl='images/alex-kotliarskyi-361081-unsplash.jpg'
            />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <Team data={pageData.data} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const pageData = data;

  return {
    props: {
      pageData: pageData,
    }, // will be passed to the page component as props
  };
}

export default OurTeam;
