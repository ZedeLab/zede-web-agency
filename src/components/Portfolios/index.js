import { makeStyles } from "@material-ui/core";
import PortfolioSummery from "./Summary";
import data from "./data.json";
import { uniqueId } from "lodash";
const useStyle = makeStyles((theme) => ({
  blogsWrapper: {
    width: "90%",
    // backgroundColor: "red",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "auto",
    paddingTop: theme.spacing(5),
  },
}));

const PortFolio = (params) => {
  const classes = useStyle();
  return (
    <div className={classes.blogsWrapper}>
      {Object.keys(data).map((blogTitle) => (
        <PortfolioSummery
          key={uniqueId()}
          id={data[blogTitle].id}
          imgUrl={data[blogTitle].coverImgUrl}
          title={blogTitle}
          description={data[blogTitle].description}
        />
      ))}
    </div>
  );
};

export default PortFolio;
