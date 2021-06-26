import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/main.scss"
import SideNav from "../components/SideNav"

export default function Layout({ children }) {
    return (
        <div style={{ margin: `3rem auto`, minWidth: 150, maxWidth: 850, position: 'relative', }}>

            <SideNav />

            <div id="container">
              {children}
            </div>
        </div>
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