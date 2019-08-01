module.exports = ({
  prismicRepositoryName,
  prismicAccessToken,
  siteName = null,
  homePath = '/',
}) => ({
  siteMetadata: {
    homePath,
    siteName,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: prismicRepositoryName,
        accessToken: prismicAccessToken,
        schemas: {
          legal: require('./src/schemas/legal.json'),
        },
      },
    },
  ],
})
