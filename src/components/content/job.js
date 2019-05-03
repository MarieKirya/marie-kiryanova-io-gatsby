import React from "react"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

import ProjectCard from "./project-card"
import RowsOfColums from "../rows-of-columns.js"

const Job = (props) => (
  <div className="job">
    <article className="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <Img fluid={props.node.relationships.field_logo.localFile.childImageSharp.fluid} />
        </p>
      </figure>
      <div className="media-content">
        <h2>{props.node.title}</h2>
        <h3 className="job-title">{props.node.field_title}</h3>
      </div>
    </article>

    <div className="content">
      <ReactMarkdown source={props.node.body.value} />
    </div>

    <h4>Projects</h4>

    <RowsOfColums columns={3} 
              data={props.node.relationships.field_projects} 
              render={ data => <ProjectCard node={data}/> }/>
  </div>
)

export default Job