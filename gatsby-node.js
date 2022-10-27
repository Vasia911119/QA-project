const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const webpack = require(`webpack`)
const slugHandler = require('./src/api/slugHandler')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // return graphql(`
  //   {
  //     allMarkdownRemark(
  //       filter: { frontmatter: { templateKey: { eq: "component" } } }
  //     ) {
  //       nodes {
  //         fields {
  //           slug
  //         }
  //         frontmatter {
  //           slug
  //           templateKey
  //           description
  //           language
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {
  //   if (result.errors) {
  //     result.errors.forEach(e => console.error(e.toString()))
  //     return Promise.reject(result.errors)
  //   }

  // const pages = result.data.allMarkdownRemark.nodes

  // pages.forEach(page => {
  //   const language = page.frontmatter.language
  //   const templateKey = page.frontmatter.templateKey
  //   const description = page.frontmatter.description
  //   const slug = slugHandler(language, templateKey, page.frontmatter.slug)
  //   createPage({
  //     path: slug,
  //     component: path.resolve(
  //       `src/templates/${String(page.frontmatter.templateKey)}.js`
  //     ),
  //     context: {
  //       slug,
  //       description,
  //       language,
  //       templateKey,
  //     },
  //   })
  // })
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (!!node.frontmatter && !!node.frontmatter.slug) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: slugHandler(
        node.frontmatter.language,
        node.frontmatter.templateKey,
        node.frontmatter.slug
      ),
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
