const path = require(`path`)
//async/await since we are waiting for a data to be returned

//we get an object from the function actions,graphql which we destructure

//as usaual grapghql gives us an object which we destructure all we need is the slug or page route we created

//
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

  // we use the actions to create the page
  //the path/url will be as indicated and in the browser
  //the component is which component we want to use or show in the browser and in this case it is the template file

  //context is what variable do we want to pass in to the template when we generate the page. ie the template will have access to the context info

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "shop/" + node.frontmatter.slug,
      component: require.resolve("./src/template/shop-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
