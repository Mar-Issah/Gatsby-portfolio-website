const path = require(`path`)
// This function will give you access to the createPage action,which is at the core of programmatically creating a page.

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query ShopDetails {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "shop/" + node.frontmatter.slug,
      component: require.resolve("./src/template/shop-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
