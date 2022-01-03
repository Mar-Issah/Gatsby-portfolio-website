import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useEffect } from "react"
import { document } from "browser-monads"

const Navbar = () => {
  useEffect(() => {
    const currurl = window.location.pathname
    const links = [...document.getElementsByClassName("nav-link")]
    links.forEach(link => {
      if (link.getAttribute("href") === currurl) {
        document
          .getElementsByClassName("nav-link active")[0]
          .classList.remove("active")
        link.classList.add("active")
      }
    })
  })

  // how to query in a component
  const data = useStaticQuery(graphql`
    query SiteInfoNavbar {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  console.log(title) //siya gatsby webite
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <a
          href="https://www.freepnglogos.com/pics/coffee-logo-png"
          title="Image from freepnglogos.com"
        >
          <img
            className="img"
            src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png"
            width="100"
            alt="coffee logo design creative idea logo elements"
          />
        </a>
        <div className="links">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-center"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            {/* <li className="nav-item ms-4">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Coffee Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
