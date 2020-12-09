import Hero from "../src/components/LandingPage/Hero";
import WorkFlow from "../src/components/LandingPage/WorkFlow";
import FeaturedPortfolios from "../src/components/LandingPage/FeaturedPortfolio";
import Services from "../src/components/LandingPage/Services";
import LetsTalk from "../src/components/LandingPage/LetsTalk";

const Home = (params) => {
  return (
    <>
      <Hero />
      <WorkFlow />
      <Services />
      <FeaturedPortfolios />
      <LetsTalk />
    </>
  );
};

export default Home;
