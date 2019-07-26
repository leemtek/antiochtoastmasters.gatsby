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
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/3.jpg"
                  alt="John Doe"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>John Doe</h4>
                  <span>CEO</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/2.jpg"
                  alt="Josh Clark"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>John Doe</h4>
                  <span>Co-Founder</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/8.jpg"
                  alt="Mary Jane"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Jane Doe</h4>
                  <span>Sales</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/4.jpg"
                  alt="Nix Maxwell"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>John Doe</h4>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/3.jpg"
                  alt="Nix Maxwell"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>John Doe</h4>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/2.jpg"
                  alt="Nix Maxwell"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>John Doe</h4>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/8.jpg"
                  alt="Nix Maxwell"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>Jane Doe</h4>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6" className="bottommargin">
            <div className="team">
              <div className="team-image">
                <img
                  src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/images/team/4.jpg"
                  alt="Nix Maxwell"
                  className="m-0"
                />
              </div>
              <div className="team-desc">
                <div className="team-title">
                  <h4>John Doe</h4>
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
