import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container">
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
        <div class="links">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li class="nav-item ms-4">
              <Link class="nav-link" href="/about">
                About
              </Link>
            </li>
            <li class="nav-item ms-4">
              <Link class="nav-link" href="/shop">
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
