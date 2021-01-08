import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

export default function Projects({ data }) {
    return (
        <Layout>

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