import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Title from "../components/Title"
import "../styles/main.scss"
import "../styles/typing-animation.scss"

//import Projects from "./projects"

export default function Home({ data }) {
  return (
    <>
    <Layout>
        <section id="home">
          <div class="top-heading heading">
            Hi I'm <span class="green-span">Sylvia</span>! I code and drink coffee.
          </div>
        </section>
        <section id="about-transition">
          <div class="about-heading heading">
            Obligatory<br></br>
            <span class="yellow-span">fun facts</span>
          </div>
          <div class="container">
            <div class="item">one</div>
            <div class="item">two</div>
            <div class="item">three</div>
            <div class="item">four</div>
          </div>
        </section>

        <section id="projects-transition">
          <div class="projects-transition-heading heading">projects</div>
        </section>

        <section id="experience-transition">
          <div class="experience-transition-heading heading">experience</div>
        </section>

        <section id="contact">
          <div class="contact-heading">
            what next?
            <p class="subheading">get in touch!</p>
            <div class="contact-info">
              <p>Currently, I'm seeking software engineering internships for summer 2022.</p>
              <p>Say hello <a href="sylviaxliu@yahoo.com" class="contact-link">via email</a> or <a href="" class="contact-link">download my resume</a></p>
              <p>Talk to you soon!</p>
            </div>
          </div>
        </section>
      
    </Layout>
    </>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

