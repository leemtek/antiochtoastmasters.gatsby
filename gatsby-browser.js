/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/global.css"
const jQuery = require('jquery');

export const onInitialClientRender = () => {
  jQuery(document).ready(function () {
    console.log("jQuery successfully loaded, I guess =)")
  });
}
