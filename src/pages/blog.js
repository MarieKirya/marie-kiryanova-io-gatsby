import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" keywords={[`marie`, `kiryanova`, 'blog', `react`, `gatsby`, `drupal`, `portfolio`]} />
    <h1 className="title">Blog</h1>
    { data.allNodeBlogPost.edges.map((blogPost, index) => {
      return (
        <div className="blog-teaser">
          <Link to={blogPost.node.path.alias}>
            <h2>{blogPost.node.title}</h2>
          </Link>
        </div>
      );
    })}
  </Layout>
)

export const query = graphql`
  query BlogPageQuery {
    allNodeBlogPost {
      edges {
        node {
          title
          path {
            alias
          }
        }
      }
    }
  }
`
export default BlogPage
