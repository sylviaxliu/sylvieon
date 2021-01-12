import React from "react"

import ContactLink from "../components/ContactLink"
import Header from "../components/Header"
import Layout from "../components/Layout"

import { graphql, Link } from "gatsby"

export default function Contact() {
    return (
        <Layout>
            <div class="contact">
            <Header>
                Contact<span id="accent">.</span> 
            </Header>

            <p>like what you see? contact me (please)</p>
            
            <ContactLink to="email" url="/" />
        </div>
        </Layout>
    )
}
