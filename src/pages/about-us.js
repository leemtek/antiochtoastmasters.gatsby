import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Membercard from "../components/membercard"

const About = () => (
  <Layout>
    <SEO title="About Us" />

    <section id="page-title">
      <div className="container clearfix">
        <h1>About Us</h1>
        <span>Everything you need to know about our Company</span>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
      </div>
    </section>

    <section id="content">
      <div className="content-wrap">
        <div className="container clearfix">
          <div className="col_full">
            <div className="heading-block center">
              <h2>About Creating Communicators</h2>
              <span>Toastmasters Club at Kaiser Antioch</span>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-larger text-center bottommargin-sm">
                  We believe In the power of communication. Creating
                  Communicators is a club that enjoys the fine art of
                  communication. Our members grow in a supportive relaxed
                  atmosphere that allow them to thrive, advance and achieve
                  their goals.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/about-us-2019-2020.jpg"
                  className="lazy m-0"
                  alt="About Us 2019-2020"
                />
                <p className="text-center" style={{ fontWeight: `600` }}>
                  2019-2020
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/about-us-2018-2019.jpg"
                  className="lazy m-0"
                  alt="About Us 2018-2019"
                />
                <p className="text-center" style={{ fontWeight: `600` }}>
                  2018-2019
                </p>
              </div>
              <div className="offset-md-1 col-md-5" align="center">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/about-us-2017-2018.jpg"
                  className="lazy m-0"
                  alt="About Us 2017-2018"
                />
                <p className="text-center" style={{ fontWeight: `600` }}>
                  2017-2018
                </p>
              </div>
              <div className="col-md-5" align="center">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/about-us-2016-2017.jpg"
                  className="lazy m-0"
                  alt="About Us 2016-2017"
                />
                <p className="text-center" style={{ fontWeight: `600` }}>
                  2016-2017
                </p>
              </div>
            </div>
          </div>
          
          <div className="heading-block center">
            <h2>Club Officers</h2>
            <span>Our Creating Communicators Club Officers</span>
          </div>

          {/* <!-- Our Team Row 1
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <Membercard
              name="Duane Leem, IP5 PI2"
              jobtitle="President"
              imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/duane-leem-aws.jpg"
              imgalt="Duane Leem"
            >
              <div className="team-content">
                <p>
                  I'm a software engineer emphasized on the creation of
                  responsive websites and mobile applications. I have my Masters
                  in Information Technology Management and am a certified
                  Project Management Professional (PMP).
                  <br />
                  <br />I joined Toastmasters to improve my confidence in public
                  speaking, and improve my leadership abilities.
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
              <a href="/" className="social-icon si-rounded si-small si-gplus">
                <i className="icon-gplus"></i>
                <i className="icon-gplus"></i>
              </a>
            </Membercard>
          </div>

          {/* <!-- Our Team Row 1 Right Pic
          ============================================= --> */}
          <div className="col-lg-6 bottommargin">
            <Membercard
              name="Bob Caldwell, ACB, CL"
              jobtitle="Immediate Past President"
              imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmaster-international-banner.jpg"
              imgalt="Bob Caldwell"
            >
              <div className="team-content">
                <p>
                  Bob is a futurist and inventor, currently working as a master
                  mechanic rebuilding transmissions. He has over 100 inventions
                  to his name as is in the process of developing presentations
                  for Venture Capitalists and using the Toastmaster Club forum
                  as a testing ground. An author and past television program
                  host, he keeps improving his skills through the Toastmasters
                  program.
                </p>
              </div>
              <a href="/" className="social-icon si-rounded si-small si-forrst">
                <i className="icon-forrst"></i>
                <i className="icon-forrst"></i>
              </a>
              <a href="/" className="social-icon si-rounded si-small si-skype">
                <i className="icon-skype"></i>
                <i className="icon-skype"></i>
              </a>
              <a href="/" className="social-icon si-rounded si-small si-flickr">
                <i className="icon-flickr"></i>
                <i className="icon-flickr"></i>
              </a>
            </Membercard>
          </div>
        </div>

        {/* <!-- Our Team Row 2
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <Membercard
              name="Michael Pruett, PM5, EH2"
              jobtitle="VP of Education"
              imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmaster-international-banner.jpg"
              imgalt="Michael Pruett"
            >
              <div className="team-content">
                <p>
                  I was born in Oakland, California and grew up in Berkeley. I
                  am a retired CPA with a Masters in Taxation. I am a volunteer
                  at the Antioch Family History where I help people research
                  their family trees with free access to the world's largest
                  genealogy record databases. I am currently working on the
                  Toastmaster's Engaging Humor Pathway. I am interested in
                  Gelotology - the study of laughter and its healing effect on
                  the mind and body.
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
              <a href="/" className="social-icon si-rounded si-small si-gplus">
                <i className="icon-gplus"></i>
                <i className="icon-gplus"></i>
              </a>
            </Membercard>
          </div>
          <div className="col-lg-6 bottommargin">
            <Membercard
              name="Joe Amaro, DTM"
              jobtitle="VP of Membership"
              imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/joe-amaro.jpg"
              imgalt="Joe Amaro"
            >
              <div className="team-content">
                <p>
                  Immediate Past President (2017-2018), Area Director,
                  Toastmasters District 57, Division B (2015). Management
                  Consultant and Trainer for over 25 years. Educated at Yale
                  University and Stanford Graduate School of Business. Past
                  President Creating Communicators (2010, 2014,2016, 2018); Past
                  District 57 Lt. Governor for Education (1984); Past President
                  La Raza TM Club (1991); Past President Castro Valley #961
                  (1981).
                </p>
              </div>
              <a href="/" className="social-icon si-rounded si-small si-forrst">
                <i className="icon-forrst"></i>
                <i className="icon-forrst"></i>
              </a>
              <a href="/" className="social-icon si-rounded si-small si-skype">
                <i className="icon-skype"></i>
                <i className="icon-skype"></i>
              </a>
              <a href="/" className="social-icon si-rounded si-small si-flickr">
                <i className="icon-flickr"></i>
                <i className="icon-flickr"></i>
              </a>
            </Membercard>
          </div>
        </div>

        {/* <!-- Our Team Row 3
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <Membercard
              name="Stacey Saadiq, MS3"
              jobtitle="Secretary"
              imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmaster-international-banner.jpg"
              imgalt="Stacey Saadiq"
            >
              <div className="team-content">
                <p>
                  Stacey has been a Toast Master since 2017. She is a world
                  traveler and author of a children’s book. She is also a
                  licensed Center for Spiritual Living Practitioner. She has
                  chosen the Pathway, "Motivational Speaking" to help her
                  achieve her goals.
                </p>
              </div>
              <a href="/" className="social-icon si-rounded si-small si-forrst">
                <i className="icon-forrst"></i>
                <i className="icon-forrst"></i>
              </a>
              <a href="/" className="social-icon si-rounded si-small si-skype">
                <i className="icon-skype"></i>
                <i className="icon-skype"></i>
              </a>
              <a href="/" className="social-icon si-rounded si-small si-flickr">
                <i className="icon-flickr"></i>
                <i className="icon-flickr"></i>
              </a>
            </Membercard>
          </div>
          <div className="col-lg-6 bottommargin">
            <Membercard
              name="Adalberto Cuellar Franco"
              jobtitle="Sergeant at Arms"
              imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmaster-international-banner.jpg"
              imgalt="Adalberto Cuellar Franco"
            >
              <div className="team-content">
                <p>
                  {/* bio */}
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
              <a href="/" className="social-icon si-rounded si-small si-gplus">
                <i className="icon-gplus"></i>
                <i className="icon-gplus"></i>
              </a>
            </Membercard>
          </div>
        </div>{/* /row */}

        {/* <!-- Our Team Row 4
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <Membercard
              name="David Selvin"
              jobtitle="VP of Public Relations"
              imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/toastmaster-international-banner.jpg"
              imgalt="David Selvin"
            >
              <div className="team-content">
                <p>
                  {/* bio */}
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
              <a href="/" className="social-icon si-rounded si-small si-gplus">
                <i className="icon-gplus"></i>
                <i className="icon-gplus"></i>
              </a>
            </Membercard>
          </div>
          
        </div>{/* /row */}

        </div>
        <div className="section topmargin-sm footer-stick">
          <h4 className="uppercase center">
            What <span>Clients</span> Say?
          </h4>
          <div
            className="fslider testimonial testimonial-full"
            data-animation="fade"
            data-arrows="false"
          >
            <div className="flexslider">
              <div className="slider-wrap">
                <div className="slide">
                  <div className="testi-image">
                    <a href="/">
                      <img
                        src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/testimonials/3.jpg"
                        alt="Customer Testimonails"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Similique fugit repellendus expedita excepturi iure
                      perferendis provident quia eaque. Repellendus, vero
                      numquam?
                    </p>
                    <div className="testi-meta">
                      Steve Jobs
                      <span>Apple Inc.</span>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="testi-image">
                    <a href="/">
                      <img
                        src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/testimonials/2.jpg"
                        alt="Customer Testimonails"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Natus voluptatum enim quod necessitatibus quis expedita
                      harum provident eos obcaecati id culpa corporis molestias.
                    </p>
                    <div className="testi-meta">
                      Collis Ta'eed
                      <span>Envato Inc.</span>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="testi-image">
                    <a href="/">
                      <img
                        src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/testimonials/1.jpg"
                        alt="Customer Testimonails"
                      />
                    </a>
                  </div>
                  <div className="testi-content">
                    <p>
                      Incidunt deleniti blanditiis quas aperiam recusandae
                      consequatur ullam quibusdam cum libero illo rerum!
                    </p>
                    <div className="testi-meta">
                      John Doe
                      <span>XYZ Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
