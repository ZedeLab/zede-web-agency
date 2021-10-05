import { Grid, makeStyles, Typography } from "@material-ui/core";
import TeamMember from "./TeamMember";
import { uniqueId } from "lodash";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "80vw",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  teamsWrapper: {
    width: "100vw",
    maxWidth: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  descriptionContainer: {
    padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,
  },
  description: {},
}));
const OurTeam = ({ data }) => {
  const classes = useStyle();

  return (
    <Grid
      container
      direction='column'
      alignItems='flex-start'
      className={classes.container}
    >
      <Grid
        item
        xs={12}
        sm={10}
        md={8}
        className={classes.descriptionContainer}
      >
        <Typography variant='h3' className={classes.description}>
          A Perfect blend of creativity and wizardy. The best people formula for
          great agency
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.teamsWrapper}>
          {Object.keys(data).map((member) => (
            <TeamMember
              key={uniqueId()}
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
      </Grid>
    </Grid>
  );
};

export default OurTeam;
