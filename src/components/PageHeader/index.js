import { makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from "classnames";

const PageHeader = ({ pageTitle, backgroundImgUrl }) => {
  const useStyle = makeStyles((theme) => ({
    background: {
      backgroundImage: `url(${backgroundImgUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "5% 35%",
      paddingBottom: "160px",
    },
    title: {
      width: "500px",
    },
  }));
  const classes = useStyle();

  return (
    <div className={clsx("section-2 page-header ", classes.background)}>
      <div className='banner-overlay'></div>
      <div className='wrapper left-aligned'>
        <div className='row-2'>
          <div className='col-2 lg-6 md-4'>
            <Typography
              variant='h1'
              className={clsx("no-margins page-title", classes.title)}
            >
              {pageTitle}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
