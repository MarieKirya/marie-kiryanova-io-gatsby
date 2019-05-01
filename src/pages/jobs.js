import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const JobsPage = ({data}) => (
  <Layout>
    <SEO title="Jobs" keywords={[`marie`, `kiryanova`, 'Jobs', `react`, `gatsby`, `drupal`, `portfolio`]} />
    <h1 className="title">Jobs</h1>
    { data.allNodeJobs.edges.map((job, index) => {
      return (
        <article className="project">
          <h2 class="title">{job.node.title}</h2>
        </article>
      );
    })}
  </Layout>
)

export const query = graphql`
  query JobsPageQuery {
    allNodeJobs {
      edges {
        node {
          title
        }
      }
    }
  }
`
export default JobsPage
