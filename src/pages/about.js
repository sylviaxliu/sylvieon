import React from "react"
import Experience from "../components/experience"
import Extracurricular from "../components/extracurricular"
import Header from "../components/header"
import Layout from "../components/Layout"
import Role from "../components/Role"
import { graphql, Link } from "gatsby"

export default function About() {
    return (
      <Layout>
        <div class="about">
          <Header>
            About me<span id="accent">.</span> 
          </Header>

          <p>hello!! I'm Sylvia, a sophomore majoring in Computer Science at Purdue University. i'm doing a concentration in machine learning and security but making websites is really fun. i spend too much money on coffee.</p>

          <h2 style={{ textAlign: `right` }}>Experience</h2>
          <p>
            <Experience name="Undergraduate Student Researcher" 
              startDate="Aug. 2020" 
              endDate="May 2021" 
              company="Lawerence Livermore National Laboratory, Purdue University Collaboration" 
              description="this is what i did, probably in somewhat complete sentences." 
            />
            <Experience name="Data Management Intern" 
              startDate="Dec. 2020" 
              endDate="Jan. 2021" 
              company="alpha Kappa Delta Phi International Leadership Board" 
              description="this is what i did in another sentence." 
            />
          </p>
          
          <h2 style={{ textAlign: `left` }}>Extracurriculars</h2>
          <p>
            <Extracurricular name="alpha Kappa Delta Phi International Sorority, Inc." />
              <Role name="Treasurer"
                date="Jan. 2021 to Present"
              />
              <Role name="Secretary"
                date="May 2020 to Dec. 2020"
              />
              <Role name="Fundraising Chair"
                date="May 2020 to Present"
              />
            <Extracurricular name="Purdue Asian Student Union Board" />
              <Role name="Fundraising Chair"
                date="May 2020 to Present"
              />
            <Extracurricular name="Purdue Multicultural Greek Council" />
              <Role name="Treasurer"
                date="May 2020 to Present"
              />
            <Extracurricular name="Society for Asian Scientists and Engineers" />
              <Role name="General Member"
                date="Aug. 2019 to Present"
              />
            <Extracurricular name="Asian American Association" />
              <Role name="General Member"
                date="Aug. 2020 to Present"
              />
          </p>
          
        </div>
      </Layout>
    )
}
