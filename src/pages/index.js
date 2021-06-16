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
              computer science student & coffee enthusiatist 
            </div>

            <Link href="/about" id="button1">
              <span class="text">hire me</span>
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