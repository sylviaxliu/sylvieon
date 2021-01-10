import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/main.scss"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650}}>
            <Link class="homeLink" to="/" style={{ float: `left`}}>sylvia</Link>
            <ul class="navigation" style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>

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