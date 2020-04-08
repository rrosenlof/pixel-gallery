import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h1>About</h1>
    <p style={{
          fontFamily: 'Roboto Mono'
        }}>This page was made for a Humanities 202 class at Brigham Young University, winter 2020.</p>
    <Link to="/">Back to the gallery...</Link>
  </Layout>
)

export default SecondPage
