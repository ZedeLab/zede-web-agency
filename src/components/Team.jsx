import { Grid, makeStyles, Typography } from "@material-ui/core";
import TeamMember from "./TeamMember";
import { uniqueId } from "lodash";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "90vw",
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
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    // backgroundColor: "red",
  },
  descriptionContainer: {
    width: "100%",
    padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,

    textAlign: "center",
  },
  description: {
    width: "90%",
    textAlign: "center",

    fontWeight: 400,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: theme.palette.text.hint,
    marginBottom: theme.spacing(2),
  },
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
      <Grid item xs={12} className={classes.descriptionContainer}>
        <Typography variant='h3' className={classes.description}>
          A Perfect blend of creativity and wizardly. The best people formula
          for great agency
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
