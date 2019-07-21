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
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/style.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/colors.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/swiper.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/dark.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/font-icons.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/animate.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/magnific-popup.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/responsive.css"
          type="text/css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />

      {/* <!-- Header
        ============================================= --> */}
      <header
        id="header"
        className=" full-header"
        data-sticky-class="not-dark"
      >
        <div id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger">
              <i className="icon-reorder"></i>
            </div>

            {/* <!-- Logo
              ============================================= --> */}
            <div id="logo">
              <a
                href="index.html"
                className="standard-logo"
                data-dark-logo="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-international-logo-landscape.png"
              >
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-international-logo-landscape.png"
                  className="mb-0"
                  alt="Toastmasters International Logo"
                />
              </a>
              <a
                href="index.html"
                className="retina-logo"
                data-dark-logo="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-international-logo-landscape.png"
              >
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-international-logo-landscape.png"
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
                  <a href="/about/">
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
                    <a
                      href="https://684665.toastmastersclubs.org/"
                    ><div>
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

        {/* <!-- Copyrights
          ============================================= --> */}
        <div id="copyrights">
          <div className="container clearfix">
            <div className="col_full center">
              The information on this website is for the sole use of Toastmasters' members, for Toastmasters business only. It is not to be used for solicitation and distribution of non-Toastmasters material or information. All rights reserved. Toastmasters International, the Toastmasters International logo and all other Toastmasters International trademarks and copyrights are the sole property of Toastmasters International and may be used only by permission.
              <br />
              Site Hosting and Technical support provided by FreeToastHost, a free service of Toastmasters International.
              <br />              
            </div>
            <div className="text-center">
                <a
                  href="https://www.facebook.com/toastmasterscreatingcommunicators"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon si-small si-borderless si-facebook"
                >
                  <i className="icon-facebook"></i>
                  <i className="icon-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/AntiochTM?lang=en"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon si-small si-borderless si-twitter"
                >
                  <i className="icon-twitter"></i>
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company-beta/18068202"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon si-small si-borderless si-linkedin"
                >
                  <i className="icon-linkedin"></i>
                  <i className="icon-linkedin"></i>
                </a>
                <a
                  href="https://www.meetup.com/Antioch-and-Pittsburg-CA-Public-Speakers-Meetup/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon si-small si-borderless si-smashmag"
                >
                  <i className="icon-meetup"></i>
                  <i className="icon-meetup"></i>
                </a>
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
        <script src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/jquery.js"></script>
        <script src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/plugins.js"></script>

        {/* <!-- Footer Scripts
        ============================================= --> */}
        <script src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/functions.js"></script>
      </Helmet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
