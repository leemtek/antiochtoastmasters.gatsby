import React from "react"

class Header extends React.Component {
  render() {
    return (
      <div>
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
                  {/* <li>
                    <a href="/members/">
                      <div>Members</div>
                    </a>
                  </li> */}
                  <li>
                    <a href="/contact-us/">
                      <div>Contact Us</div>
                    </a>
                  </li>
                  <li>
                    <a href="https://684665.toastmastersclubs.org/meetourmembers.html">
                      <div>
                        <i className="icon-line2-login"></i>Members
                      </div>
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
      </div>
    )
  }
}

export default Header;