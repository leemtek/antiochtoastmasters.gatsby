import React from "react";

const Hero = () => {
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

  </div>
}

export default Hero;