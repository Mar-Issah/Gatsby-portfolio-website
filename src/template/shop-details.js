import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { shop } from "../styles/shop-details.module.css"

const ShopDetail = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, slogan, thumb } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={shop}>
        <h2>{title}</h2>
        <h4>{slogan}</h4>
        <div>
          <Img fluid={thumb.childImageSharp.fluid} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ShopDetail

//html returns the markdown lorem text
//we are querying using the slug varaible to return dynamic pages based on selection
//it will search through the md files and return once matching the slug text
export const query = graphql`
  query ShopDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slogan
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
