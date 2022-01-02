import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import styles from '../styles/shop-details.module.css'

const ShopDetail = ({data}) => {
  return (
    <Layout>
        <div>
            <h2>title</h2>
            <h2>Shop detail</h2>
              <div><Img fluid={ } /></div>
              <div dangerouslySetInnerHTML={}/>
      </div>
    </Layout>
  )
}

export default ShopDetail

export const query = graphql`
  query MyShopQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`