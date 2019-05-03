import React from "react"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"

import ProjectCard from "./project-card"
import RowsOfColums from "../rows-of-columns.js"


class Job extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: true,
    };
  } 
  
  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    var shown = {
      display: this.state.shown ? "block" : "none"
    };
    
    var hidden = {
      display: this.state.shown ? "none" : "block"
    }

    return (
        <div className="job">
          <article className="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <Img fluid={this.props.node.relationships.field_logo.localFile.childImageSharp.fluid} />
              </p>
            </figure>
            <div className="media-content">
              <h2>{this.props.node.title}</h2>
              <h3 className="job-title">{this.props.node.field_title}</h3>
            </div>
          </article>

          <div className="content">
            <ReactMarkdown source={this.props.node.body.value} />
          </div>

          <h4 style={ shown } onClick={this.toggle.bind(this)}>
            <span class="mdi mdi-plus"/> Projects
          </h4>
          <h4 style={ hidden } onClick={this.toggle.bind(this)}>
            <span class="mdi mdi-minus"/> Projects
          </h4>

          <RowsOfColums  style={ hidden } columns={3} 
                    data={this.props.node.relationships.field_projects} 
                    render={ data => <ProjectCard node={data}/> }/>
        </div>
    );
  }
}

export default Job