import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img
            src="/static/cup-icon-food-and-drink-icon-coffee-icon-SMXyTgXU_car8pd.jpg"
            alt="logo"
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
