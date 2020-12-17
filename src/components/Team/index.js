import { Grid, makeStyles, Typography } from "@material-ui/core";
import TeamMember from "./TeamMember";
import data from "./data.json";
import { uniqueId } from "lodash";

const useStyle = makeStyles((theme) => ({
  teamsWrapper: {
    width: "100vw",
    maxWidth: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  descriptionContainer: {
    padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,
  },
  description: {
    ...theme.typography.h2,
    [theme.breakpoints.down("xs")]: {
      ...theme.typography.h3,
    },
  },
}));
const OurTeam = (params) => {
  const classes = useStyle();
  return (
    <Grid container direction='column' alignItems='center'>
      <Grid
        item
        md={8}
        sm={10}
        xs={12}
        className={classes.descriptionContainer}
      >
        <Typography
          variant='h2'
          color='textSecondary'
          className={classes.description}
        >
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
