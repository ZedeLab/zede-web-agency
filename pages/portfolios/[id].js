import Header from "../../src/components/PageHeader";
import Portfolio from "../../src/components/Portfolios/Detail";
const PortfolioDetail = (params) => {
  return (
    <>
      <Header pageTitle='Our Work' backgroundImgUrl='/images/our-work.jpg' />
      <Portfolio />
    </>
  );
};

export default PortfolioDetail;
