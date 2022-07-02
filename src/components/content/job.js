import React, {useState} from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage } from "gatsby-plugin-image"
import ProjectCard from "./project-card"
import RowsOfColums from "../utils/rows-of-columns.js"
import a11yKeyDown from "../../utilities/a11y-keydown"

const Job = ({node}) => {
  const [shown, setShown] = useState(false);
  const toggle = () => setShown(!shown);

  return (
    <div className="job">
      <article className="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <GatsbyImage image={node.relationships.field_logo.localFile.childImageSharp.gatsbyImageData} />
          </p>
        </figure>
        <div className="media-content">
          <h2>{node.title}</h2>
          <h3 className="job-title">{node.field_title}</h3>
        </div>
      </article>

      <div className="content">
        <ReactMarkdown>
          {node.body.value}
        </ReactMarkdown>
      </div>

      <button 
        className="button button--cta inversed" 
        onClick={() => { toggle() }}
        onKeyDown={a11yKeyDown(toggle)}
      >
        <span class="mdi mdi-wrench"/> 
        <h4>
          { shown ? 'Hide Projects' : 'Show Projects' }
        </h4>
      </button>

      {
        shown && <RowsOfColums  
          columns={3} 
          data={node.relationships.field_projects} 
          render={ data => <ProjectCard node={data}/> }
        />
      }
    </div>
  );
}


export default Job