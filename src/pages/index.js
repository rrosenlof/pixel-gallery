import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Titian from "../images/bacchus_ariadne.png"
// import Cezanne from "../images/cezanne.png"
// import Hanson from "../images/duane_hanson.png"
// import Velazquez from "../images/las_meninas.png"
// import Manet from "../images/manet.jpg"
// import Matisse from "../images/matisse_room.png"
// import Mondrian from "../images/mondrian.png"
// import Pollock from "../images/pollock.png"
// import Rodin from "../images/rodin.png"
// import VanGogh1 from "../images/starry_night.png"
// import VanGogh2 from "../images/van_gogh.jpg"
// import Goya from "../images/third_of_may.png"
// import Vermeer from "../images/vermeer.jpg"

import "./index.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Index = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {extension: {}, relativeDirectory: {}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }`)

  return (
    <Layout>
      <SEO title="Home" />
      <p>blah</p>
      {data.allFile.edges.map(({ node })=> (
        <Img fluid={node.childImageSharp.fluid} 
              alt={node.base.split(".")[0]}/>
      ))}
      <Link to="/about/">Gift Shop</Link>
      <footer>
        <br></br>
      </footer>
    </Layout>
  )
}

export default Index