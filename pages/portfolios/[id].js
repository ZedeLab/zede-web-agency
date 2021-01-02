import Head from "next/head";
import Header from "../../src/components/PageHeader";
import Portfolio from "../../src/components/Portfolios/Detail";
import data from "../../src/components/Portfolios/data.json";
import { motion } from "framer-motion";
import routeAnim from "../../public/animations/routingAnim.json";

const PortfolioDetail = ({ title, portfolio, prev, next }) => {
  return (
    <>
      <Head>
        <title>{title} - Zede agency</title>
        <meta content={portfolio.description} name='description' />
        {/* Open Graph tags */}
        <meta property='og:title' content={`Portfolio - ${title}`} />
        <meta property='og:image' content={portfolio.imgUrl} />
        <meta property='og:description' content={portfolio.description} />
      </Head>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={routeAnim.stagger}>
          <motion.div variants={routeAnim.fadeInUp}>
            <Header
              pageTitle={title}
              backgroundImgUrl={portfolio.coverImgUrl}
            />
          </motion.div>
          <motion.div variants={routeAnim.fadeInUp}>
            <Portfolio portfolioData={portfolio} nextId={next} prevId={prev} />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(data).map((post) => ({
    params: { id: `${data[post].id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const titleKeys = Object.keys(data);
  const portfolioTitle = titleKeys.filter(
    (title) => data[title].id === params.id
  );

  const currentIndex = titleKeys.indexOf(portfolioTitle[0]);

  let nextPortFolioId = null,
    prevPortFolioId = null;
  if (currentIndex === 0) {
    nextPortFolioId = data[titleKeys[currentIndex + 1]].id;
  } else if (currentIndex === titleKeys.length - 1) {
    prevPortFolioId = data[titleKeys[currentIndex - 1]].id;
  } else {
    nextPortFolioId = data[titleKeys[currentIndex + 1]].id;
    prevPortFolioId = data[titleKeys[currentIndex - 1]].id;
  }

  const portfolio = data[portfolioTitle];

  return {
    props: {
      title: portfolioTitle,
      portfolio: portfolio,
      next: nextPortFolioId,
      prev: prevPortFolioId,
    }, // will be passed to the page component as props
  };
}

export default PortfolioDetail;
