import { graphql } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import { GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
import PropTypes from 'prop-types'
import React from 'react'

import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

const ComponentTemplate = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
    <div className="w-full">
      <div className="space-y-4 text-left">
        <h1 className="text-3xl leading-12 text-gray-800 lg:text-4xl lg:leading-14 mb-2">
          {title}
        </h1>
      </div>
      <HTMLContent className="prose max-w-none" content={html} />
    </div>
  )
}

ComponentTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ComponentTemplate

export const query = graphql`
  query Page($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
      html
    }
  }
`
