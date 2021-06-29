import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/main.scss"
import SideNav from "../components/SideNav"

export default function Layout({ children }) {
    return (
      <>

    <head>
      <title>Sylvia Liu</title>
    </head>
        <div>

            <SideNav />

            <div id="container">
              {children}
            </div>
        </div>
      </>
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