import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/main.scss"
import "../styles/navigation.scss"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, position: 'relative', }}>
            <div id="navigation">
              <Link id="homeLink" to="/" style={{ float: `left`}}>sylvia</Link>
            <ul id="tabs" style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/projects/">Projects</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
            </div>

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