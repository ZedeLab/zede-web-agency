import { Typography } from "@material-ui/core";
import TeamMember from "./TeamMember";
import data from "./data.json";
const OurTeam = (params) => {
  return (
    <div className='section'>
      <div className='wrapper-2'>
        <div className='row centre-align'>
          <div className='col-2 lg-6 centre-align'>
            <Typography variant='h2' className='section-header-2'>
              A Perfect blend of creativity and wizardy. The best people formula
              for great agency
            </Typography>
          </div>
        </div>
        <div className='row-2'>
          {Object.keys(data).map((member) => (
            <TeamMember
              name={member}
              jobTitle={data[member].jobTitle}
              imgUrl={data[member].imgUrl}
              discription={data[member].description}
              facebook={data[member].facebook}
              linkedIn={data[member].linkedIn}
              github={data[member].github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
