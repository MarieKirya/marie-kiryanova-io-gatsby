import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout/layout"
import SEO from "../components/utils/seo";

const BasicPageTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.nodeBasicPage.title} keywords={[`marie`, `kiryanova`, 'blog', `react`, `gatsby`, `drupal`, `portfolio`]} />

    <div className={"container"}>
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
