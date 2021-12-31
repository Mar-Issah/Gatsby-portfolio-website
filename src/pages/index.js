import React from "react"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import { background, coffee } from "../styles/home.module.css"
import Typed from "react-typed"

const Home = () => {
  return (
    <Layout>
      <section className={background}>
        <h1>Start your day</h1>
        <h1>
          with{" "}
          <span className={coffee}>
            <Typed
              className="typed-text"
              strings={[
                "My name is Marsiya Issah",
                "and I am a",
                "self-taught developer",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </span>
        </h1>
      </section>
    </Layout>
  )
}

export default Home
