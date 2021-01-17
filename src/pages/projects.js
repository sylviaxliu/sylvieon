import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Project from "../components/Project"
import { graphql, Link } from "gatsby"

export default function Projects() {
    return (
      <Layout>

        <div class="projects">
          <Header>
            projects<span id="accent">.</span> 
          </Header>

          <Project
            name="aKDPhi Website"
            createdDate="Jan. 2020"
            codedIn="React, SCSS"
            description="Mock website for sorority"
            githubLink="/"
          />

          <Project 
            name="boof" 
            createdDate="Jan. 2021"
            codedIn="React"
            description="A game" 
            githubLink="https://github.com/sylviaxliu/sylvieon"
          />
          
          <Project
            name="Airplane Reservation System"
            createdDate="Dec. 2019"
            codedIn="Java"
            description="this will be another project because i have more than two i've worked on yes"
            githubLink="/"
          />
        </div>

      </Layout>
    )
}
