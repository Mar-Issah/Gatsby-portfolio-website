import React from "react"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import { header, coffee, btnPrimary } from "../styles/home.module.css"
import Typed from "react-typed"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

const Home = () => {
  //data coming in from the graphQl query
  // const { description } = data.site.siteMetadata
  //can be use anywhere in the page
  return (
    <Layout>
      <section className={header}>
        <Container>
          <h1 style={{ color: "#e3e4e6" }}>Start your day</h1>
          <h1 style={{ color: "#e3e4e6" }}>
            with{" "}
            <span className={coffee}>
              <Typed
                strings={[" coffee!!!"]}
                typeSpeed={80}
                backSpeed={90}
                loop
              />
            </span>
          </h1>
          <button className={btnPrimary}>
            <Link className="nav-link" to="/shop">
              My Coffee Shop
            </Link>
          </button>
        </Container>
      </section>
    </Layout>
  )
}
export default Home

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `
