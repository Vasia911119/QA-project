/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const webpack = require(`webpack`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "component" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              templateKey
            }
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))

      return Promise.reject(result.errors)
    }
    console.log(result)
    const componentData = result.data.allMarkdownRemark.edges

    componentData.forEach(({ node }) => {
      const { title, description } = node.frontmatter
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context: {
          node,
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
