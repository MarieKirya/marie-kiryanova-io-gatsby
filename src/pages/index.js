import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marie`, `kiryanova`, `react`, `gatsby`, `drupal`, `portfolio`]} />
    <p>Fake terminal here with typing animation</p>
    <p>CTAs for Projects, Blog, Github, LinkedIn</p>
    <p>Did you know this decoupled site is open source? CTAs to both sides on github.</p>
    <p>Looking to contact me? Head here</p>
  </Layout>
)

export default IndexPage
