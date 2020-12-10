import { makeStyles } from "@material-ui/core";
import clx from "classnames";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    margin: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
  },
  imageContainer: {
    overflow: "hidden",
    boxShadow: theme.shadows[8],
    marginBottom: theme.spacing(1),
    maxWidth: "400px",
  },
}));

const PortfolioSummary = ({ large, imgUrl, imgSrcSet, title, description }) => {
  const classes = useStyle();
  const imageSize = large
    ? "(max-width: 479px) 81vw, (max-width: 767px) 88vw, (max-width: 991px) 44vw, 45vw"
    : "(max-width: 479px) 81vw, (max-width: 744px) 86vw, (max-width: 767px) 640px, (max-width: 991px) 44vw, 45vw";
  return (
    <div className={clx(classes.wrapper, "big-blog-thumbnail-container")}>
      <a href='#' className='works-link w-inline-block'>
        <div className={classes.imageContainer}>
          <img
            src={imgUrl}
            srcSet={imgSrcSet}
            sizes={imageSize}
            alt=''
            className='column-image'
          />
        </div>
        <div className='centre-align'>
          <h4 className='no-bottom-margins'>{title}</h4>
          <p className='low-opacity'>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioSummary;
