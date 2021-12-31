/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`, //look into the notes folder
      },
    },
  ],
  siteMetadata: {
    author: "Marsiya",
    title: "Siya Gatsby Website",
    description: `My coffee shop`,
    copyright: "This is a copyright 2021 Marsiya Issah",
  },
  /* Your site config here */
  // plugins: [`gatsby-plugin-typography`],
  // plugins: [
  //   {
  //     resolve: `gatsby-plugin-typography`,
  //   },
  // ],
}
