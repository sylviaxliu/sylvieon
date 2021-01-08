import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <Header>{data.site.siteMetadata.title}</Header>
      <p>hello this will eventually be my website</p>
      <h2>about</h2>
      <p>hello!! I'm Sylvia, a sophomore majoring in Computer Science at Purdue University. </p>
      <h2>projects</h2>
      <h2>contact</h2>
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