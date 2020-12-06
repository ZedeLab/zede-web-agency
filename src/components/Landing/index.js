const landing = (params) => {
  return (
    <div className='section full-screen background-image-side hero'>
      <div className='wrapper'>
        <div className='row'>
          <div className='col'>
            <div className='hero-content'>
              <h1 className='hero-title'>
                Come to us with a vision. <br />
                We’ll help you craft it.
                <br />
              </h1>
              <p className='hero-description'>
                We build digital product, from idea to design, development to
                marketing &amp; PR to post launch support
              </p>
              <div className='value-proposition-buttons'>
                <a href='#' className='button margin-right w-button'>
                  Get free consultation
                </a>
                <a href='#' className='button ghost w-button'>
                  learn more
                </a>
              </div>
            </div>
            <img
              src='images/hero.png'
              srcSet='images/hero-p-500.png 500w, images/hero-p-800.png 800w, images/hero-p-1080.png 1080w, images/hero.png 1200w'
              sizes='(max-width: 479px) 81vw, (max-width: 767px) 450px, 700px'
              alt=''
              className='hero-image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
