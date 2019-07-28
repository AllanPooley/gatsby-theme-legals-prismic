import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark: legalPage } = data
  return (
    <Layout>
      <Helmet title={legalPage.frontmatter.title} />
      <div className="legal-page">
        <h1>{legalPage.frontmatter.title}</h1>
        <div
          className="legal-page-content"
          dangerouslySetInnerHTML={{ __html: legalPage.html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query LegalPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
