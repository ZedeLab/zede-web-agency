import Header from "../../src/components/PageHeader";
import Portfolios from "../../src/components/Portfolio";
const Portfolio = (params) => {
  return (
    <>
      <Header pageTitle='Our Work' backgroundImgUrl='images/our-work.jpg' />
      <Portfolios />
    </>
  );
};

export default Portfolio;
