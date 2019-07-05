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

import { Link, useStaticQuery, graphql } from "gatsby"
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

      {/* <!-- Document Wrapper
      ============================================= --> */}
      <div id="" className="clearfix">
        <Header siteTitle={data.site.siteMetadata.title} />

        <main>{children}</main>

        <footer id="footer" className="dark">
          <div className="container">
            {/* <!-- Footer Widgets
            ============================================= --> */}
            <div className="footer-widgets-wrap clearfix">
              <div className="col_two_third">
                <div className="col_one_third">
                  <div className="widget clearfix">
                    <img
                      src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/footer-widget-logo.png"
                      alt=""
                      className="footer-logo"
                    />

                    <p>
                      We believe in <strong>Simple</strong>,{" "}
                      <strong>Creative</strong> &amp; <strong>Flexible</strong>{" "}
                      Design Standards.
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
                        795 Folsom Ave, Suite 600
                        <br />
                        San Francisco, CA 94107
                        <br />
                      </address>
                      <abbr title="Phone Number">
                        <strong>Phone:</strong>
                      </abbr>{" "}
                      (91) 8547 632521
                      <br />
                      <abbr title="Fax">
                        <strong>Fax:</strong>
                      </abbr>{" "}
                      (91) 11 4752 1433
                      <br />
                      <abbr title="Email Address">
                        <strong>Email:</strong>
                      </abbr>{" "}
                      info@canvas.com
                    </div>
                  </div>
                </div>

                <div className="col_one_third">
                  <div className="widget widget_links clearfix">
                    <h4>Blogroll</h4>

                    <ul>
                      <li>
                        <Link to="/">Documentation</Link>
                      </li>
                      <li>
                        <Link to="/">Feedback</Link>
                      </li>
                      <li>
                        <Link to="/">Plugins</Link>
                      </li>
                      <li>
                        <Link to="/">Support Forums</Link>
                      </li>
                      <li>
                        <Link to="/">Themes</Link>
                      </li>
                      <li>
                        <Link to="/">WordPress Blog</Link>
                      </li>
                      <li>
                        <Link to="/">WordPress Planet</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col_one_third col_last">
                  <div className="widget clearfix">
                    <h4>Recent Posts</h4>

                    <div id="post-list-footer">
                      <div className="spost clearfix">
                        <div className="entry-c">
                          <div className="entry-title">
                            <h4>
                              <Link to="/">
                                Lorem ipsum dolor sit amet, consectetur
                              </Link>
                            </h4>
                          </div>
                          <ul className="entry-meta">
                            <li>10th July 2014</li>
                          </ul>
                        </div>
                      </div>

                      <div className="spost clearfix">
                        <div className="entry-c">
                          <div className="entry-title">
                            <h4>
                              <Link to="/">
                                Elit Assumenda vel amet dolorum quasi
                              </Link>
                            </h4>
                          </div>
                          <ul className="entry-meta">
                            <li>10th July 2014</li>
                          </ul>
                        </div>
                      </div>

                      <div className="spost clearfix">
                        <div className="entry-c">
                          <div className="entry-title">
                            <h4>
                              <Link to="/">
                                Debitis nihil placeat, illum est nisi
                              </Link>
                            </h4>
                          </div>
                          <ul className="entry-meta">
                            <li>10th July 2014</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col_one_third col_last">
                <div
                  className="widget clearfix"
                  style={{ marginBottom: `-20px` }}
                >
                  <div className="row">
                    <div className="col-lg-6 bottommargin-sm">
                      <div className="counter counter-small">
                        <span
                          data-from="50"
                          data-to="15065421"
                          data-refresh-interval="80"
                          data-speed="3000"
                          data-comma="true"
                        ></span>
                      </div>
                      <h5 className="nobottommargin">Total Downloads</h5>
                    </div>

                    <div className="col-lg-6 bottommargin-sm">
                      <div className="counter counter-small">
                        <span
                          data-from="100"
                          data-to="18465"
                          data-refresh-interval="50"
                          data-speed="2000"
                          data-comma="true"
                        ></span>
                      </div>
                      <h5 className="nobottommargin">Clients</h5>
                    </div>
                  </div>
                </div>

                <div className="widget subscribe-widget clearfix">
                  <h5>
                    <strong>Subscribe</strong> to Our Newsletter to get
                    Important News, Amazing Offers &amp; Inside Scoops:
                  </h5>
                  <div className="widget-subscribe-form-result"></div>
                  <form
                    id="widget-subscribe-form"
                    action="include/subscribe.php"
                    method="post"
                    className="nobottommargin"
                  >
                    <div className="input-group divcenter">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="icon-email2"></i>
                        </div>
                      </div>
                      <input
                        type="email"
                        id="widget-subscribe-form-email"
                        name="widget-subscribe-form-email"
                        className="form-control required email"
                        placeholder="Enter your Email"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-success" type="submit">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div
                  className="widget clearfix"
                  style={{ marginBottom: `-20px` }}
                >
                  <div className="row">
                    <div className="col-lg-6 clearfix bottommargin-sm">
                      <Link
                        to="/"
                        className="social-icon si-dark si-colored si-facebook nobottommargin"
                        style={{ marginRight: `10px` }}
                      >
                        <i className="icon-facebook"></i>
                        <i className="icon-facebook"></i>
                      </Link>
                      <Link to="/">
                        <small style={{ display: `block`, marginTop: `3px` }}>
                          <strong>Like us</strong>
                          <br />
                          on Facebook
                        </small>
                      </Link>
                    </div>
                    <div className="col-lg-6 clearfix">
                      <Link
                        to="/"
                        className="social-icon si-dark si-colored si-rss nobottommargin"
                        style={{ marginRight: `10px` }}
                      >
                        <i className="icon-rss"></i>
                        <i className="icon-rss"></i>
                      </Link>
                      <Link to="/">
                        <small style={{ display: `block`, marginTop: `3px` }}>
                          <strong>Subscribe</strong>
                          <br />
                          to RSS Feeds
                        </small>
                      </Link>
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
                Copyrights &copy; 2014 All Rights Reserved by Canvas Inc.
                <br />
                <div className="copyright-links">
                  <Link to="/">Terms of Use</Link> /{" "}
                  <Link to="/">Privacy Policy</Link>
                </div>
              </div>

              <div className="col_half col_last tright">
                <div className="fright clearfix">
                  <Link
                    to="/"
                    className="social-icon si-small si-borderless si-facebook"
                  >
                    <i className="icon-facebook"></i>
                    <i className="icon-facebook"></i>
                  </Link>

                  <Link
                    to="/"
                    className="social-icon si-small si-borderless si-twitter"
                  >
                    <i className="icon-twitter"></i>
                    <i className="icon-twitter"></i>
                  </Link>

                  <Link
                    to="/"
                    className="social-icon si-small si-borderless si-gplus"
                  >
                    <i className="icon-gplus"></i>
                    <i className="icon-gplus"></i>
                  </Link>

                  <Link
                    to="/"
                    className="social-icon si-small si-borderless si-pinterest"
                  >
                    <i className="icon-pinterest"></i>
                    <i className="icon-pinterest"></i>
                  </Link>

                  <Link
                    to="/"
                    className="social-icon si-small si-borderless si-vimeo"
                  >
                    <i className="icon-vimeo"></i>
                    <i className="icon-vimeo"></i>
                  </Link>

                  <Link
                    to="/"
                    className="social-icon si-small si-borderless si-github"
                  >
                    <i className="icon-github"></i>
                    <i className="icon-github"></i>
                  </Link>

                  <Link
                    to="/"
                    className="social-icon si-small si-borderless si-yahoo"
                  >
                    <i className="icon-yahoo"></i>
                    <i className="icon-yahoo"></i>
                  </Link>

                  <Link
                    to="/"
                    className="social-icon si-small si-borderless si-linkedin"
                  >
                    <i className="icon-linkedin"></i>
                    <i className="icon-linkedin"></i>
                  </Link>
                </div>
                <div className="clear"></div>
                <i className="icon-envelope2"></i> info@canvas.com{" "}
                <span className="middot">&middot;</span>{" "}
                <i className="icon-headphones"></i> +91-11-6541-6369{" "}
                <span className="middot">&middot;</span>{" "}
                <i className="icon-skype2"></i> CanvasOnSkype
              </div>
            </div>
          </div>
          {/* <!-- #copyrights end --> */}
        </footer>
      </div>

      {/* <!-- Go To Top
      ============================================= --> */}
      <div id="gotoTop" className="icon-angle-up"></div>

      {/* <!-- External JavaScripts
      ============================================= --> */}
      <script src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/jquery.js"></script>
      <script src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/plugins.js"></script>

      {/* <!-- Footer Scripts
      ============================================= --> */}
      <script src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/functions.js"></script>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
