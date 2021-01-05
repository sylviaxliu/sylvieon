import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>welcome to {data.site.siteMetadata.title}</h1>
      <p>hello this will eventually be my website</p>
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