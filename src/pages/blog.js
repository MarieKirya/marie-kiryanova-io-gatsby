import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/utils/seo"
import RowsOfColumns from "../components/utils/rows-of-columns"
import BlogCard from "../components/content/blog-card"

const BlogPage = ({data}) => (
  <Layout>
    <div className={"container"}>
      <Seo title="Blog" keywords={[`marie`, `kiryanova`, 'blog', `react`, `gatsby`, `drupal`, `portfolio`]} />
      <h1 className="title">Blog</h1>

      <RowsOfColumns columns={2} data={data.allNodeBlogPost.edges}
        render={ (data) => <BlogCard node={data.node} /> }/>
    </div>
  </Layout>
)

export const query = graphql`
  query BlogPageQuery {
    allNodeBlogPost (
      sort: {
        fields: created
        order: DESC
      }
    ) {
      edges {
        node {
          title
          created(formatString: "MMMM Do, YYYY"),
          body {
            summary
          }
          path {
            alias
          }
          relationships {
            field_hero_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    aspectRatio: 1.777777777
                    placeholder: BLURRED
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
export default BlogPage
