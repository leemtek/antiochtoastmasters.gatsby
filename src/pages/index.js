import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  


<section id="slider" className="slider-element slider-parallax swiper_wrapper full-screen clearfix" data-loop="true">

<div className="slider-parallax-inner">
<div className="swiper-container swiper-parent">
<div className="swiper-wrapper">
<div className="swiper-slide dark" style={{backgroundImage: `url(https://homepages.cae.wisc.edu/~ece533/images/monarch.png)`}}>
<div className="container clearfix">
<div className="slider-caption slider-caption-center">
<h2 data-animate="fadeInUp">Welcome to Canvas</h2>
<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on your own Canvas.</p>
</div>
</div>
</div>

<div className="swiper-slide dark" style={{backgroundImage: `url(https://homepages.cae.wisc.edu/~ece533/images/monarch.png)`}}>
<div className="container clearfix">
<div className="slider-caption slider-caption-center">
<h2 data-animate="fadeInUp">Beautifully Flexible</h2>
<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Powerful Layout with Responsive functionality that can be adapted to any screen size.</p>
</div>
</div>
</div>

<div className="swiper-slide dark" style={{backgroundImage: `url(https://homepages.cae.wisc.edu/~ece533/images/monarch.png)`}}>
<div className="container clearfix">
<div className="slider-caption slider-caption-center">
<h2 data-animate="fadeInUp">Great Performance</h2>
<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">You'll be surprised to see the Final Results of your Creation &amp; would crave for more.</p>
</div>
</div>
</div>
</div>
<div className="slider-arrow-left"><i className="icon-angle-left"></i></div>
<div className="slider-arrow-right"><i className="icon-angle-right"></i></div>
</div>
<a href="#" data-scrollto="#content" data-offset="100" className="dark one-page-arrow"><i className="icon-angle-down infinite animated fadeInDown"></i></a>
</div>
</section>

<div id="gotoTop" className="icon-angle-up"></div>



  </Layout>
)

export default IndexPage
