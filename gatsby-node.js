const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const webpack = require(`webpack`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "component" } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            templateKey
            description
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.nodes

    pages.forEach(page => {
      createPage({
        path: page.fields.slug,
        component: path.resolve(
          `src/templates/${String(page.frontmatter.templateKey)}.js`
        ),
        context: {
          slug: page.fields.slug,
          description: page.frontmatter.description,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     plugins: [
//       new webpack.IgnorePlugin({
//         resourceRegExp: /^netlify-identity-widget$/,
//       }),
//     ],
//   })
// }
