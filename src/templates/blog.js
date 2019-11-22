import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout/layout"
import Img from "gatsby-image";
import SEO from "../components/utils/seo";

const HeadingRenderer = (props) => {
  const flatten = (text, child) => {
    return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
  }

  let children = React.Children.toArray(props.children)
  let text = children.reduce(flatten, '')
  let slug = text.toLowerCase().replace(/\W/g, '-')
  return React.createElement('h' + props.level, {id: slug}, props.children)
}

const BlogTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.nodeBlogPost.title} keywords={[`marie`, `kiryanova`, 'blog', `react`, `gatsby`, `drupal`, `portfolio`]} />

    <div className={"container blog-post"}>
      <h1 className="title">{data.nodeBlogPost.title}</h1>
      <span className="author-date">By Marie Kiryanova — Posted on {data.nodeBlogPost.created}</span>

      <div className="card blog-hero">
        <div className={"card-image"}>
          <Img fluid={data.nodeBlogPost.relationships.field_hero_image.localFile.childImageSharp.fluid}/>
        </div>
      </div>

      <div class="content">
        <ReactMarkdown source={data.nodeBlogPost.body.value} renderers={{heading: HeadingRenderer}} />
      </div>
    </div>
  </Layout>
)

export default BlogTemplate

export const query = graphql`
  query($slug: String!) {
    nodeBlogPost(path: {alias: {eq: $slug}}) {
      title,
      body {
        value
      }
      created(formatString: "MMMM Do, YYYY"),
      relationships {
        field_hero_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1280, maxHeight: 720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
