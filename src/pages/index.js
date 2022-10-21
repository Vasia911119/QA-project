import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from '../components/Breadcrumb'

import { useTranslation } from 'gatsby-plugin-react-i18next'

import { HTMLContent } from '../components/Content'

export default function HomePage({ data }) {
  const { edges: nodes } = data.allMarkdownRemark
  const { i18n } = useTranslation()

  const [initialLang, setInitialLang] = React.useState('')

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('gatsby-i18next-language')
      window.localStorage.setItem('gatsby-i18next-language', 'uk')
      const newLocalStorage = window.localStorage.getItem(
        'gatsby-i18next-language'
      )
      setInitialLang(newLocalStorage)
    }
  }, [])

  return (
    // не обгорнуто в компонент Layout так як використовується плагін gatsby-plugin-layout
    nodes &&
    nodes.map(({ node: component }) => {
      if (component.frontmatter.language === i18n.language) {
        return (
          <div className="w-[608px] mx-auto pt-[32px]" key={component.id}>
            <Breadcrumb title={component.frontmatter.title} />
            <div className="space-y-4 text-left">
              <h1 className="text-3xl leading-12 text-gray-800 lg:text-4xl lg:leading-14 mb-2">
                {component.frontmatter.title}
              </h1>
            </div>
            <HTMLContent
              className="prose max-w-none"
              content={component.html}
            />
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
