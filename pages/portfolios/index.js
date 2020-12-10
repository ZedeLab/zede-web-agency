import Header from "../../src/components/PageHeader";
import Portfolios from "../../src/components/Portfolios";
const Portfolio = (params) => {
  return (
    <>
      <Header pageTitle='Our Work' backgroundImgUrl='images/our-work.jpg' />
      <Portfolios />
    </>
  );
};

export default Portfolio;
