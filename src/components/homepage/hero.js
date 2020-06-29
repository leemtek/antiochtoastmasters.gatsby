import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div>
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
                    background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/kaiser-antioch.jpg)`
                  }}
                >
                  <div className="container clearfix">
                    <div className="row">
                      <div className="col-md-12 col-lg-3 slider-caption">
                        <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmasters-international-icon.png" alt="Toastmasters International" />
                      </div>{/* /col */}
                      <div className="col-md-12 col-lg-9 slider-caption">
                        <div>Welcome to</div>
                          <h2 data-animate="fadeInUp" style={{fontSize: "1.3em"}}>Creating Communicators</h2>
                          <p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">
                            <div>We Meet Every Tuesday Evening from 7:10pm to 8:10pm</div>
                          </p>
                          <hr />
                          <p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200" style={{fontSize: ".8em"}}>
                            <div>We are located:</div>
                            <div>4501 Deer Valley Rd, Antioch, CA 94531</div>
                            <div>Kaiser Permanente, Bldg 2, Conference Room 1B or 1C</div>
                            <div>Zoom: <a href="https://zoom.us/j/711305684">711-305-684</a></div>
                          </p>
                          <p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">
                            {/* <a href="/contact-us/" className="button button-mlarge button-rounded">Contact Us</a> */}
                            <a href="https://zoom.us/j/711305684" className="button button-mlarge button-rounded">Join Zoom Room</a>
                          </p>
                      </div>{/* /col */}
                    </div>{/* /row */}
                  </div>{/* /container */}
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

      </div>
    )
  }
}

export default Hero;