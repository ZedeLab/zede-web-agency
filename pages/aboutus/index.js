import Header from "../../src/components/PageHeader";
import AboutZede from "../../src/components/AboutZede";

const AboutUs = (params) => {
  return (
    <>
      <Header pageTitle='About Zede' backgroundImgUrl='images/about-us.jpg' />
      <AboutZede />
    </>
  );
};

export default AboutUs;
