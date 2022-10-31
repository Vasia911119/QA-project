const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const webpack = require(`webpack`);
const slugHandler = require('./src/api/slugHandler');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { language: { regex: "/" } } }) {
        nodes {
          frontmatter {
            page_chapter_name
            slug
            language
            identifier
          }
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const pages = result.data.allMarkdownRemark.nodes;

    pages.forEach(page => {
      const language = page.frontmatter.language;
      const pagesChapterName = page.frontmatter.page_chapter_name;
      const slug = slugHandler(
        language,
        page.frontmatter.page_chapter_name,
        page.frontmatter.slug
      );
      const identifier = page.frontmatter.identifier;
      createPage({
        path: slug,
        component: path.resolve(`src/templates/component.js`),
        context: {
          slug,
          language,
          pagesChapterName,
          identifier,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (!!node.frontmatter && !!node.frontmatter.slug) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: slugHandler(
        node.frontmatter.language,
        node.frontmatter.page_chapter_name,
        node.frontmatter.slug
      ),
    });
  }
};

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     plugins: [
//       new webpack.IgnorePlugin({
//         resourceRegExp: /^netlify-identity-widget$/,
//       }),
//     ],
//   })
// }
