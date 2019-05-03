import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import RowsOfColums from "../components/rows-of-columns.js"

const BlogPage = ({data}) => (
  <Layout>
    <div className={"container"}>
      <SEO title="Blog" keywords={[`marie`, `kiryanova`, 'blog', `react`, `gatsby`, `drupal`, `portfolio`]} />
      <h1 className="title">Blog</h1>

      <RowsOfColums columns={2} data={data.allNodeBlogPost.edges}
        render={ data => (
          <Link to={data.node.path.alias}>
            <div className="blog-teaser card">
              <div class="card-image">
                <Img fluid={data.node.relationships.field_hero_image.localFile.childImageSharp.fluid} />
              </div>
              <div class="card-content">
                <h2>{data.node.title}</h2>
                <span>{data.node.created}</span>
                <div class="content">
                  <ReactMarkdown source={data.node.body.summary} />
                </div>
              </div>
            </div>
          </Link>
      )}/>
    </div>
  </Layout>
)

export const query = graphql`
  query BlogPageQuery {
    allNodeBlogPost {
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
                  fluid(maxWidth: 1024, maxHeight: 576) {
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
export default BlogPage
