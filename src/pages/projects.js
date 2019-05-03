import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RowsOfColums from "../components/rows-of-columns.js"
import ProjectCard from "../components/content/project-card.js"

const ProjectsPage = ({data}) => (
  <Layout>
    <div className={"container"}>
      <SEO title="Projects" keywords={[`marie`, `kiryanova`, 'projects', `react`, `gatsby`, `drupal`, `portfolio`]} />
      <h1 className="title">Projects</h1>

      <RowsOfColums columns={3}
                    data={data.allNodeProject.edges}
                    render={ data => <ProjectCard node={data.node}/> }/>
    </div>
  </Layout>
)


export const query = graphql`
  query ProjectsPageQuery {
    allNodeProject (
      sort: {
        fields: field_date
        order: DESC
      }
    ) {
      edges {
        node {
          title,
          field_date,
          field_link {
            title
            uri
          }
          body {
            value
          }
          relationships {
            field_technologies {
              name
            }
            field_logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default ProjectsPage
