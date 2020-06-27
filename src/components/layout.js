/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header";
import Footer from "./footer";

import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <Footer />

      {/* <!-- Go To Top
        ============================================= --> */}
      <div id="gotoTop" className="icon-angle-up"></div>

      <Helmet>
        {/* <!-- External JavaScripts
        ============================================= --> */}
        <script>
          {` 
            //CDN URL
            const CDNUrl = "https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/";

            //Lets create new script elements
            //const script_jquery = document.createElement("script");
            const script_plugins = document.createElement("script");
            const script_functions = document.createElement("script");

            //Lets assign the file path to the script elements
            //script_jquery.src = CDNUrl + "jquery.js";
            script_plugins.src = CDNUrl + "plugins.js";
            script_functions.src = CDNUrl + "functions.js";

            //lets defer plugins and functions...
            script_plugins.defer = true;
            script_functions.defer = true;

            //Lets add our new script elements to the bottom of the head tag, in order
            //document.head.appendChild(script_jquery);
            document.head.appendChild(script_plugins);
            document.head.appendChild(script_functions);
          `}
        </script>
      </Helmet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
