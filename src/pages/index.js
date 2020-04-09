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
      <hr/>
      <div class="container">
        <div class="two-images">
          <img src={Titian} alt="Bacchues and Ariadne" />
          <p class="artist-name">Titian</p>
          <p>Bacchus and Ariadne, 1523</p>
          <img src={Goya} alt="Third of May" />
          <p class="artist-name">Francisco Goya</p>
          <p>Third of May 1808, 1814</p>
        </div>
        <div class="one-image">
          <img src={Velazquez} alt="Las Meninas" />
          <p class="artist-name">Diego Velasquez</p>
          <p>Las Meninas, 1656</p>
        </div>
      </div>
  
      <h2>Portrait Gallery</h2>
      <hr/>
      <div class="container">
        <div class="two-images">
          <img src={Manet} alt="A Bar at the Folies-Bergère" />
          <p class="artist-name">Edouard Manet</p>
          <p>A Bar at the Folies-Bergère, 1882</p>
          <img src={Vermeer} alt="The Geographer" />
          <p class="artist-name">Johannes Vermeer</p>
          <p>The Geographer, 1669</p>
        </div>
        <div class="one-image">
          <img src={VanGogh2} alt="Self Portrait with Bandaged Ear" />
          <p class="artist-name">Vincent Van Gogh</p>
          <p>Self Portrait with Bandaged Ear, 1889</p>
        </div>
      </div>
  
      <h2>Late-19th/Early-20th Century Art</h2>
      <hr/>
      <div class="container">
        <div class="one-image">
          <img src={Matisse} alt="Still life in a red room" />
          <p class="artist-name">Henri Matisse</p>
          <p>Still life in a red room, 1991</p>
        </div>
        <div class="two-images">
          <img src={Cezanne} alt="View of Mont-Saint-Victoire" />
          <p class="artist-name">Paul Cézanne</p>
          <p>View of Mont-Saint-Victoire, 1904</p>
          <img src={VanGogh1} alt="Starry Night" />
          <p class="artist-name">Vincent Van Gogh</p>
          <p>Starry Night, 1889</p>
        </div>
      </div>
  
      <h2>Modern Art</h2>
      <hr/>
      <div class="container">
        <div class="two-images">
          <img src={Mondrian} alt="Tableau 1" />
          <p class="artist-name">Piet Mondrian</p>
          <p>Tableau 1, 1921</p>
        </div>
        <div class="one-image">
          <img src={Pollock} alt="No. 5, 1948" />
          <p class="artist-name">Jackson Pollock</p>
          <p>No. 5, 1948</p>
        </div>
      </div>
  
      <h2>Sculpture Garden</h2>
      <hr/>
      <div class="container">
        <div class="one-image">
          <img src={Hanson} alt="Supermarket Shopper" />
          <p class="artist-name">Duane Hanson</p>
          <p>Supermarket Shopper, 1970</p>
        </div>
        <div class="two-images">
          <img src={Rodin} alt="The Thinker" />
          <p class="artist-name">Auguste Rodin</p>
          <p>The Thinker, 1880</p>
        </div>
      </div>

    <Link to="/about/">Gift Shop</Link>
    <footer>
      <br></br>
    </footer>
  </Layout>
)

export default IndexPage