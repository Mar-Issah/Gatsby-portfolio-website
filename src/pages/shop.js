import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { projects, container, image } from "../styles/shop.module.css"

const Shop = ({ data }) => {
  //to get the nodes array of frontmatter and id
  const items = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={container}>
        <h1>Start your day by choosing </h1>
        <br />
        <h3>the perfect coffee :-)</h3>
        <div className={projects}>
          {items.map(item => (
            <Link to={`/shop/${item.frontmatter.slug}`} key={item.id}>
              <div>
                <Img
                  className={image}
                  fluid={item.frontmatter.thumb.childImageSharp.fluid}
                />
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

// projects folder is optional although it will be save in a project objects
export const query = graphql`
  query MyShopQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slogan
          title
          slug
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
