import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Title from "../components/Title"
import "../styles/main.scss"

export default function Home({ data }) {
  return (
    <Layout>
      <div class="titlePage">

        <Title>
          <div id="title">
            <span style={{ letterSpacing: `-0.1rem` }}> 
              Hi<span id="accent">.</span> I'm Sylvia<span id="accent">.</span>
            </span>

            <div id="subtitle">
              This will be something short about me to capture your attention maybe. Hopefully this will be fine and not break.
            </div>

            <Link href="/about" id="button">
              <span class="text">discover more</span>
              <div class="overlay"></div>
            </Link>
          </div>
        </Title>
        

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