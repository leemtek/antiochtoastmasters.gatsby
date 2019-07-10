import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Col, Row } from "reactstrap"

const TeamMember = styled.div`
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 100%;
  margin-top: 20px;
`
const Avatar = styled.img`
  display: block;
  margin: auto;
  width: 100%;
  margin-bottom: 8px;
`
const H4 = styled.h4`
  margin: 15px 0 0;
`

const Members = () => (
  <Layout>
    <SEO title="Members" />
		<Row>
			<Col md="4">
				<hr />
			</Col>
			<Col md="4">
				<h1>Meet The Team</h1>
			</Col>
			<Col md="4">
				<hr />
			</Col>
		</Row>
		<div className="row">
			<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
				<TeamMember>
					<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
					<H4 style={{ fontFamily: "Raleway, sans-serif" }}>
						TEAM MEMBERS NAME
					</H4>
					<span
						style={{
							fontFamily: "Crete Round, serif",
							color: "#1abc9c",
							fontSize: "19px",
						}}
					>
						Title
					</span>
				</TeamMember>
			</div>
			<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
				<TeamMember>
					<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
					<H4 style={{ fontFamily: "Raleway, sans-serif" }}>
						TEAM MEMBERS NAME
					</H4>
					<span
						style={{
							fontFamily: "Crete Round, serif",
							color: "#1abc9c",
							fontSize: "19px",
						}}
					>
						Title
					</span>
				</TeamMember>
			</div>
			<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
				<TeamMember>
					<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
					<H4 style={{ fontFamily: "Raleway, sans-serif" }}>
						TEAM MEMBERS NAME
					</H4>
					<span
						style={{
							fontFamily: "Crete Round, serif",
							color: "#1abc9c",
							fontSize: "19px",
						}}
					>
						Title
					</span>
				</TeamMember>
			</div>
			<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
				<TeamMember>
					<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
					<H4 style={{ fontFamily: "Raleway, sans-serif" }}>
						TEAM MEMBERS NAME
					</H4>
					<span
						style={{
							fontFamily: "Crete Round, serif",
							color: "#1abc9c",
							fontSize: "19px",
						}}
					>
						Title
					</span>
				</TeamMember>
			</div>
			<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1 ">
				<TeamMember>
					<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
					<H4 style={{ fontFamily: "Raleway, sans-serif" }}>
						TEAM MEMBERS NAME
					</H4>
					<span
						style={{
							fontFamily: "Crete Round, serif",
							color: "#1abc9c",
							fontSize: "19px",
						}}
					>
						Title
					</span>
				</TeamMember>
			</div>
			<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
				<TeamMember>
					<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
					<H4 style={{ fontFamily: "Raleway, sans-serif" }}>
						TEAM MEMBERS NAME
					</H4>
					<span
						style={{
							fontFamily: "Crete Round, serif",
							color: "#1abc9c",
							fontSize: "19px",
						}}
					>
						Title
					</span>
				</TeamMember>
			</div>
			<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
				<TeamMember>
					<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
					<H4 style={{ fontFamily: "Raleway, sans-serif" }}>
						TEAM MEMBERS NAME
					</H4>
					<span
						style={{
							fontFamily: "Crete Round, serif",
							color: "#1abc9c",
							fontSize: "19px",
						}}
					>
						Title
					</span>
				</TeamMember>
			</div>
			<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-1">
				<TeamMember>
					<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPb1Dezl1DflWR2KoOj7vx0uYvbajybepXAPV-oSr7Np1CsYUU" />
					<H4 style={{ fontFamily: "Raleway, sans-serif" }}>
						TEAM MEMBERS NAME
					</H4>
					<span
						style={{
							fontFamily: "Crete Round, serif",
							color: "#1abc9c",
							fontSize: "19px",
						}}
					>
						Title
					</span>
				</TeamMember>
			</div>
		</div>
  </Layout>
)

export default Members
