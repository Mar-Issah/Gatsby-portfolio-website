import React from "react"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import { background, coffee } from "../styles/home.module.css"
import Typed from "react-typed"
import { Button } from "react-bootstrap"

const Home = () => {
  return (
    <Layout>
      <section className={background}>
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
        <Button variant="primary">My Coffee Shop</Button>
      </section>
    </Layout>
  )
}

export default Home
