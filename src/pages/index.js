import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import Contact from "../components/contact"
import Project from "../components/project"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <div class="titlePage">
        <Header>{data.site.siteMetadata.title}</Header>
        <p>hello this will eventually be my website</p>
      </div>

      <div class="about">
        <Header>about</Header>
        <p>hello!! I'm Sylvia, a sophomore majoring in Computer Science at Purdue University. idk if it's possible but i'd like to do a concentration in machine intelligence and security. in my free time, i play video games or take naps.</p>
        <h2>experience</h2>
        <p>jobs i've had will go here: internship, data mine</p>
        <h2>extra curriculars</h2>
        <p>akdphi, sase, mgc, asub</p>
      </div>

      <div class="projects">
        <Header>projects</Header>
        <Project 
          name="hello" 
          description="this will be the project description" 
          githubLink="/"
        />
        <Project
          name="another project"
          description="this will be another project because i have more than two i've worked on yes"
          githubLink="/"
        />
      </div>

      <div class="contact">
        <h2>contact</h2>
        <p>like what you see? contact me (please)</p>
        <Contact to="email" url="/" />
      </div>
    </Layout>
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