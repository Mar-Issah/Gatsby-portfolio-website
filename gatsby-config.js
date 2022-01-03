/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`, //look into the src folder
      },
    },
  ],
  siteMetadata: {
    author: "Marsiya",
    title: "Siya Gatsby Website",
    // description: `My coffee shop`,
    copyright: "This is a copyright 2021 Marsiya Issah",
    contact: "masy370@gmail.com",
  },
}
