import React from "react"
import Experience from "../components/experience"
import Header from "../components/header"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

export default function About() {
    return (
      <Layout>
        <div class="about">
          <Header>
            About me<span id="accent">.</span> 
          </Header>

          <p>hello!! I'm Sylvia, a sophomore majoring in Computer Science at Purdue University. idk if it's possible but i'd like to do a concentration in machine intelligence and security. in my free time, i play video games or take naps.</p>

          <h2 style={{ textAlign: `right` }}>experience</h2>
          <p>
            <Experience name="Name of Job" 
              startDate="start date of job" 
              endDate="end date of job" 
              role="this is my role" 
              description="this is what i did, probably in somewhat complete sentences." 
            />
            <Experience name="name of other job" 
              startDate="start date of job" 
              endDate="end date of job" 
              role="this is my role" 
              description="this is what i did in another sentence." 
            />
          </p>
          
          <h2 style={{ textAlign: `left` }}>extra curriculars</h2>
          <p>akdphi, sase, mgc, asub</p>
          
        </div>
      </Layout>
    )
}
