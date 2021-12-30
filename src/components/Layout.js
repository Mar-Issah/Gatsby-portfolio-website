import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>
        <p>Copyright 2021 || Marsiya Issah</p>
      </footer>
    </>
  )
}

export default Layout
