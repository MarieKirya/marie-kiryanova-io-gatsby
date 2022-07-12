import { graphql } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/utils/seo";
import remarkGfm from "remark-gfm";

const HeadingRenderer = ({level, children}) => {
  const flatten = (text, child) => {
    return typeof child === 'string' ?
        text + child :
        React.Children.toArray(child.props.children).reduce(flatten, text)
  }

  const slug = React.Children.toArray(children)
      .reduce(flatten, '')
      .toLowerCase()
      .replace(/\W/g, '-')

  const Heading = 'h' + level;

  return <Heading id={slug}>
    {children}
  </Heading>
}


const BlogTemplate = ({ data }) => {
  const ImageRenderer = ({src, alt, title}) => {

    if (src.startsWith('attachment:')) {
      const attachmentIndex = parseInt(src.replace('attachment:', ''), 10) - 1;
      const attachments = data.nodeBlogPost.relationships.field_attachments;

      console.log(attachments)

      return <GatsbyImage
        alt={alt}
        image={
          attachments[attachmentIndex]
            .relationships
            .field_media_image
            .localFile
            .childImageSharp
            .gatsbyImageData
        }
      />;
    }

    return <img src={src} alt={alt} title={title}/>;
  }

  return (
    <Layout>
      <Seo title={data.nodeBlogPost.title} keywords={[`marie`, `kiryanova`, 'blog', `react`, `gatsby`, `drupal`, `portfolio`]} />

      <div className={"container blog-post"}>
        <h1 className="title">{data.nodeBlogPost.title}</h1>
        <span className="author-date">By Marie Kiryanova — Posted on {data.nodeBlogPost.created}</span>

        <div className="card blog-hero">
          <div className={"card-image"}>
            <GatsbyImage image={data.nodeBlogPost.relationships.field_hero_image.localFile.childImageSharp.gatsbyImageData}/>
          </div>
        </div>

        <div class="content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: HeadingRenderer,
              h2: HeadingRenderer,
              h3: HeadingRenderer,
              h4: HeadingRenderer,
              h5: HeadingRenderer,
              h6: HeadingRenderer,
              img: ImageRenderer,
            }}
          >
            {data.nodeBlogPost.body.value}
          </ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}


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
              gatsbyImageData(
                layout: FULL_WIDTH
              )
            }
          }
        }
        field_attachments {
          relationships {
            field_media_image {
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
`
