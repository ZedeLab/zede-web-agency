import PortfolioSummery from "../Summary";

const Featuredortfolios = () => {
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
        <div className='row no-bottom-margins'>
          <div className='col-2 lg-6'>
            <PortfolioSummery
              imgUrl='images/colonization.jpg'
              imgSrcSet='images/colonization-p-500.jpeg 500w, images/colonization.jpg 640w'
              title='Colonization by Colors'
              discription='video campaign'
            />
            <PortfolioSummery
              imgUrl='images/art-background-blur-1964471.jpg'
              imgSrcSet='images/art-background-blur-1964471-p-500.jpeg 500w, images/art-background-blur-1964471.jpg 640w'
              title='Neon Pops and Dos'
              discription='interactive advertisement'
            />
          </div>

          <div className='col-2 lg-6'>
            <PortfolioSummery
              // large
              imgUrl='images/colonization.jpg'
              imgSrcSet='images/photo-1522733603432-44910cfd6773-p-500.jpeg 500w, images/photo-1522733603432-44910cfd6773-p-800.jpeg 800w, images/photo-1522733603432-44910cfd6773.jpeg 934w'
              title='Colonization by Colors'
              discription='video campaign'
            />
            <PortfolioSummery
              imgUrl='images/sruvs.jpeg'
              imgSrcSet='images/colonization-p-500.jpeg 500w, images/colonization.jpg 640w'
              title='Surveillance People by Sruvs'
              discription='wallpaper media'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuredortfolios;
