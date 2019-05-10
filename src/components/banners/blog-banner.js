import React from "react"

import RowsOfColumns from "../utils/rows-of-columns.js"
import BlogCard from "../content/blog-card"
import {StaticQuery, graphql} from "gatsby";

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
`;

const BlogBanner = () => (
  <div className={"banner banner--blogs"}>
    <div className={"container"}>
      <h3>Blog</h3>

      <StaticQuery query={blogQuery} render={ (data) => (
        <RowsOfColumns columns={2} data={data.allNodeBlogPost.edges}
                       render={ (data) => <BlogCard node={data.node}/> }/>
      )}/>
    </div>
  </div>
);



export default BlogBanner
