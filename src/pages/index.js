import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import Form from '../components/Form'

import { useTranslation } from 'gatsby-plugin-react-i18next'

import { HTMLContent } from '../components/Content'

export default function HomePage({ data }) {
  const { edges: nodes } = data.allMarkdownRemark
  const { i18n } = useTranslation()

  return (
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
    nodes &&
    nodes.map(({ node: component }) => {
      if (component.frontmatter.language === i18n.language) {
        return (
          <div className="w-full" key={component.id}>
            <div className="space-y-4 text-left">
              <h1 className="text-3xl leading-12 text-gray-800 lg:text-4xl lg:leading-14 mb-2">
                {component.frontmatter.title}
              </h1>
            </div>
            <HTMLContent
              className="prose max-w-none"
              content={component.html}
            />
            <Form />
          </div>
        )
      }
    })
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home" } }, html: {} }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            language
          }
        }
      }
    }
  }
`
// markdownRemark(frontmatter: { templateKey: { eq: "home" } }, html: {}) {
//   id
//   html
//   frontmatter {
//     title
//   }
// }
