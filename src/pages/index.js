import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/homepage/hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* <!-- Slider Section
        ============================================= --> */}
    <Hero />
    
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
                We Believe.
                <span className="subtitle">In the power of communication.</span>
              </h3>
              <p>
                Creating Communicators is a club that enjoys the fine art of communication. Our members 
                grow in a supportive relaxed atmosphere that allow them to thrive, advance and achieve 
                their goals.
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
                Transform Yourself.
                <span className="subtitle">Participate in Toastmasters’ proven program.</span>
              </h3>
              <p>
                Where you’ll learn how to speak comfortably in front of a group and lead with purpose. People 
                who join Toastmasters find potential they never thought they had and achieve more of their goals and dreams.
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
                How Will You Benefit?
                <span className="subtitle">Make you a more confident speaker and leader.</span>
              </h3>
              <p>
                Attend meetings where you will regularly practice skills that make you a more confident 
                speaker and leader. These real-world, highly in-demand soft skills will help you advance 
                your career, acclimate to a new city or even get a new job!
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
          Call Carol at <a href="tel:9257522192">(925) 752-2192</a>
        </h3>
        <span>
          We would love for you to come and visit our club anytime!
        </span>
        <a
          style={{ marginRight: "10%" }}
          href="/contact-us"
          className="button button-xlarge button-rounded"
        >
          Contact Us
        </a>
      </div>
    </div>

    {/* <!-- Go to Top Button
    ============================================= --> */}
    <div id="gotoTop" className="icon-angle-up"></div>
  </Layout>
)

export default IndexPage
