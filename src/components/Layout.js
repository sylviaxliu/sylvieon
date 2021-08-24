import React from "react"
import "../styles/main.scss"
import SideNav from "../components/SideNav"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
    return (
      <>

        <Helmet>
          <title>sylvialiu.dev</title>
          <link rel="icon" href="../static/favicon.ico" />
        </Helmet>
        <div>

            <SideNav />

            <div id="container">
              {children}
            </div>
        </div>
      </>
    )
}