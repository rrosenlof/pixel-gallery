import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "./about.css"

const SecondPage = () => (
  <Layout>
    <h2>About</h2>
    <p>This page was made for a Humanities 202 class at Brigham Young University, winter 2020.</p>
    <p>I was inspired to make this by a post-it note mosaic of Starry Night in the BYU library. I made a program for porgramatically creating pixelated images. Of course tools
      like Photoshop can perform these functions easily, but I wanted to try a more programatic approach. My thoughts were that
      this could be used to easily map out similar creations. I was also inspired by art work by street artist <a href="https://www.instagram.com/invaderwashere/">Space Invader</a>, the design agency <a href="https://www.instagram.com/eboyarts/">eBoy</a>,
      and of course, graphics from video games and early computer programs.
    </p>
    <p>
      Using visible pixels to create images like these is reminiscent of Post-Impressionists who experimented with color in ways
      that other artists had not done before. Artists like Georges Seurat painted with <i>pointilles</i>, indivdual points of color that
      combine to form the larger image. Others like Van Gogh and Cezanne painted with thick, contrasting brushstrokes to form their
      scenes. 
    </p>
    <p>
      When viewed close up, the pixels, like Seurat's <i>pointilles</i> or Van Gogh's brushwork, are a mess of colors. But when viewed as a whole, figures 
      start to form. It's fun to see the optical illusions that collections of pixels can make in forming a larger image. Thanks to improved graphics
      technology today, images on our screens don't have these same visible pixels, but for people my age, images like these are often nostalgic of childhood.
    </p>
    <p>
      My pixelating program worked best with images with higher contrast, brighter colors, and fewer details. Most of the input images' color and contrast were altered
      by the program to create a better palette. Some images were edited slightly in Photoshop, but most of the final images were simply made by the program's inputs.
      The pixelating program was made with Python, using the PIL library, and this site was made with <a href="https://www.gatsbyjs.org/">Gatsby</a>.
    </p> 
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
        <a href="https://www.crayola.com/lesson-plans/pointillism-lesson-plan/">Georges Seurat - Parade de cirque (Detail), 1887</a>
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
