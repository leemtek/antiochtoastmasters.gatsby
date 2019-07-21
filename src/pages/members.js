import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"
import { Col, Container, Row } from "reactstrap"

const Members = () => (
  <Layout>
    <SEO title="Members" />
    <section id="page-title">
      <div className="container clearfix">
        <h1>Members</h1>
        <span>List of People who matter in Our Company</span>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Members
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
                  src="http://themes.semicolonweb.com/html/canvas/images/team/3.jpg"
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
                  src="http://themes.semicolonweb.com/html/canvas/images/team/2.jpg"
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
                  src="http://themes.semicolonweb.com/html/canvas/images/team/8.jpg"
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
                  src="http://themes.semicolonweb.com/html/canvas/images/team/4.jpg"
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
                  src="http://themes.semicolonweb.com/html/canvas/images/team/3.jpg"
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
                  src="http://themes.semicolonweb.com/html/canvas/images/team/2.jpg"
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
                  src="http://themes.semicolonweb.com/html/canvas/images/team/8.jpg"
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
                  src="http://themes.semicolonweb.com/html/canvas/images/team/4.jpg"
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

export default Members
