import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Container } from 'reactstrap';
import '../components/layout.css';

const Wrapper = styled.div`
    text-align:center;
    padding-bottom:30px;
`
const SecTitle = styled.div`
    text-align:left;
`
const TeamMember = styled.div`
    display: inline-block;
    vertical-align:top;
    text-align:center;
    width:100%;
    margin-top:20px;
`
const Avatar = styled.img`
    display:block;
    margin:auto;
    width:100%;
    margin-bottom:8px;
`
const Team = styled.div`
    width:100%;
`
const H4 = styled.h4`
    margin:0px;
    margin-top:15px;
`


const Members = () => (
    <Layout>
        <SEO title="Members" />
        <Container>
            <Wrapper>
                <SecTitle>
                    <div className="row">
                        <div className="col-5" style={{ marginTop: '10px', padding: '0px' }}>
                            <hr style={{ backgroundColor: '#e5e5e5' }} />
                        </div>
                        <div className="col-2" style={{ textAlign: 'center', padding: '0px' }}>
                            <H4>Meet The Team</H4>
                        </div>
                        <div className="col-5" style={{ marginTop: '10px', padding: '0px' }}>
                            <hr style={{ backgroundColor: '#e5e5e5' }} />
                        </div>
                    </div>
                </SecTitle>
                <Team>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
                            <TeamMember>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
                                <H4 style={{ fontFamily: 'Raleway, sans-serif' }}>TEAM MEMBERS NAME</H4>
                                <span style={{ fontFamily: 'Crete Round, serif', color:'#1abc9c',fontSize:'19px' }}>Title</span>
                            </TeamMember>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
                            <TeamMember>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
                                <H4 style={{ fontFamily: 'Raleway, sans-serif' }}>TEAM MEMBERS NAME</H4>
                                <span style={{ fontFamily: 'Crete Round, serif', color:'#1abc9c', fontSize:'19px' }}>Title</span>
                            </TeamMember>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
                            <TeamMember>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
                                <H4 style={{ fontFamily: 'Raleway, sans-serif' }}>TEAM MEMBERS NAME</H4>
                                <span style={{ fontFamily: 'Crete Round, serif', color:'#1abc9c', fontSize:'19px' }}>Title</span>
                            </TeamMember>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
                            <TeamMember>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
                                <H4 style={{ fontFamily: 'Raleway, sans-serif' }}>TEAM MEMBERS NAME</H4>
                                <span style={{ fontFamily: 'Crete Round, serif', color:'#1abc9c', fontSize:'19px' }}>Title</span>
                            </TeamMember>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1 ">
                            <TeamMember>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
                                <H4 style={{ fontFamily: 'Raleway, sans-serif' }}>TEAM MEMBERS NAME</H4>
                                <span style={{ fontFamily: 'Crete Round, serif', color:'#1abc9c', fontSize:'19px' }}>Title</span>
                            </TeamMember>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
                            <TeamMember>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
                                <H4 style={{ fontFamily: 'Raleway, sans-serif' }}>TEAM MEMBERS NAME</H4>
                                <span style={{ fontFamily: 'Crete Round, serif', color:'#1abc9c', fontSize:'19px' }}>Title</span>
                            </TeamMember>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
                            <TeamMember>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
                                <H4 style={{ fontFamily: 'Raleway, sans-serif' }}>TEAM MEMBERS NAME</H4>
                                <span style={{ fontFamily: 'Crete Round, serif', color:'#1abc9c', fontSize:'19px' }}>Title</span>
                            </TeamMember>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
                            <TeamMember>
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
                                <H4 style={{ fontFamily: 'Raleway, sans-serif' }}>TEAM MEMBERS NAME</H4>
                                <span style={{ fontFamily: 'Crete Round, serif', color:'#1abc9c', fontSize:'19px' }}>Title</span>
                            </TeamMember>
                        </div>
                    </div>

                </Team>
            </Wrapper>
        </Container>
    </Layout>
)

export default Members
