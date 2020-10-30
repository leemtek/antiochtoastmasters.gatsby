import React from "react";
import "./footer.css"

const Footer = () => (
  <footer id="footer" className="dark">
    <div className="container">
      {/* <!-- Footer Widgets
        ============================================= --> */}
      <div className="footer-widgets-wrap clearfix">
        <div className="col_one_third">
          <div className="widget clearfix">
            <img
              src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-border-logo.png"
              alt="Toastmasters International Footer Logo"
              className="footer-logo"
            />

            <p>
              We are <strong>Toastmasters</strong>, more than just speach
            </p>

            <div
              style={{
                background: `url('https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/world-map.png')`,
                backgroundPosition: `center center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `100%`,
              }}
            >
              <address>
                <strong>Headquarters:</strong>
                <br />
                Kaiser Permanente
                <br />
                Bldg 2
                <br />
                Conference Room 1B or 1C
                <br />
                4501 Deer Valley Rd.
                <br />
                Antioch, CA 94531
                <br />
              </address>
              <abbr title="Phone Number">
                <strong>Phone:</strong>
              </abbr>{" "}
              (408) 483-5796                    
            </div>
          </div>
        </div>{/* col_one_third */}

        <div className="col_one_third">
          <div
            className="widget clearfix"
            style={{ marginBottom: `-20px` }}
          >
            <div className="row">
              <div className="col-lg-6 clearfix bottommargin-sm">
                <a
                  href="https://www.facebook.com/toastmasterscreatingcommunicators"
                  target="_blank" rel="noopener noreferrer"
                  className="social-icon si-dark si-colored si-facebook nobottommargin"
                  style={{ marginRight: `10px` }}
                >
                  <i className="icon-facebook"></i>
                  <i className="icon-facebook"></i>
                </a>
                <a href="https://www.facebook.com/toastmasterscreatingcommunicators"
                target="_blank" rel="noopener noreferrer"
                >
                  <small style={{ display: `block`, marginTop: `3px` }}>
                    <strong>Like us</strong>
                    <br />
                    on Facebook
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div> {/* col_one_third */}

        <div className="col_one_third col_last">
          <iframe
            title="kaisermap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5291.164402686531!2d-121.7757456584463!3d37.95039604917656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff867ba2ed567%3A0xc7198e2e14850edf!2sKaiser%20Permanente%20Antioch!5e0!3m2!1sen!2sus!4v1604038493669!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen=""
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
      {/* <!-- .footer-widgets-wrap end --> */}
    </div>

    {/* <!-- Copyrights
      ============================================= --> */}
    <div id="copyrights">
      <div className="container clearfix">
        <div className="col_half">
          Copyrights &copy; 2019 All Rights Reserved by <a href="/engineering">Toastmasters Engineering Team</a>.
        </div>

        <div className="col_half col_last tright">
          <div className="fright clearfix">
            <a
              href="https://www.facebook.com/toastmasterscreatingcommunicators"
              target="_blank" rel="noopener noreferrer"
              className="social-icon si-small si-borderless si-facebook"
            >
              <i className="icon-facebook"></i>
              <i className="icon-facebook"></i>
            </a>

            <a
              href="https://www.linkedin.com/company-beta/18068202"
              target="_blank" rel="noopener noreferrer"
              className="social-icon si-small si-borderless si-linkedin"
            >
              <i className="icon-linkedin"></i>
              <i className="icon-linkedin"></i>
            </a>

            <a
              href="https://www.meetup.com/Antioch-and-Pittsburg-CA-Public-Speakers-Meetup/"
              target="_blank" rel="noopener noreferrer"
              className="social-icon si-small si-borderless si-pinterest"
            >
              <i className="icon-meetup"></i>
              <i className="icon-meetup"></i>
            </a>

            <a
              href="https://twitter.com/AntiochTM?lang=en"
              target="_blank" rel="noopener noreferrer"
              className="social-icon si-small si-borderless si-twitter"
            >
              <i className="icon-twitter"></i>
              <i className="icon-twitter"></i>
            </a>
          </div>
          <div className="clear"></div>
          <i className="icon-phone"></i> (408) 483-5796
        </div>
      </div>
    </div>
    {/* <!-- #copyrights end --> */}
  </footer>
)

export default Footer;
