module.exports = ({ contentPath = "legals", basePath = "/" }) => ({
  plugins: [
    'gatsby-theme-ui',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "legals",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
})
