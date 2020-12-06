import Landing from "../src/components/Landing";
import WorkFlow from "../src/components/WorkFlow";
import FeaturedPortfolios from "../src/components/Portfolio/Featured";
import Services from "../src/components/Services";
const Home = (params) => {
  return (
    <>
      <Landing />
      <WorkFlow />
      <FeaturedPortfolios />
      <Services />
    </>
  );
};

export default Home;
