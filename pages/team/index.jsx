import Head from "next/head";
import Header from "../../src/components/PageHeader";
import Team from "../../src/components/Team";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";
import { getTeam } from "@zede-services/api";

const OurTeam = ({ team }) => {
  return (
    <>
      <Head>
        <title>{team.title} - Zede Tech agency</title>
        <meta content={team.description} name='description' />
        {/* Open Graph tags */}
        <meta
          property='og:title'
          content={`${team.title} - Zede Tech Agency`}
        />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_SERVER}${team.shareImgUrl}`}
        />
        <meta property='og:description' content={team.description} />
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
            <Team data={team.data} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const team = await getTeam();

  return {
    props: { team }, // will be passed to the page component as props
  };
}

export default OurTeam;
