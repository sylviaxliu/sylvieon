import React from "react"
import { graphql, Link } from "gatsby"
import "../styles/main.scss"
import MenuIcon from '@material-ui/icons/Menu';
import SideNav from "../components/SideNav"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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