import React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectCard = (props) => (
  <div class="project card">
    <div class="card-image">
      <GatsbyImage image={props.node.relationships.field_logo.localFile.childImageSharp.gatsbyImageData} />
    </div>
    <div class="card-content content">
      <h2>{props.node.title}</h2>

      <ReactMarkdown>
        {props.node.body.value}
      </ReactMarkdown>
      
      <div class="spacer"/>
      <div className="link">
        <a href={props.node.field_link.uri}>See {props.node.field_link.title}</a>
      </div>
      <div class="tags">
          { props.node.relationships.field_technologies.map(tech => (
            <span class="tag">{tech.name}</span>
          ))}
      </div>
    </div>
  </div>
  
)

export default ProjectCard 