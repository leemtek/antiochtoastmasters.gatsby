import React from "react"
import { Helmet } from "react-helmet"
import { Button } from 'reactstrap';
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>

    {/* This is the head content */}
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i" type="text/css" />
      <link rel="stylesheet" href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/style.css" />
      <link rel="stylesheet" href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/swiper.css" type="text/css" />
      <link rel="stylesheet" href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/dark.css" type="text/css" />
      <link rel="stylesheet" href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/font-icons.css" type="text/css" />
      <link rel="stylesheet" href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/animate.css" type="text/css" />
      <link rel="stylesheet" href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/magnific-popup.css" type="text/css" />

      <link rel="stylesheet" href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/responsive.css" type="text/css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>

    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Button color="danger">Danger!</Button>
    </div>
    <Link to="/page-2/">Go to page 2</Link>

    <script src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/jquery.js"></script>
    <script src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/plugins.js"></script>
  </Layout>
)

export default IndexPage
