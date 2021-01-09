import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <div class="titlePage">

        <Header>{data.site.siteMetadata.title}</Header>
      
        <p>hello this will eventually be my website</p>

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