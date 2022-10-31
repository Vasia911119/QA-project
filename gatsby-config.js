const siteUrl = 'https://gatsby-starter-netlify-tailwind.netlify.app/';
const title = 'QA test docs';
const description = 'Testing gatsby';
const logo = '/img/logo.png';
const srcLogo = 'src/images/logo.png';
const color = '#433e85';
const social = {
  twitter: '',
  instagram: '',
  youtube: '',
  github: '',
  linkedin: '',
};

require('dotenv').config({
  path: `.env`,
});
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    siteUrl,
    logo,
    title,
    description,
    color,
    social,
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `20`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `custom-class`,

              removeAccents: true,
              isIconAfterHeader: true,
              elements: ['h2', 'h3', `h4`],
            },
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              staticFolderName: 'static',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,

              linkImagesToOriginal: true,
              loading: 'lazy',
              showCaptions: true,
              disableBgImage: true,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title,
        language: 'en',
        description,
        canonical: siteUrl,
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: siteUrl,
          description,
          title,
          site_name: title,
        },
        twitter: {
          site: social.twitter,
          cardType: 'summary_large_image',
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.frontmatter.description,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] }
    //               filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    //             ) {
    //                   edges {
    //                   node {
    //                   html
    //                   fields { slug }
    //                   frontmatter {
    //                   title
    //                     description
    //                     date
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: 'Blog RSS Feed',
    //       },
    //     ],
    //   },
    // },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: title,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: color,
        display: `minimal-ui`,
        icon: srcLogo,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`uk`, `en`, `ru`],
        defaultLanguage: `uk`,
        generateDefaultLanguagePage: true,
        redirect: true,
        siteUrl: '',

        i18nextOptions: {
          lng: 'uk',
          load: 'currentOnly',
          interpolation: {
            escapeValue: false,
          },
          nsSeparator: true,
          keySeparator: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
          {
            allMarkdownRemark(filter: {frontmatter: {language: {in: ["uk", "en", "ru"]}}}) {
              nodes {
                id
                rawMarkdownBody
                fields {
                  slug
                }
                frontmatter {
                  description
                  language
                  title
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'body', 'description', 'slug'],
        store: ['id', 'slug', 'title', 'language', 'description'],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            slug: node.slug,
            title: node.frontmatter.title,
            language: node.frontmatter.language,
            description: node.frontmatter.description,
            body: node.rawMarkdownBody,
          })),
      },
    },
  ],
};
