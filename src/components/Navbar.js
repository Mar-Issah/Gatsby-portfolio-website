import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <Link
          href="https://www.freepnglogos.com/pics/coffee-logo-png"
          title="Image from freepnglogos.com"
        >
          <img
            className="img"
            src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png"
            width="100"
            alt="coffee logo design creative idea logo elements"
          />
        </Link>
        <div className="links">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" href="/shop">
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
