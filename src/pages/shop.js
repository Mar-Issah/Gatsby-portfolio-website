import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

const Shop = ({ data }) => {
  //to get the nodes array of frontmatter and id
  const items = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <h1>Shop</h1>
      {items.map(item => (
        <Link to={`/shop/${item.frontmatter.slug}`} key={item.id}>
          <div>
            <h3>{item.frontmatter.title}</h3>
            <p>{item.frontmatter.slogan}</p>
          </div>
        </Link>
      ))}
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
