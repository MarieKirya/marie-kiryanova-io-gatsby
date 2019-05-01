import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProjectsPage = ({data}) => (
  <Layout>
    <SEO title="Projects" keywords={[`marie`, `kiryanova`, 'projects', `react`, `gatsby`, `drupal`, `portfolio`]} />
    <h1 className="title">Projects</h1>
    { data.allNodeProject.edges.map((project, index) => {
      return (
        <article className="project">
          <h2 class="title">{project.node.title}</h2>
          <div class="body">
            <ReactMarkdown source={project.node.body.value} />
          </div>
          <div>
            <a href={project.node.field_link.uri}>See {project.node.field_link.title}</a>
          </div>
        </article>
      );
    })}
  </Layout>
)

export const query = graphql`
  query ProjectsPageQuery {
    allNodeProject {
      edges {
        node {
          title,
          field_link {
            title
            uri
          }
          body {
            value
          }
        }
      }
    }
  }
`
export default ProjectsPage
