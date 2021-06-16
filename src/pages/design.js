import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Title from "../components/Title"
import "../styles/main.scss"

export default function Design({ data }) {
  return (
    <Layout>
      
        <h1> header 1</h1>
        <h2>header 2</h2>
        <h3>header 3</h3>
        <h4>header 4</h4>
        <b>this is bold</b><br></br>
        <i>this is italics</i><br></br>
        <u>this is underline</u>
        <div id="button1">#button1</div>
        <div id="button2">#button2</div>
        <div id="button-icon">button icon</div>

    </Layout>
    )
}