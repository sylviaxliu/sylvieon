import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/main.scss"
import "../components/Navigation.js"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650}}>
            <Navigation />

            {children}
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