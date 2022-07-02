import React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BlogCard = (data) => (
  <Link to={data.node.path.alias}>
    <div className="blog-teaser card">
      <div className="card-image">
        <GatsbyImage image={data.node.relationships.field_hero_image.localFile.childImageSharp.gatsbyImageData} />
      </div>
      <div className="card-content">
        <h2>{data.node.title}</h2>
        <span>{data.node.created}</span>
        <div className="content">
          <ReactMarkdown>
            {data.node.body.summary}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  </Link>
)

export default BlogCard