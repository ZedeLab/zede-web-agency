import Landing from "../src/components/Landing";
import WorkFlow from "../src/components/WorkFlow";
import FeaturedPortfolios from "../src/components/Portfolio/Featured";
const Home = (params) => {
  return (
    <>
      <Landing />
      <WorkFlow />
      <FeaturedPortfolios />
    </>
  );
};

export default Home;
