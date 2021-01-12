import React from "react"
import Header from "../components/header"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

export default function About() {
    return (
      <Layout>
        <div class="about">
          <Header>
            about<span id="accent">.</span> 
          </Header>

          <p>hello!! I'm Sylvia, a sophomore majoring in Computer Science at Purdue University. idk if it's possible but i'd like to do a concentration in machine intelligence and security. in my free time, i play video games or take naps.</p>

          <h2>experience</h2>
          <p>jobs i've had will go here: internship, data mine</p>
          
          <h2>extra curriculars</h2>
          <p>akdphi, sase, mgc, asub</p>
          
        </div>
      </Layout>
    )
}
