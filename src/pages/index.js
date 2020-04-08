import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Titian from "../images/bacchus_ariadne.png"
import Cezanne from "../images/cezanne.png"
import Hanson from "../images/duane_hanson.png"
import Velazquez from "../images/las_meninas.png"
import Manet from "../images/manet.jpg"
import Matisse from "../images/matisse_room.png"
import Mondrian from "../images/mondrian.png"
import Pollock from "../images/pollock.png"
import Rodin from "../images/rodin.png"
import VanGogh1 from "../images/starry_night.png"
import VanGogh2 from "../images/van_gogh.jpg"
import Goya from "../images/third_of_may.png"
import Vermeer from "../images/vermeer.jpg"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <h2>Group Scenes</h2>
      <hr></hr>
      <div class="container">
        <div class="two-images">
          <img src={Titian} alt="Bacchues and Ariadne" />
          <p>Bacchus</p>
          <img src={Goya} alt="Third of May" />
          <p>Third of May</p>
        </div>
        <div class="one-image">
          <img src={Velazquez} alt="Las Meninas" />
          <p>Las Meninas</p>
        </div>
      </div>
  
      <h2>Portrait Gallery</h2>
      <hr></hr>
      <div class="container">
        <div class="two-images">
          <img src={Manet} alt="A Bar at the Folies-Bergère" />
          <p>Manet</p>
          <img src={Vermeer} alt="The Geographer" />
          <p>Vermeer</p>
        </div>
        <div class="one-image">
          <img src={VanGogh2} alt="Self Portrait with Bandaged Ear" />
          <p>Van Gogh</p>
        </div>
      </div>
  
      <h2>Late-19th/Early-20th Century Art</h2>
      <hr></hr>
      <div class="container">
        <div class="one-image">
          <img src={Matisse} alt="Still life in a red room" />
          <p>Matisse</p>
        </div>
        <div class="two-images">
          <img src={Cezanne} alt="View of Mont-Saint-Victoire" />
          <p>Cezanne</p>
          <img src={VanGogh1} alt="Starry Night" />
          <p>Starry night</p>
        </div>
      </div>
  
      <h2>Modern Art</h2>
      <hr></hr>
      <div class="container">
        <div class="two-images">
          <img src={Mondrian} alt="Tableau 1" />
          <p>Mondrian</p>
        </div>
        <div class="one-image">
          <img src={Pollock} alt="No. 5, 1948" />
          <p>Pollock</p>
        </div>
      </div>
  
      <h2>Sculpture Garden</h2>
      <hr></hr>
      <div class="container">
        <div class="one-image">
          <img src={Hanson} alt="Supermarket Shopper" />
          <p>Duane Hanson</p>
        </div>
        <div class="two-images">
          <img src={Rodin} alt="The Thinker" />
          <p>Rodin</p>
        </div>
      </div>

    <Link to="/about/">Gift Shop</Link>
    <footer>
      <br></br>
    </footer>
  </Layout>
)

export default IndexPage
