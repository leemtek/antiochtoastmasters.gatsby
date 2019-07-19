import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Container } from 'reactstrap';
import '../components/layout.css';

const Head = styled.div`
    width:100vw;
    background-color:#f5f5f5;
    font-family:Lato, sans-serif;
    min-height:100px;
    padding-top:20px;
`

const Wrapper = styled.div`
    text-align:left;
    min-height:400px;
    padding-top:40px;
    padding-botttom:40px;
`
const H1 = styled.h1`
    margin-bottom:0px;
    font-size: 21px;
`
const H3 = styled.h3`
    margin-bottom:40px;
    font-size: 19px;
    display:inline-block;
`

const Span = styled.span`
    font-family: 'Lato', sans-serif;

`
const Strong = styled.strong`
    font-size:13px;
    font-style:normal;
`

const Para = styled.p`
    margin-bottom:0;
    font-family: Lato, san-serif;
    font-size:small;
    font-weight:300;
`

const Contact = () => (
    <Layout>
        <SEO title="Contact Us" />
        <Head>
            <div class="container">
                <H1>
                    CONTACT
                </H1>

                <Span>Get in Touch with Us</Span>
            </div>
        </Head>
        <Container>
            <Wrapper>
                <H3>
                    Send us an Email
            </H3>
                <br />
                <form className="col-xl-9" style={{ display: 'inline-block' }}>
                    <div class="row">
                        <div class="form-group col-xl-4" >
                            <label for="formGroupExampleInput">Your Name:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" />
                        </div>
                        <div class="form-group col-xl-4">
                            <label for="formGroupExampleInput2">Email:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" />
                        </div>
                        <div class="form-group col-xl-4">
                            <label for="formGroupExampleInput2">Phone Number:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" />
                        </div>
                    </div>

                    <div class="row">

                        <div class="form-group col-12">
                            <label for="exampleFormControlTextarea1">Your Message:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Send Message</button>

                </form>
                <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12" style={{ display: 'inline-block', verticalAlign: 'top', paddingLeft: '45px' }}>


                    <div className="col-xl-12 col-lg-3 col-md-4 col-sm-4 col-6" style={{display:'inline-block', verticalAlign:'top',  marginBottom: '30px', padding:'0'}}>
                        <Strong>Headquarters:</Strong>
                        <Para>123 Address Blvd, Suite 600</Para>
                        <Para>Antioch, CA 94509</Para>
                    </div>
     
                    <div className="col-xl-12 col-lg-3 col-md-4 col-sm-4 col-5" style={{ display:'inline-block',verticalAlign:'top', marginBottom: '30px', padding:'0' }}>
                        <Para><Strong>Phone:</Strong>  (123) 456-789</Para>
                        <Para><Strong>Fax:</Strong>  (123) 456-789</Para>
                        <Para><Strong>Email:</Strong>  email@email.com</Para>

                    </div>
                    <div className="col-xl-12 col-lg-3 col-md-4 col-sm-4 col-12" style={{ display:'inline-block',verticalAlign:'top', marginBottom: '30px', padding:'0' }}>

                        <a href="#" className="social-icon si-rounded si-small si-facebook">
                            <i className="icon-facebook"></i>
                            <i className="icon-facebook"></i>
                        </a>
                        <a href="#" className="social-icon si-rounded si-small si-twitter">
                            <i className="icon-twitter"></i>
                            <i className="icon-twitter"></i>
                        </a>
                        <a href="#" className="social-icon si-rounded si-small si-gplus">
                            <i className="icon-gplus"></i>
                            <i className="icon-gplus"></i>
                        </a>

                    </div>
                </div>
            </Wrapper>
        </Container>
    </Layout>
)

export default Contact;