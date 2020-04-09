import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "./about.css"

const SecondPage = () => (
  <Layout>
    <h2>About</h2>
    <p style={{
          fontFamily: 'Roboto Mono'
        }}>This page was made for a Humanities 202 class at Brigham Young University, winter 2020.</p>
    <h3>Sources</h3>
    <ul>
      <li>
        <a href="https://en.wikipedia.org/wiki/Bacchus_and_Ariadne#/media/File:Titian_Bacchus_and_Ariadne.jpg">Titian - Bacchus and Ariadne, 1523</a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/The_Third_of_May_1808#/media/File:El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_thin_black_margin.jpg">Francisco Goya - Third of May, 1814</a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Las_Meninas#/media/File:Las_Meninas,_by_Diego_Vel%C3%A1zquez,_from_Prado_in_Google_Earth.jpg">Diego Velasquez - Las Meninas, 1656</a>  
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/A_Bar_at_the_Folies-Berg%C3%A8re#/media/File:Un_bar_aux_Folies-Berg%C3%A8re_d'E._Manet_(Fondation_Vuitton,_Paris)_(33539037428).jpg">Edouard Manet - A Bar at the Folies-Bergère, 1882</a>
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/The_Geographer#/media/File:J._VERMEER_-_El_ge%C3%B3grafo_(Museo_St%C3%A4del,_Fr%C3%A1ncfort_del_Meno,_1669).jpg">Johannes Vermeer - The Geographer, 1669</a>
      </li>
      <li>
        <a href="https://courtauld.ac.uk/gallery/collection/impressionism-post-impressionism/van-gogh-self-portrait">Vincent Van Gogh - Self Portrait with Bandaged Ear, 1889</a>
      </li>
      <li>
        <a href="https://getcustomart.com/products/henri-matisse-red-interior-still-life-on-a-blue-table">Henri Matisse - Still life in a red room, 1911</a>
      </li>
      <li>
        <a href="https://www.pablopicasso.org/three-musicians.jsp">Pablo Picasso - Three Musicians, 1921</a>
      </li>
      <li>
        <a href="https://www.moma.org/collection/works/79802">Vincent Van Gogh - Starry Night, 1889</a>        
      </li>
      <li>
        <a href="https://commons.wikimedia.org/wiki/File:Tableau_I,_by_Piet_Mondriaan.jpg">Piet Mondrian - Tableau 1, 1921</a>        
      </li>
      <li>
        <a href="https://www.jackson-pollock.org/number-5.jsp">Jackson Pollock - No. 5, 1948</a>
      </li>
      <li>
        <a href="https://dereksarthistorytimeline.weebly.com/supermarket-shopper.html">Duane Hanson - Supermarket Shopper, 1970</a>        
      </li>
      <li>
        <a href="https://www.nga.gov/collection/art-object-page.1005.html">Auguste Rodin - The Thinker, 1880</a>
      </li>
    </ul>
    <Link to="/">Back to the gallery...</Link>
  </Layout>
)

export default SecondPage
