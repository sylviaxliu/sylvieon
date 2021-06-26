import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import ContentCard from "../components/ContentCard"
import { graphql, Link } from "gatsby"
import "../styles/project.scss"
import Grid from '@material-ui/core/Grid';

export default function Projects() {
    return (
      <Layout>

        <Header>
          projects<span id="accent">.</span> 
        </Header>

        <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={5}>
          <ContentCard
            name="aKDPhi Website"
            createdDate="Jan. 2020"
            codedIn="React, SCSS"
            description="Mock website for sorority"
            github="https://github.com"
          />
        </Grid>

        <Grid item xs={5}>
          <ContentCard 
            name="boof" 
            createdDate="Jan. 2021"
            codedIn="React"
            description="A game" 
            github="https://github.com/sylviaxliu/sylvieon"
          />
        </Grid>

        <Grid item xs={7}>
          <ContentCard
            name="Airplane Reservation System"
            createdDate="Dec. 2019"
            codedIn="Java"
            description="this will be another project because i have more than two i've worked on yes"
            github="/"
          />
        </Grid>
        </Grid>

      </Layout>
    )
}
