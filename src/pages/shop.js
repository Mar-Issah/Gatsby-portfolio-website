import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const Shop = () => {
  return (
    <Layout>
      <h1>Shop</h1>
    </Layout>
  )
}
export default Shop

export const query = graphql`
  query MyShopQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          stack
          title
          slug
        }
        id
      }
    }
  }
`
