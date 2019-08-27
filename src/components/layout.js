/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      {/* <!-- Header
        ============================================= --> */}
      <header id="header" className=" full-header" data-sticky-class="not-dark">
        <div id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger">
              <i className="icon-reorder"></i>
            </div>

            {/* <!-- Logo
              ============================================= --> */}
            <div id="logo">
              <a
                href="/"
                className="standard-logo"
                data-dark-logo="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-logo.png"
              >
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-logo.png"
                  className="mb-0"
                  alt="Toastmasters International Logo"
                />
              </a>
              <a
                href="/"
                className="retina-logo"
                data-dark-logo="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-logo.png"
              >
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-logo.png"
                  className="mb-0"
                  alt="Toastmasters International Logo"
                />
              </a>
            </div>
            {/* <!-- #logo end --> */}

            {/* <!-- Primary Navigation
              ============================================= --> */}
            <nav id="primary-menu" className="dark">
              <ul>
                <li>
                  <a href="/">
                    <div>Home</div>
                  </a>
                </li>
                <li>
                  <a href="/about-us/">
                    <div>About</div>
                  </a>
                </li>
                <li>
                  <a href="/members/">
                    <div>Members</div>
                  </a>
                </li>
                <li>
                  <a href="/contact-us/">
                    <div>Contact Us</div>
                  </a>
                </li>
                <li>
                  <a href="https://684665.toastmastersclubs.org/">
                    <div>
                      <i className="icon-line2-login"></i>Login
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- #primary-menu end --> */}
          </div>
        </div>
      </header>
      {/* <!-- #header end --> */}

      <main>{children}</main>

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
              </div>

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

      {/* <!-- Go To Top
        ============================================= --> */}
      <div id="gotoTop" className="icon-angle-up"></div>

      <Helmet>
        {/* <!-- External JavaScripts
        ============================================= --> */}
        <script>
          {` 
            //CDN URL
            const CDNUrl = "https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/";

            //Lets create new script elements
            //const script_jquery = document.createElement("script");
            const script_plugins = document.createElement("script");
            const script_functions = document.createElement("script");

            //Lets assign the file path to the script elements
            //script_jquery.src = CDNUrl + "jquery.js";
            script_plugins.src = CDNUrl + "plugins.js";
            script_functions.src = CDNUrl + "functions.js";

            //lets defer plugins and functions...
            script_plugins.defer = true;
            script_functions.defer = true;

            //Lets add our new script elements to the bottom of the head tag, in order
            //document.head.appendChild(script_jquery);
            document.head.appendChild(script_plugins);
            document.head.appendChild(script_functions);
          `}
        </script>
      </Helmet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
