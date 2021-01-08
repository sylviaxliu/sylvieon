import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

export default function Contact({ data }) {
    return (
        <Layout>
        contact page
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