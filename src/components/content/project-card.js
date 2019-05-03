import React from "react"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

const ProjectCard = (props) => (
  <div class="project card">
    <div class="card-image">
      <Img fluid={props.node.relationships.field_logo.localFile.childImageSharp.fluid} />
    </div>
    <div class="card-content">
      <div class="content">
        <h2>{props.node.title}</h2>
        <ReactMarkdown source={props.node.body.value} />
        <div class="tags">
          { props.node.relationships.field_technologies.map(tech => (
            <span class="tag">{tech.name}</span>
          ))}
        </div>
        <div>
          <a href={props.node.field_link.uri}>See {props.node.field_link.title}</a>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard 