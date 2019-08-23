import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/style.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/colors.css"
          type="text/css"
        />

        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/swiper.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/dark.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/font-icons.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/animate.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/magnific-popup.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/css/responsive.css"
          type="text/css"
        />
        <script src="https://d1xrp9zhb3ks3c.cloudfront.net/web/antioch-toastmasters/template/js/jquery.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
