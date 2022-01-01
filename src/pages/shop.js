import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { projects, container } from "../styles/shop.module.css"

const Shop = ({ data }) => {
  //to get the nodes array of frontmatter and id
  const items = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={container}>
        <h1>Start your day by choosing the perfect coffee</h1>
        <div className={projects}>
          {items.map(item => (
            <Link to={`/shop/${item.frontmatter.slug}`} key={item.id}>
              <div>
                <h3>{item.frontmatter.title}</h3>
                <p>{item.frontmatter.slogan}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default Shop

export const query = graphql`
  query MyShopQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slogan
          title
          slug
        }
        id
      }
    }
  }
`
