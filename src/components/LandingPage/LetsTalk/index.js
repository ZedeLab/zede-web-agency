import { Button, makeStyles, Typography } from "@material-ui/core";
import clx from "classnames";

const useStyle = makeStyles((theme) => ({
  button: {
    color: theme.palette.common.white,
    paddingTop: "16px",
    paddingBottom: "16px",
    boxShadow: "0 4px 11px 0 rgba(117, 69, 1, 0.33)",
  },
}));

const LetsTalk = (params) => {
  const classes = useStyle();
  return (
    <>
      <div className='section-divider'>
        <img
          src='images/triangle-topright.png'
          srcSet='images/triangle-topright-p-500.png 500w, images/triangle-topright.png 1920w'
          sizes='100vw'
          alt=''
          className='bg-divider'
        />
      </div>
      <div className='section bgaccent-color section-triangle'>
        <div className='wrapper'>
          <div className='row left-aligned'>
            <div className='col-2 lg-6 md-3 xs-2 left-aligned'>
              <div className='contact-container'>
                <div className='margin-bottom left-aligned'>
                  <Typography
                    variant='body1'
                    className='micro-heading left-aligned'
                  >
                    lets work together
                  </Typography>
                  <Typography
                    variant='h2'
                    className='section-header left-aligned short-paragraph'
                  >
                    Great vision without great people is irrelevant.
                    <br />
                  </Typography>
                  <Typography variant='body1' className='short-paragraph'>
                    A new project is an opportunity to create something unique.{" "}
                    <br />
                  </Typography>
                </div>
                <Button
                  variant='contained'
                  color='secondary'
                  className={clx(classes.button, "button")}
                >
                  Let&#x27;s Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='letters-container'>
          <img
            src='images/A.png'
            width='160'
            srcSet='images/A-p-500.png 500w, images/A.png 630w'
            sizes='(max-width: 991px) 100vw, 160px'
            alt=''
            className='contact-letters letter-a'
          />
          <img
            src='images/T23x.png'
            width='160'
            srcSet='images/T23x-p-500.png 500w, images/T23x.png 693w'
            sizes='(max-width: 991px) 100vw, 160px'
            alt=''
            className='contact-letters letter-t2'
          />
          <img
            src='images/C3x.png'
            width='130'
            srcSet='images/C3x-p-500.png 500w, images/C3x.png 594w'
            sizes='(max-width: 991px) 100vw, 130px'
            alt=''
            className='contact-letters letter-c2'
          />
          <img
            src='images/A.png'
            width='160'
            srcSet='images/A-p-500.png 500w, images/A.png 630w'
            sizes='(max-width: 991px) 100vw, 160px'
            alt=''
            className='contact-letters letter-a'
          />
          <img
            src='images/T.png'
            width='170'
            srcSet='images/T-p-500.png 500w, images/T.png 642w'
            sizes='(max-width: 991px) 100vw, 170px'
            alt=''
            className='contact-letters letter-t'
          />
          <img
            src='images/N2.png'
            width='130'
            srcSet='images/N2-p-500.png 500w, images/N2.png 600w'
            sizes='(max-width: 991px) 100vw, 130px'
            alt=''
            className='contact-letters letter-n'
          />
          <img
            src='images/O.png'
            width='120'
            alt=''
            className='contact-letters letter-o'
          />
          <img
            src='images/C2.png'
            width='150'
            srcSet='images/C2-p-500.png 500w, images/C2.png 690w'
            sizes='(max-width: 991px) 100vw, 150px'
            alt=''
            className='contact-letters letter-c'
          />
        </div>
      </div>
    </>
  );
};

export default LetsTalk;
