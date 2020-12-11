import Header from "../../src/components/PageHeader";
import Portfolio from "../../src/components/Portfolios/Detail";
import data from "../../src/components/Portfolios/data.json";
const PortfolioDetail = ({ title, portfolio, prev, next }) => {
  return (
    <>
      <Header pageTitle={title} backgroundImgUrl={portfolio.coverImgUrl} />
      <Portfolio portfolioData={portfolio} nextId={next} prevId={prev} />
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
