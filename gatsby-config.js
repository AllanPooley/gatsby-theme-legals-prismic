module.exports = ({ prismicRepositoryName, prismicAccessToken }) => ({
  plugins: [
    'gatsby-theme-ui',
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
