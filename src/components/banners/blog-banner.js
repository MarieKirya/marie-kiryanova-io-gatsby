import React from "react"

import RowsOfColumns from "../utils/rows-of-columns.js"
import BlogCard from "../content/blog-card"
import {StaticQuery, graphql, Link} from "gatsby";

const blogQuery = graphql`
  query BlogBannerQuery {
    allNodeBlogPost (
      sort: {
        fields: created
        order: DESC
      }
      limit: 2
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
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;

const BlogBanner = () => (
  <div className={"banner banner--blogs"}>
    <div className={"container"}>
      <h2 className={"banner-title"}>Blog</h2>

      <StaticQuery query={blogQuery} render={ (data) => (
        <RowsOfColumns columns={2} data={data.allNodeBlogPost.edges}
                       render={ (data) => <BlogCard node={data.node}/> }/>
      )}/>

      <Link to={'/blog'} className="button button--cta inversed"><span className="mdi mdi-pen"/> See More Blogs</Link>
    </div>
  </div>
);

export default BlogBanner
