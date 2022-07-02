import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/utils/seo"
import RowsOfColums from "../components/utils/rows-of-columns.js"
import ProjectCard from "../components/content/project-card.js"

const ProjectsPage = ({data}) => (
  <Layout>
    <div className={"container"}>
      <Seo title="Projects" keywords={[`marie`, `kiryanova`, 'projects', `react`, `gatsby`, `drupal`, `portfolio`]} />
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
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    aspectRatio: 1
                  )
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
