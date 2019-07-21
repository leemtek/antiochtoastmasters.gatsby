import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Container } from "reactstrap"
import "../components/layout.css"

const H3 = styled.h3`
  margin-bottom: 40px;
  font-size: 19px;
  display: inline-block;
`

const Strong = styled.strong`
  font-size: 13px;
  font-style: normal;
`

const Para = styled.p`
  margin-bottom: 0;
  font-family: Lato, san-serif;
  font-size: small;
  font-weight: 300;
`

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />

    <section id="page-title">
      <div className="container clearfix">
        <h1>Contact Us</h1>
        <span>Get in Touch with Us</span>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </div>
    </section>

    <div className="content-wrap">
    <Container>
        <H3>Send us an Email</H3>
        <br />
        <form className="col-xl-9" style={{ display: "inline-block" }}>
          <div className="row">
            <div className="form-group col-xl-4">
              <label htmlFor="formGroupExampleInput">Your Name:</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div className="form-group col-xl-4">
              <label htmlFor="formGroupExampleInput2">Email:</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
              />
            </div>
            <div className="form-group col-xl-4">
              <label htmlFor="formGroupExampleInput2">Phone Number:</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="exampleFormControlTextarea1">Your Message:</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button type="button" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div
          className="col-xl-3 col-lg-12 col-md-12 col-sm-12"
          style={{
            display: "inline-block",
            verticalAlign: "top",
            paddingLeft: "45px",
          }}
        >
          <div
            className="col-xl-12 col-lg-3 col-md-4 col-sm-4 col-6"
            style={{
              display: "inline-block",
              verticalAlign: "top",
              marginBottom: "30px",
              padding: "0",
            }}
          >
            <Strong>Headquarters:</Strong>
            <Para>123 Address Blvd, Suite 600</Para>
            <Para>Antioch, CA 94509</Para>
          </div>

          <div
            className="col-xl-12 col-lg-3 col-md-4 col-sm-4 col-5"
            style={{
              display: "inline-block",
              verticalAlign: "top",
              marginBottom: "30px",
              padding: "0",
            }}
          >
            <Para>
              <Strong>Phone:</Strong> (123) 456-789
            </Para>
            <Para>
              <Strong>Fax:</Strong> (123) 456-789
            </Para>
            <Para>
              <Strong>Email:</Strong> email@email.com
            </Para>
          </div>
          <div
            className="col-xl-12 col-lg-3 col-md-4 col-sm-4 col-12"
            style={{
              display: "inline-block",
              verticalAlign: "top",
              marginBottom: "30px",
              padding: "0",
            }}
          >
            <a href="/" className="social-icon si-rounded si-small si-facebook">
              <i className="icon-facebook"></i>
              <i className="icon-facebook"></i>
            </a>
            <a href="/" className="social-icon si-rounded si-small si-twitter">
              <i className="icon-twitter"></i>
              <i className="icon-twitter"></i>
            </a>
            <a href="/" className="social-icon si-rounded si-small si-gplus">
              <i className="icon-gplus"></i>
              <i className="icon-gplus"></i>
            </a>
          </div>
        </div>
    </Container>
    </div>
  </Layout>
)

export default Contact
