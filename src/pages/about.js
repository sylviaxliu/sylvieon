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
          
          <h2 style={{ textAlign: `left` }}>Extracurriculars</h2>
          <p>
            <Extracurricular name="alpha Kappa Delta Phi International Sorority, Inc." />
              <Role name="Treasurer"
                startDate="beginning"
                endDate="ending"
                description="probably bullet points right"
              />
              <Role name="Secretary"
                startDate="beginning"
                endDate="ending"
                description="this is what i did in this role"
              />
              <Role name="Fundraising Chair"
                startDate="beginning"
                endDate="ending"
                description="this is what i did in this role"
              />
            <Extracurricular name="Purdue Asian Student Union Board" />
              <Role name="Fundraising Chair"
                startDate="beginning"
                endDate="ending"
                description="probably bullet points right"
              />
            <Extracurricular name="Purdue Multicultural Greek Council" />
              <Role name="Treasurer"
                startDate="beginning"
                endDate="ending"
                description="probably bullet points right"
              />
            <Extracurricular name="Society for Asian Scientists and Engineers" />
              <Role name="General Member"
                startDate="beginning"
                endDate="ending"
                description="probably bullet points right"
              />
            <Extracurricular name="Asian American Association" />
              <Role name="General Member"
                startDate="beginning"
                endDate="ending"
                description="probably bullet points right"
              />
          </p>
          
        </div>
      </Layout>
    )
}
