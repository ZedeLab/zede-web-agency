import { Grid, makeStyles, Paper, Slide, Typography } from "@material-ui/core";
import { uniqueId } from "lodash";
import { useOnScreen } from "@zede-hooks/useOnScreen";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    borderRadius: 0,
    padding: `${theme.spacing(6)}px 0px`,
    width: "100vw",
    maxWidth: "100%",
    overflow: "hidden",
    boxShadow: theme.shadows[0],
  },
  container: {
    width: "80vw",
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  title: {
    fontWeight: 700,

    marginBottom: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  subTitle: {
    width: "90%",
    textAlign: "center",
    fontSize: "11px",
    fontWeight: 400,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: theme.palette.text.hint,
    marginBottom: theme.spacing(2),
  },
  text: {
    lineBreak: "strict",
    textAlign: "justify",
    color: theme.palette.text.primary,
  },
  image: {
    width: "100%",
    maxWidth: "50px",
    maxHeight: "100px",
  },
}));

const AboutZede = ({ data }) => {
  const classes = useStyle();
  const [setRef, visible] = useOnScreen({ threshold: "0.2" });
  let timeout = 300;
  return (
    <Paper className={classes.wrapper} ref={setRef}>
      <Grid container className={classes.container} spacing={5}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            style={{ overflow: "hidden" }}
          >
            <Grid item md={10} xs={12}>
              <Typography
                variant='h3'
                color='textSecondary'
                className={classes.title}
              >
                {data.sectionOne.title}
              </Typography>
              <Typography
                variant='h4'
                color='textSecondary'
                className={classes.subTitle}
              >
                {data.sectionOne.subTitle}
              </Typography>

              <Slide direction='up' in={visible} timeout={1000}>
                <Typography color='textSecondary' className={classes.text}>
                  {data.sectionOne.paragraph}
                </Typography>
              </Slide>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            alignItems='center'
            spacing={5}
            style={{ overflow: "hidden" }}
          >
            <Grid item md={5} sm={12}>
              <Grid container spacing={3}>
                {data.sectionTwo.medial.map((url) => (
                  <Grid item xs={4} key={uniqueId()}>
                    <Slide
                      direction='right'
                      in={visible}
                      timeout={(timeout += 300)}
                    >
                      <img src={url} className={classes.image} alt='' />
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item md={7} sm={12}>
              <Typography
                variant='h3'
                color='textSecondary'
                className={classes.title}
              >
                {data.sectionTwo.title}
              </Typography>

              <Typography color='textSecondary' className={classes.text}>
                {data.sectionTwo.paragraph}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutZede;
