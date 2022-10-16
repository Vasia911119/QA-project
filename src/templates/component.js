import { graphql } from 'gatsby'
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image'
import { GatsbySeo, ArticleJsonLd } from 'gatsby-plugin-next-seo'
// import { kebabCase } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

const ComponentTemplate = ({ pageContext }) => {
  const { title } = pageContext.node.frontmatter
  const { html } = pageContext.node

  return (
    <Layout>
      <div className="w-full">
        {/* <GatsbyImage
          image={getImage(featuredimage)}
          className="rounded-md object-cover w-full h-64 lg:h-96 mb-4 lg:mb-8"
          alt={title}
          title={title}
        /> */}
        <div className="space-y-4 text-left">
          <h1 className="text-3xl leading-12 text-gray-800 lg:text-4xl lg:leading-14 mb-2">
            {title}
          </h1>
        </div>
        <HTMLContent className="prose max-w-none" content={html} />
      </div>
    </Layout>
  )
}

ComponentTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ComponentTemplate

// export const pageQuery = graphql`
//   query MenuStructureQuery {
//     allMarkdownRemark(
//       limit: 1000
//       filter: { frontmatter: { templateKey: { eq: "component" } } }
//     ) {
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             description
//           }
//           html
//         }
//       }
//     }
//   }
// `

//   query BlogPostByID($id: String!) {
//     component: markdownRemark(id: { eq: $id }) {
//       id
//       html
//       fields {
//         slug
//       }
//       frontmatter {
//         date
//         title
//         featuredimage {
//           childImageSharp {
//             gatsbyImageData(
//               height: 200
//               placeholder: BLURRED
//               formats: [AUTO, WEBP, AVIF]
//               layout: CONSTRAINED
//             )
//           }
//         }
//         description
//       }
//     }
//     site {
//       siteMetadata {
//         title
//         siteUrl
//         social {
//           twitter
//         }
//       }
//     }
//   }
// `
