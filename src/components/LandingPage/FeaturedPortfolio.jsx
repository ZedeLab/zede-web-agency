import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import PortfolioSummery from "../Portfolios/Summery";
import { uniqueId } from "lodash";

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
    width: "70vw",
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },

  microHeading: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  sectionHeading: {
    lineHeight: 1.15,
    fontWeight: 600,
  },
  section: {
    padding: theme.spacing(2),
  },
}));

const FeaturePortfolios = ({ data }) => {
  const classes = useStyle();
  return (
    <Paper className={classes.wrapper}>
      <Grid container direction='column' className={classes.container}>
        <Grid item>
          <Typography className={classes.microHeading}>portfolio</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h3' className={classes.sectionHeading}>
            See what&#x27;s cooking at our labs
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction='row' alignItems='center'>
            {Object.keys(data.data).map((blogTitle) => {
              if (data.data[blogTitle].featured) {
                return (
                  <Grid
                    key={uniqueId()}
                    item
                    xs={12}
                    sm={6}
                    className={classes.section}
                  >
                    <PortfolioSummery
                      key={uniqueId()}
                      id={data.data[blogTitle].id}
                      imgUrl={data.data[blogTitle].coverImgUrl}
                      imgSrcSet={data.data[blogTitle].imgSrcSet}
                      title={blogTitle}
                      description={data.data[blogTitle].description}
                    />
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    // <div className='section no-top-padding'>
    //   <div className='wrapper'>
    //     <div className='row'>
    //       <div className='col'>
    //         <div className='centre-align'>
    //           <p className='micro-heading left-aligned'>portfolio</p>
    //           <h3 className='section-heading left-aligned no-margin-top'>
    //             See what&#x27;s cooking at our labs
    //           </h3>
    //         </div>
    //         <div className='row centre-align'>
    //           <div className='col-2 lg-8'></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={classes.blogsWrapper}>
    //       {Object.keys(data).map((blogTitle) => {
    //         if (data[blogTitle].featured) {
    //           return (
    //             <PortfolioSummery
    //               key={uniqueId()}
    //               id={data[blogTitle].id}
    //               imgUrl={data[blogTitle].coverImgUrl}
    //               imgSrcSet={data[blogTitle].imgSrcSet}
    //               title={blogTitle}
    //               description={data[blogTitle].description}
    //             />
    //           );
    //         }
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default FeaturePortfolios;
