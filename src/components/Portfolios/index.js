import { Grid, makeStyles, Paper } from "@material-ui/core";
import PortfolioSummery from "./Summary";
import data from "./data.json";
import { uniqueId } from "lodash";
import sharedStyle from "../../utils/style/js/sharedStyle";
import Pagination from "@material-ui/lab/Pagination";
import { useRef, useState } from "react";

const PortFolio = (params) => {
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const useStyle = makeStyles((theme) => {
    const mainStyle = sharedStyle();

    return {
      wrapper: {
        ...mainStyle.wrapper,
        backgroundColor: theme.palette.primary.main,
      },

      container: {
        ...mainStyle.container,
      },
      pagination: {
        backgroundColor: theme.palette.text.secondary,
      },
      paginationContainer: {
        display: "flex",
        justifyContent: "center",
      },
    };
  });
  const classes = useStyle();
  return (
    <Paper className={classes.wrapper}>
      <Grid container spacing={5} className={classes.container}>
        <Grid item xs={12} className={classes.paginationContainer}>
          <Pagination
            count={Math.ceil(Object.keys(data).length / 5)}
            siblingCount={0}
            page={page}
            variant='outlined'
            color='secondary'
            className={classes.paginationContainer}
            onChange={handlePageChange}
          />
        </Grid>

        <Grid container spacing={5}>
          {Object.keys(data)
            .splice((page - 1) * 5, (page - 1) * 5 + 5)
            .map((blogTitle) => (
              <Grid key={uniqueId()} item sm={12} md={6}>
                <PortfolioSummery
                  id={data[blogTitle].id}
                  imgUrl={data[blogTitle].coverImgUrl}
                  title={blogTitle}
                  description={data[blogTitle].description}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PortFolio;
