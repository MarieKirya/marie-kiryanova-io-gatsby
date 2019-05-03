import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

import Layout from "../components/layout"

const BlogTemplate = ({ data }) => (
  <Layout>
    <div className={"container"}>
      <h1 className="title">{data.nodeBlogPost.title}</h1>

      <div class="content">
        <ReactMarkdown source={data.nodeBlogPost.body.value} />
      </div>
    </div>
  </Layout>
)

export default BlogTemplate

export const query = graphql`
  query($slug: String!) {
    nodeBlogPost(path: {alias: {eq: $slug}}) {
      title,
      body {
        value
      }
    }
  }
`
