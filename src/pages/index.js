import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Title from "../components/Title"

export default function Home({ data }) {
  return (
    <Layout>
      <div class="titlePage">

        <Title>{data.site.siteMetadata.title}</Title>
      
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