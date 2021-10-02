import { Grid, makeStyles, Paper } from "@material-ui/core";
import PortfolioSummery from "./Summary";

import { uniqueId } from "lodash";
import sharedStyle from "../../utils/style/js/sharedStyle";
import Pagination from "@material-ui/lab/Pagination";
import { useState } from "react";
import { PaginationItem } from "@material-ui/lab";

const PortFolio = ({ data }) => {
  const useStyle = makeStyles((theme) => {
    const mainStyle = sharedStyle();

    return {
      wrapper: {
        ...mainStyle.wrapper,
        // backgroundColor: theme.palette.primary.main,
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
        color: theme.palette.primary.light,
      },
      paginationItem: {
        color: theme.palette.primary.light,
        boxShadow: theme.shadows[5],
        fontSize: theme.spacing(2),
      },
    };
  });
  const classes = useStyle();
  const [page, setPage] = useState(1);
  const perPage = 6;
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <Paper className={classes.wrapper}>
      <Grid container spacing={perPage} className={classes.container}>
        <Grid item xs={12} className={classes.paginationContainer}>
          <Pagination
            count={Math.ceil(Object.keys(data).length / perPage)}
            siblingCount={0}
            page={page}
            variant='outlined'
            color='secondary'
            className={classes.paginationContainer}
            onChange={handlePageChange}
            renderItem={(item) => (
              <PaginationItem
                size='small'
                className={classes.paginationItem}
                {...item}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={perPage}>
            {Object.keys(data)
              .splice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((blogTitle) => (
                <Grid key={uniqueId()} item xs={12} sm={12} md={6}>
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
      </Grid>
    </Paper>
  );
};

export default PortFolio;
