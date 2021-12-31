import React from "react"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import { background, coffee } from "../styles/home.module.css"

const Home = () => {
  return (
    <Layout>
      <section className={background}>
        <h1>Start your day</h1>
        <h1>
          with <span className={coffee}>Coffee</span>
        </h1>
      </section>
    </Layout>
  )
}

export default Home
