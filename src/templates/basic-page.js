import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

import Layout from "../components/layout"

const BasicPageTemplate = ({ data }) => (
  <Layout>
    <div>
      <h1 className="title">{data.nodeBasicPage.title}</h1>

      <div class="content">
        <ReactMarkdown source={data.nodeBasicPage.body.value} />
      </div>
    </div>
  </Layout>
)

export default BasicPageTemplate

export const query = graphql`
  query($slug: String!) {
    nodeBasicPage(path: {alias: {eq: $slug}}) {
      title,
      body {
        value
      }
    }
  }
`
