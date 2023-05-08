/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-your-live-in-weeks`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [ "gatsby-plugin-sitemap","gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};