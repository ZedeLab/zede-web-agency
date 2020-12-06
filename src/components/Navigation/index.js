const navigation = (params) => {
  return (
    <div
      data-collapse='medium'
      data-animation='default'
      data-duration='400'
      className='nav-bar w-nav'
    >
      <div className='wrapper navbar-2 w-container'>
        <div className='logo-area'>
          <a href='#' className='nav-logo w-inline-block'>
            <img src='images/duduk.svg' width='106' alt='' />
          </a>
        </div>
        <nav role='navigation' className='nav-menu-2 w-nav-menu'>
          <a href='index.html' className='nav-link w-nav-link w--current'>
            Home
          </a>
          <a href='about-us.html' className='nav-link w-nav-link'>
            About Us
          </a>
          <a href='our-team.html' className='nav-link w-nav-link'>
            Our Team
          </a>
          <a href='blog.html' className='nav-link w-nav-link'>
            Blog
          </a>
          <a href='portfolio.html' className='nav-link w-nav-link'>
            Portfolio
          </a>
          <div className='nav-cta-button-container'>
            <a
              href='contact-us.html'
              className='nav-link-2 border cta w-nav-link'
            >
              Contact Us
            </a>
          </div>
        </nav>
        <div className='menu-button-2 w-nav-button'>
          <div className='burger-icon w-icon-nav-menu'></div>
        </div>
      </div>
    </div>
  );
};

export default navigation;
