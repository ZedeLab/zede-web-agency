import {
  Fade,
  Grid,
  makeStyles,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { uniqueId } from "lodash";
import { useOnScreen } from "../../../../utils/hooks/useOnScreen";
import { ReactSVG } from "react-svg";

const useStyle = makeStyles((theme) => ({
  title: {
    fontFamily: "Montserrat, sans-serif",
    lineHeight: 1.15,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(5),
  },

  text: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
  },
  button: {
    borderRadius: theme.spacing(5),
    width: "fit-content",
  },
  svgContainer: {
    "& svg": {
      width: "64px",
      height: "64px",
      fill: theme.palette.secondary.main,
    },
  },
}));
const ServicesSection = ({ services }) => {
  const classes = useStyle();

  const theme = useTheme();
  const matchSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [setRef, visible] = useOnScreen({ threshold: "0" });

  let timeout = 300;
  return (
    <Grid
      container
      direction={matchSmallScreen ? "column" : "row"}
      wrap='wrap'
      spacing={3}
      ref={setRef}
    >
      {Object.keys(services).map((title) => {
        return (
          <Grid item xs={matchSmallScreen ? 12 : 4} key={uniqueId()}>
            <Slide direction='left' in={visible} timeout={(timeout += 300)}>
              <div className={classes.serviceContainer}>
                <ReactSVG
                  className={classes.svgContainer}
                  src={services[title].img}
                />
                <Typography variant='h4' color='secondary'>
                  {title}
                </Typography>
                <Typography
                  variant='body1'
                  // className='paragraph-small short-paragraph'
                >
                  {services[title].content}
                </Typography>
              </div>
            </Slide>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ServicesSection;
