import { Icon } from "@material-ui/core";
import { loadCSS } from "fg-loadcss";
import { useEffect } from "react";

const Footer = (params) => {
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div className='section section-footer'>
      <div className='wrapper'>
        <div className='row-2'>
          <div className='col-2 lg-3 md-4'>
            <a href='#' data-ix='logo' className='footer-logo-2 w-nav-brand'>
              <img src='images/duduk-white.svg' width='104' alt='' />
            </a>
            <p className='ondark'>
              From empowering challenger brands to think big to helping global
              brands feel closer to home, we leverage technology to bring people
              closer to the products, content, and experiences they love.
            </p>
          </div>
          <div className='col-2 lg-2 sm-6'>
            <div className='footer-links-container'>
              <h5 className='footer-heading'>
                <a href='#' className='no-underline'>
                  Our Work
                </a>
              </h5>
              <a href='#' className='footer-link ondark'>
                Portfolio
              </a>
              <a href='blog.html' className='footer-link ondark'>
                Contact us
              </a>
              <a href='#' className='footer-link ondark'>
                Careers
              </a>
            </div>
          </div>
          <div className='col-2 lg-2 sm-6'>
            <div className='footer-links-container'>
              <h5 className='footer-heading'>
                <a href='#' className='no-underline'>
                  Company
                </a>
              </h5>
              <a href='#' className='footer-link ondark'>
                About Us
              </a>
              <a href='#' className='footer-link ondark'>
                Our Team
              </a>
              <a href='#' className='footer-link ondark'>
                Blog
              </a>
              <a href='#' className='footer-link ondark'>
                FAQs
              </a>
            </div>
          </div>
          <div className='col-2 lg-2 sm-6'>
            <div className='footer-links-container'>
              <h5 className='footer-heading'>
                <a href='#' className='no-underline'>
                  Business
                </a>
              </h5>
              <a href='#' className='footer-link ondark'>
                Clients
              </a>
              <a href='#' className='footer-link ondark'>
                Team
              </a>
              <a href='#' className='footer-link ondark'>
                Offices
              </a>
              <a href='#' className='footer-link ondark'>
                Careers
              </a>
            </div>
          </div>
          <div className='col-2 lg-3 sm-6 xs-12'>
            <div className='footer-links-container'>
              <h5 className='footer-heading'>
                <a href='#' className='no-underline'>
                  Let&#x27;s Meet
                </a>
              </h5>
              <p className='footer-paragraph'>+62 31 7987202 (8276)</p>
              <p className='footer-paragraph'>hello@duduksampean.com</p>
              <p className='footer-paragraph'>
                Jl. Raya Duduk Sampeyan
                <br />
                Gresik, Indonesia — 6021876
              </p>
            </div>
            <div>
              <Icon
                className='social-media-link w-inline-block'
                className='fab fa-facebook-f'
                color='primary'
              />
              <Icon
                className='social-media-link w-inline-block'
                className='fab fa-instagram'
                color='primary'
              />
              <Icon
                className='social-media-link w-inline-block'
                className='fab fa-twitter'
                color='primary'
              />
              <Icon
                className='social-media-link w-inline-block'
                className='fab fa-linkedin-in'
                color='primary'
              />
            </div>
          </div>
          <div className='col-2 lg-2 md-4'></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
