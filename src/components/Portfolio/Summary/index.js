const PortfolioSummary = ({ large, imgUrl, imgSrcSet, title, discription }) => {
  const imageSize = large
    ? "(max-width: 479px) 81vw, (max-width: 767px) 88vw, (max-width: 991px) 44vw, 45vw"
    : "(max-width: 479px) 81vw, (max-width: 744px) 86vw, (max-width: 767px) 640px, (max-width: 991px) 44vw, 45vw";
  return (
    <div className='big-blog-thumbnail-container'>
      <a href='#' className='works-link w-inline-block'>
        <img
          src={imgUrl}
          srcSet={imgSrcSet}
          sizes={imageSize}
          alt=''
          className='column-image'
        />
        <div className='centre-align'>
          <h4 className='no-bottom-margins'>{title}</h4>
          <p className='low-opacity'>{discription}</p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioSummary;
