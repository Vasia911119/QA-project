import { graphql } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import { GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import i18next from 'i18next'
import PropTypes from 'prop-types'
import React from 'react'
import Form from '../components/Form'
import Breadcrumb from '../components/Breadcrumb'

import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

import { useTranslation } from 'gatsby-plugin-react-i18next'

const ComponentTemplate = ({ data }) => {
  // const { title } = data.markdownRemark.frontmatter
  // const { html } = data.markdownRemark
  const { i18n } = useTranslation()
  const edges = data.allMarkdownRemark.edges

  return (
    edges &&
    edges.map(item => {
      if (item.node.frontmatter.language === i18n.language) {
        return (
          // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
          <div className="w-full" key={item.node.frontmatter.title}>
            <Breadcrumb
              title={item.node.frontmatter.title}
              name={'Компоненти та функціональність'}
            />
            <div className="space-y-4 text-left">
              <h1 className="text-3xl leading-12 text-gray-800 lg:text-4xl lg:leading-14 mb-2">
                {item.node.frontmatter.title}
              </h1>
            </div>
            <HTMLContent
              className="prose max-w-none"
              content={item.node.html}
            />
            <Form />
          </div>
        )
      }
    })
  )
}

ComponentTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ComponentTemplate

export const query = graphql`
  query Page($description: String!, $language: String!) {
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
      filter: { frontmatter: { description: { eq: $description } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            language
          }
          html
        }
      }
    }
  }
`

// $slug: String!,
// markdownRemark(fields: { slug: { eq: $slug } }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         description
//         language
//       }
//       html
//     }
