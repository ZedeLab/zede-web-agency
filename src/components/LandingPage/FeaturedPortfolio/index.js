import { makeStyles } from "@material-ui/core";
import PortfolioSummery from "../../Portfolios/Summary";
import data from "../../Portfolios/data.json";
import { uniqueId } from "lodash";
const useStyle = makeStyles((theme) => ({
  blogsWrapper: {
    width: "100%",
    // backgroundColor: "red",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const FeaturePortfolios = () => {
  const classes = useStyle();
  return (
    <div className='section no-top-padding'>
      <div className='wrapper'>
        <div className='row'>
          <div className='col'>
            <div className='centre-align'>
              <p className='micro-heading left-aligned'>portfolio</p>
              <h3 className='section-heading left-aligned no-margin-top'>
                See what&#x27;s cooking at our labs
              </h3>
            </div>
            <div className='row centre-align'>
              <div className='col-2 lg-8'></div>
            </div>
          </div>
        </div>
        <div className={classes.blogsWrapper}>
          {Object.keys(data).map((blogTitle) => {
            if (data[blogTitle].featured) {
              return (
                <PortfolioSummery
                  key={uniqueId()}
                  id={data[blogTitle].id}
                  imgUrl={data[blogTitle].coverImgUrl}
                  imgSrcSet={data[blogTitle].imgSrcSet}
                  title={blogTitle}
                  description={data[blogTitle].description}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturePortfolios;
