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
            name="hello" 
            createdDate="date goes here"
            description="this will be the project description" 
            githubLink="https://github.com/sylviaxliu/sylvieon"
          />
          
          <Project
            name="another project"
            createdDate="date goes here"
            description="this will be another project because i have more than two i've worked on yes"
            githubLink="/"
          />

          <Project
            name="another project"
            createdDate="date goes here"
            description="this will be another project because i have more than two i've worked on yes"
            githubLink="/"
          />
        </div>

      </Layout>
    )
}
