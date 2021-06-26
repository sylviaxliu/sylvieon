import React from "react"
import Header from "../components/header"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Experiences from "../components/Experiences"
import Extracurriculars from "../components/Extracurriculars"

export default function About() {
    return (
      <Layout>
        <div class="about">
          <Header>
            About me<span id="accent">.</span> 
          </Header>

          <p>hello!! I'm Sylvia, a sophomore majoring in Computer Science at Purdue University. i'm doing a concentration in machine learning and security but making websites is really fun. i spend too much money on coffee.</p>

          <h2 style={{ textAlign: `right` }}>Experience</h2>
          <Experiences />
          
          <h2 style={{ textAlign: `left` }}>Extracurriculars</h2>
          <Extracurriculars />
          
        </div>
      </Layout>
    )
}
