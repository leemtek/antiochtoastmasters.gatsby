import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/homepage/hero";
import Membercard from "../components/membercard";

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
          <h3>Club Officers</h3>
          <span className="divcenter">
            Our Creating Communicators Club Officers
          </span>
        </div>

        {/* <!-- Our Team Row 1
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <Membercard name="Bob Caldwell, ACB, CL" jobtitle="President" imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/3.jpg" imgalt="John Doe">
              <div className="team-content">
                <p>
                  Bob is a futurist and inventor, currently working as a master mechanic rebuilding transmissions. He has over 100 
                  inventions to his name as is in the process of developing presentations for Venture Capitalists and using the 
                  Toastmaster Club forum as a testing ground. An author and past television program host, he keeps improving his 
                  skills through the Toastmasters program.
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
            </Membercard>
          </div>

          {/* <!-- Our Team Row 1 Right Pic
          ============================================= --> */}
          <div className="col-lg-6 bottommargin">
            <Membercard name="Joe Amaro" jobtitle="Immediate Past President" imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/joe-amaro.jpg" imgalt="Joe Amaro">
              <div className="team-content">
                <p>
                  Immediate Past President (2017-2018), Area Director, Toastmasters District 57, Division B (2015).  Management Consultant and Trainer for 
                  over 25 years.  Educated at Yale University and Stanford Graduate School of Business.  Past President Creating Communicators (2010, 
                  2014,2016, 2018); Past District 57 Lt. Governor for Education (1984); Past President La Raza TM Club (1991); Past President Castro Valley 
                  #961 (1981).
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
            </Membercard>
          </div>
        </div>

        {/* <!-- Our Team Row 2
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <Membercard name="Duane Leem" jobtitle="VP of Education" imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/duane-leem-aws.jpg" imgalt="Duane Leem">
              <div className="team-content">
                <p>
                  I'm a software engineer emphasized on the creation of responsive websites and mobile applications.  
                  I have my Masters in Information Technology Management and am a certified Project Management Professional (PMP).<br /><br />
                  I joined Toastmasters to improve my confidence in public speaking, and improve my leadership abilities.
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
            </Membercard>
          </div>
          <div className="col-lg-6 bottommargin">
            <Membercard name="Carol Kuhn, PM3" jobtitle="VP of Membership" imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/8.jpg" imgalt="Carol Kuhn">
              <div className="team-content">
                <p>
                  I've been a member of Toastmasters since February 2018.  I joined to gain more confidence speaking 
                  in front of an audience.  I tend to freeze when I have something memorized so I'm overcoming that. 
                  I am retired from accounting,  science and tutoring and looking for more creative endeavors.
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
            </Membercard>
          </div>
        </div>

        {/* <!-- Our Team Row 3
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <Membercard name="John Case, ACB" jobtitle="VP of Public Relations" imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/4.jpg" imgalt="John Case">
              <div className="team-content">
                <p>
                  I have been a member of TI since 1984, off and on. I enjoy the challenge of extemporaneous speaking and sharing my experience with others.<br /><br />
                  I am a Real Estate Broker and part of my success is communicating to my client thanks to TI!
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
            </Membercard>
          </div>
          <div className="col-lg-6 bottommargin">
            <Membercard name="Michael Pruett, PM" jobtitle="Treasurer" imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/4.jpg" imgalt="Michael Pruett">
              <div className="team-content">
                <p>
                  I was born in Oakland, California and grew up in Berkeley.   I am a retired CPA with a Masters in Taxation.  
                  I am a volunteer at the Antioch Family History where I help people research their family trees with free access 
                  to the world's largest genealogy record databases.   I am currently working on the Toastmaster's Engaging Humor 
                  Pathway.  I am interested in Gelotology - the study of laughter and its healing effect on the mind and body.
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
            </Membercard>
          </div>
        </div>

        {/* <!-- Our Team Row 4
        ============================================= --> */}
        <div className="row">
          <div className="col-lg-6 bottommargin">
            <Membercard name="Sunia Halatoa, IP" jobtitle="Sergeant at Arms" imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/8.jpg" imgalt="Sunia Halatoa">
              <div className="team-content">
                <p>
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
            </Membercard>
          </div>
          <div className="col-lg-6 bottommargin">
            <Membercard name="Diana Case, CTM" jobtitle="Secretary" imgurl="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/8.jpg" imgalt="Diana Case">
              <div className="team-content">
                <p>
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
            </Membercard>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Contact Us Section
    ============================================= --> */}
    <div className="promo promo-light" style={{ marginTop: "-100px" }}>
      <div style={{ width: "75%", marginLeft: "10%" }}>
        <h3>
          Contact Us Today!
        </h3>
        <span>
          We would love for you to come and visit our club anytime!
        </span>
        <a
          style={{ marginRight: "10%" }}
          href="https://ccclub.toastmastersclubs.org/"
          target="_blank"
          rel="noreferrer"
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
