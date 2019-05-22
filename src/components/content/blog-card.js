import React from "react"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"
import { Link } from "gatsby"

const BlogCard = (data) => (
  <Link to={data.node.path.alias}>
    <div className="blog-teaser card">
      <div className="card-image">
        <Img fluid={data.node.relationships.field_hero_image.localFile.childImageSharp.fluid} />
      </div>
      <div className="card-content">
        <h2>{data.node.title}</h2>
        <span>{data.node.created}</span>
        <div className="content">
          <ReactMarkdown source={data.node.body.summary} />
        </div>
      </div>
    </div>
  </Link>
)

export default BlogCard