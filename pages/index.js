import Landing from "../src/components/Hero";
import WorkFlow from "../src/components/WorkFlow";
import FeaturedPortfolios from "../src/components/Portfolio/Featured";
import Services from "../src/components/Services";
import LetsTalk from "../src/components/LetsTalk";
const Home = (params) => {
  return (
    <>
      <Landing />
      <WorkFlow />
      <Services />
      <FeaturedPortfolios />
      <LetsTalk />
    </>
  );
};

export default Home;
