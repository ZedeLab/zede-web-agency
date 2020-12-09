const WorkFlow = (params) => {
  return (
    <div className='section no-bottom-padding'>
      <div className='wrapper'>
        <div className='row centre-align'>
          <div className='col-2 lg-8 md-4 centre-align'>
            <div className='centre-align margin-bottom'>
              <h3 className='section-title'>
                We are creatives, designers, developers and marketers from
                Surabaja Indonesia driven by a common purpose to inspire, create
                and launch ground-breaking ideas.
              </h3>
              <p className='sub-title margin-bottom margin-top'>
                We love taking your vision to reality. Here&#x27;s how we work:
              </p>
            </div>
            <div className='row centre-align'>
              <div className='col-2 lg-8'></div>
            </div>
          </div>
        </div>
        <div className='step-container'>
          <div className='row margin-bottom sm-reverse-layout'>
            <div className='col-2 lg-1 hidden-lg-down'></div>
            <div className='col-2 lg-4 sm-2 lg-vertical-align'>
              <div className='sm-align-centre'>
                <h3 className='h3'>
                  We find the right users, so you don&#x27;t have to
                </h3>
                <p className='paragraph-small'>
                  Duduk&#x27;s technology determines the right contacts to
                  target based on your company&#x27;s workflow.
                  <br />
                  <br />
                  When it comes to marketing your brand or business we always
                  make sure to look before we take off. We are working together
                  with you to design and execute innovative, data-driven
                  cross-channel strategies that win real results.
                </p>
              </div>
            </div>
            <div className='col-2 lg-1 hidden-lg-down'></div>
            <div className='col-2 lg-5'>
              <img
                src='images/funnels.png'
                width='571'
                srcSet='images/funnels-p-500.png 500w, images/funnels-p-800.png 800w, images/funnels.png 877w'
                sizes='(max-width: 479px) 81vw, (max-width: 767px) 88vw, (max-width: 991px) 44vw, 37vw'
                alt=''
                className='value-proposition-hero-image'
              />
            </div>
            <div className='col-2 lg-1 hidden-lg-down'></div>
          </div>
        </div>
        <div className='step-container'>
          <div className='row'>
            <div className='col-2 lg-1 hidden-lg-down'></div>
            <div className='col-2 lg-5'>
              <img
                src='images/adv.png'
                srcSet='images/adv-p-500.png 500w, images/adv-p-800.png 800w, images/adv.png 814w'
                sizes='(max-width: 479px) 81vw, (max-width: 767px) 88vw, (max-width: 991px) 44vw, 37vw'
                alt=''
                className='value-proposition-hero-image'
              />
            </div>
            <div className='col-2 lg-1 hidden-lg-down'></div>
            <div className='col-2 lg-4 sm-2 lg-vertical-align'>
              <div className='sm-align-centre'>
                <h3 className='h3'>
                  We start the advertising campaign programme
                </h3>
                <p className='paragraph-small'>
                  We work with you to determine the best verbiage that will make
                  the biggest impact.
                  <br />‍<br />
                  Using text, email, and voice, Duduk will personally reach out
                  on your behalf until your customers respond.If you don’t take
                  care of your partners, someone else will. We know how to
                  assist you with your relationships, analyze and prevail,
                  prevent or solve existing complications regardless if they are
                  internal or external.
                </p>
              </div>
            </div>
            <div className='col-2 lg-1 hidden-lg-down'></div>
          </div>
        </div>
        <div className='step-container low-z-index'>
          <div className='row margin-bottom sm-reverse-layout'>
            <div className='col-2 lg-1 hidden-lg-down'></div>
            <div className='col-2 lg-4 sm-2 lg-vertical-align'>
              <div className='sm-align-centre'>
                <h3 className='h3'>
                  Finally... you dunk it to the basket ring
                </h3>
                <p className='paragraph-small'>
                  This is where you pick up the conversation and close more
                  deals.
                  <br />
                  <br />
                  Your web presence is one of the most important tools for
                  communicating your brand and being able to acquire new
                  clients. It must be able to engage visitors and make them take
                  actions that convert into revenue.
                </p>
              </div>
            </div>
            <div className='col-2 lg-1 hidden-lg-down'></div>
            <div className='col-2 lg-5'>
              <img
                src='images/basket0.5x.png'
                width='571'
                alt=''
                className='value-proposition-hero-image'
              />
            </div>
            <div className='col-2 lg-1 hidden-lg-down'></div>
          </div>
        </div>
      </div>
      <img
        src='images/dashed-path.png'
        width='900'
        srcSet='images/dashed-path-p-500.png 500w, images/dashed-path-p-800.png 800w, images/dashed-path-p-1080.png 1080w, images/dashed-path-p-1600.png 1600w, images/dashed-path.png 1714w'
        sizes='(max-width: 991px) 100vw, 900px'
        alt=''
        className='dashed-line'
      />
    </div>
  );
};

export default WorkFlow;
