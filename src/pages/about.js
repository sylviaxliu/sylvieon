import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

export default function About({ data }) {
    return (
        <Layout>
about page
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