import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Col, Container, Row } from "reactstrap"

const SoftwareEngineeringTeam = () => (
  <Layout>
    <SEO title="Software Engineering Team" />

    <section id="page-title">
      <div className="container clearfix">
        <h1>Software Engineering Team</h1>
        <span>List of People who matter in Our Company</span>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Software Engineering Team
          </li>
        </ol>
      </div>
    </section>

    <div className="content-wrap">
      <Container>
        <Row>
          <Col md="12">
            <div className="fancy-title title-border title-center">
              <h2>Meet The Team</h2>
            </div>
          </Col>
          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/duane-leem.jpg"
                  alt="Duane Leem"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Duane Leem</h4>
                  <span>CEO</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/gabe-tumbaga.jpg"
                  alt="Gabe Tumbaga"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Gabe Tumbaga</h4>
                  <span>Co-Founder</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/derrick-leem.jpg"
                  alt="Derrick Leem"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Derrick Leem</h4>
                  <span>Sales</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/steve-albonico.jpg"
                  alt="Steve Albonico"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Steve Albonico</h4>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/jeremy-billecci.jpg"
                  alt="Jeremy Billecci"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Jeremy Billecci</h4>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/mateen-rahimi.jpg"
                  alt="Mateen Rahimi"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Mateen Rahimi</h4>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/images/derek-stegall.jpg"
                  alt="Derek Stegall"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Derek Stegall</h4>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default SoftwareEngineeringTeam
