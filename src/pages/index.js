import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* <!-- Slider Section
        ============================================= --> */}

    <section
      id="slider"
      className="slider-element slider-parallax swiper_wrapper full-screen clearfix"
    >
      {/* <!-- First Slider Pic
      ============================================= --> */}
      <div className="slider-parallax-inner">
        <div className="swiper-container swiper-parent">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide dark"
              style={{
                backgroundImage: `url(https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/slider/swiper/1.jpg)`,
              }}
            >
              <div className="container clearfix">
                <div className="slider-caption slider-caption-center">
                  <h2 data-animate="fadeInUp">Welcome to ToastMasters</h2>
                  <p
                    className="d-none d-sm-block"
                    data-animate="fadeInUp"
                    data-delay="200"
                  >
                    Create just what you need for your Perfect Website. Choose
                    from a wide range of Elements &amp; simply put them on your
                    own Canvas.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Second Slider Pic
            ============================================= --> */}
            <div
              className="swiper-slide dark"
              style={{
                backgroundImage: `url(https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/slider/swiper/2.jpg)`,
              }}
            >
              <div className="container clearfix">
                <div className="slider-caption slider-caption-center">
                  <h2 data-animate="fadeInUp">Great Performance</h2>
                  <p
                    className="d-none d-sm-block"
                    data-animate="fadeInUp"
                    data-delay="200"
                  >
                    You'll be surprised to see the Final Results of your
                    Creation &amp; would crave for more.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Third Slider Pic
            ============================================= --> */}
            <div
              className="swiper-slide"
              style={{
                backgroundImage: `url(https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/slider/swiper/3.jpg)`,
              }}
            >
              <div className="container clearfix">
                <div className="slider-caption ">
                  <h2 data-animate="fadeInUp">Great Speaches</h2>
                  <p
                    className="d-none d-sm-block"
                    data-animate="fadeInUp"
                    data-delay="200"
                  >
                    You'll be surprised to see the Final Results of your
                    Creation &amp; would crave for more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-arrow-left">
            <i className="icon-angle-left"></i>
          </div>
          <div className="slider-arrow-right">
            <i className="icon-angle-right"></i>
          </div>
        </div>
        <a
          href="/"
          data-scrollto="#content"
          data-offset="100"
          className="dark one-page-arrow"
        >
          <i className="icon-angle-down infinite animated fadeInDown"></i>
        </a>
      </div>
    </section>

    {/* <!-- Who we are Section
    ============================================= --> */}
    <div className="section">
      <div className="container clearfix">
        <div className="heading-block center">
          <h3>
            We are <span>ToastMasters</span>
          </h3>
          <span className="divcenter">More than just a speach</span>
        </div>

        {/* <!-- Who we are Box 1
        ============================================= --> */}
        <div className="col_one_third nobottommargin">
          <div className="feature-box media-box">
            <div className="fbox-media">
              <img
                src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/services/1.jpg"
                alt="Why choose Us?"
              />
            </div>
            <div className="fbox-desc">
              <h3>
                Why choose Us.
                <span className="subtitle">Because we are Reliable.</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi rem, facilis nobis voluptatum est voluptatem accusamus
                molestiae eaque perspiciatis mollitia.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Who we are Box 2
        ============================================= --> */}
        <div className="col_one_third nobottommargin">
          <div className="feature-box media-box">
            <div className="fbox-media">
              <img
                src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/services/2.jpg"
                alt="Why choose Us?"
              />
            </div>
            <div className="fbox-desc">
              <h3>
                Our Mission.
                <span className="subtitle">To Redefine your Brand.</span>
              </h3>
              <p>
                Quos, non, esse eligendi ab accusantium voluptatem. Maxime
                eligendi beatae, atque tempora ullam. Vitae delectus quia,
                consequuntur rerum molestias quo.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Who we are Box 3
        ============================================= --> */}
        <div className="col_one_third nobottommargin col_last">
          <div className="feature-box media-box">
            <div className="fbox-media">
              <img
                src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/services/3.jpg"
                alt="Why choose Us?"
              />
            </div>
            <div className="fbox-desc">
              <h3>
                What we Do.
                <span className="subtitle">Make our Customers Happy.</span>
              </h3>
              <p>
                Porro repellat vero sapiente amet vitae quibusdam necessitatibus
                consectetur, labore totam. Accusamus perspiciatis asperiores
                labore esse ab accusantium ea modi ut.
              </p>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>

    {/* <!-- Our Team Section
    ============================================= --> */}
    <div className="section" style={{ marginTop: "-100px" }}>
      <div className="container clearfix">
        <div className="heading-block topmargin-sm center">
          <h3>Our Team</h3>
          <span className="divcenter">
            People who have contributed enormously to our Company
          </span>
        </div>

        {/* <!-- Our Team Row 1
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <div className="team team-list clearfix">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/3.jpg"
                  alt="John Doe"
                />
              </div>

              {/* <!-- Our Team Row 1 Left Pic
              ============================================= --> */}
              <div className="team-desc">
                <div className="team-title">
                  <h4>John Doe</h4>
                  <span>CEO</span>
                </div>
                <div className="team-content">
                  <p>
                    Carbon emissions reductions giving, legitimize amplify
                    non-partisan Aga Khan. Policy dialogue assessment expert
                    free-speech cornerstone disruptor freedom. Cesar Chavez
                    empower.
                  </p>
                </div>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-facebook"
                >
                  <i className="icon-facebook"></i>
                  <i className="icon-facebook"></i>
                </a>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-twitter"
                >
                  <i className="icon-twitter"></i>
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-gplus"
                >
                  <i className="icon-gplus"></i>
                  <i className="icon-gplus"></i>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Our Team Row 1 Right Pic
          ============================================= --> */}
          <div className="col-lg-6 bottommargin">
            <div className="team team-list clearfix">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/2.jpg"
                  alt="Nix Maxwell"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Nix Maxwell</h4>
                  <span>Support</span>
                </div>
                <div className="team-content">
                  <p>
                    Eradicate invest honesty human rights accessibility theory
                    of social change. Diversity experience in the field
                    compassion, inspire breakthroughs planned giving.
                  </p>
                </div>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-forrst"
                >
                  <i className="icon-forrst"></i>
                  <i className="icon-forrst"></i>
                </a>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-skype"
                >
                  <i className="icon-skype"></i>
                  <i className="icon-skype"></i>
                </a>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-flickr"
                >
                  <i className="icon-flickr"></i>
                  <i className="icon-flickr"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Our Team Row 2
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <div className="team team-list clearfix">
              {/* <!-- Our Team Row 2 Left Pic
              ============================================= --> */}
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/4.jpg"
                  alt="John Doe"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Jon Tableman</h4>
                  <span>CEO</span>
                </div>
                <div className="team-content">
                  <p>
                    Carbon emissions reductions giving, legitimize amplify
                    non-partisan Aga Khan. Policy dialogue assessment expert
                    free-speech cornerstone disruptor freedom. Cesar Chavez
                    empower.
                  </p>
                </div>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-facebook"
                >
                  <i className="icon-facebook"></i>
                  <i className="icon-facebook"></i>
                </a>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-twitter"
                >
                  <i className="icon-twitter"></i>
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-gplus"
                >
                  <i className="icon-gplus"></i>
                  <i className="icon-gplus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 bottommargin">
            <div className="team team-list clearfix">
              {/* <!-- Our Team Row 2 Right Pic
              ============================================= --> */}
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/8.jpg"
                  alt="Nix Maxwell"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Mary Jane</h4>
                  <span>Support</span>
                </div>
                <div className="team-content">
                  <p>
                    Eradicate invest honesty human rights accessibility theory
                    of social change. Diversity experience in the field
                    compassion, inspire breakthroughs planned giving.
                  </p>
                </div>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-forrst"
                >
                  <i className="icon-forrst"></i>
                  <i className="icon-forrst"></i>
                </a>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-skype"
                >
                  <i className="icon-skype"></i>
                  <i className="icon-skype"></i>
                </a>
                <a
                  href="/"
                  className="social-icon si-rounded si-small si-flickr"
                >
                  <i className="icon-flickr"></i>
                  <i className="icon-flickr"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Contact Us Section
    ============================================= --> */}
    <div className="promo promo-light" style={{ marginTop: "-100px" }}>
      <div style={{ width: "75%", marginLeft: "10%" }}>
        <h3>
          Call us today at <span>+91.22.57412541</span> or Email us at{" "}
          <span>
            <a
              href="/cdn-cgi/l/email-protection"
              className="__cf_email__"
              datacfemail="62111712120d10162201030c1403114c010d0f"
            >
              test@test.com
            </a>
          </span>
        </h3>
        <span>
          We strive to provide Our Customers with Top Notch Support to make
          their Theme Experience Wonderful
        </span>
        <a
          style={{ marginRight: "10%" }}
          href="/"
          className="button button-xlarge button-rounded"
        >
          Start Browsing
        </a>
      </div>
    </div>

    {/* <!-- Go to Top Button
    ============================================= --> */}
    <div id="gotoTop" className="icon-angle-up"></div>
  </Layout>
)

export default IndexPage
