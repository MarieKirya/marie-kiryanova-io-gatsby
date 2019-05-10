import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/utils/seo"
import Job from "../components/content/job"

const JobsPage = ({data}) => (
  <Layout>
    <div className={"container"}>
      <SEO title="Jobs" keywords={[`marie`, `kiryanova`, 'Jobs', `react`, `gatsby`, `drupal`, `portfolio`]} />
      <h1 className="title">Jobs</h1>
      { data.allNodeJobs.edges.map((job, index) => ( <Job node={job.node} /> )) }
    </div>
  </Layout>
)

export const query = graphql`
  query JobsPageQuery {
    allNodeJobs (
      sort: {
        fields: field_job_end
        order: DESC
      }
    ) {
      edges {
        node {
          title,
          field_title,
          body {
            value
          }
          field_job_beginning(formatString: "MMMM, YYYY"),
          field_job_end(formatString: "MMMM, YYYY"),
          field_current_job,
          relationships {
            field_logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 512, maxHeight: 512) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            field_projects  {
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
    }
  }
`
export default JobsPage
