import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Group Scenes</h1>
    <p>Bacchus</p>
    <p>Las Meninas</p>
    <p>Third of May</p>
    <h1>Portrait Gallery</h1>
    <p>Manet</p>
    <p>Van Gogh</p>
    <p>Vermeer</p>
    <h1>Late-19th/Early-20th Century Art</h1>
    <p>Cezanne</p>
    <p>Matisse</p>
    <p>Starry night</p>
    <h1>Modern Art</h1>
    <p>Mondrian</p>
    <p>Pollock</p>
    <h1>Sculpture Garden</h1>
    <p>Duane Hanson</p>
    <p>Rodin</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Gift Shop</Link>
  </Layout>
)

export default IndexPage
