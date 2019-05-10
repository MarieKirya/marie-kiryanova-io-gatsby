const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const basicPagesTemplate = path.resolve(`src/templates/basic-page.js`);
  const blogTemplate = path.resolve(`src/templates/blog.js`);

  // Query for recipe nodes to use in creating pages.
  return graphql(
    `
      {
        allNodeBasicPage {
          edges {
            node {
              id
              path {
                alias
              }
            }
          }
        }
        allNodeBlogPost {
          edges {
            node {
              id
              path {
                alias
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages for each basic page.
    result.data.allNodeBasicPage.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: basicPagesTemplate,
        context: {
          slug: node.path.alias,
        },
      })
    })

    result.data.allNodeBlogPost.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: blogTemplate,
        context: {
          slug: node.path.alias,
        },
      })
    })
  })
};