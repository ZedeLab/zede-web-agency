import Header from "../../src/components/PageHeader";
import Team from "../../src/components/Team";
const OurTeam = (params) => {
  return (
    <>
      <Header
        pageTitle='Meet our team'
        backgroundImgUrl='images/alex-kotliarskyi-361081-unsplash.jpg'
      />
      <Team />
    </>
  );
};

export default OurTeam;
