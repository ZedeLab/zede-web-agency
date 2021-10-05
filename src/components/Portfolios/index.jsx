import { Grid, makeStyles, Paper } from "@material-ui/core";
import PortfolioSummery from "./Summery";

import { uniqueId } from "lodash";
import Pagination from "@material-ui/lab/Pagination";
import { useState } from "react";
import { PaginationItem } from "@material-ui/lab";

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
  pagination: {
    backgroundColor: theme.palette.text.secondary,
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  paginationItem: {
    boxShadow: theme.shadows[5],
    fontSize: theme.spacing(2),
  },
}));

const PortFolio = ({ data }) => {
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
