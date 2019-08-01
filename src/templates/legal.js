import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import LegalPageHero from "../components/LegalPageHero"
import LegalPageBody from "../components/LegalPageBody"

const LegalPageTemplate = (props) => {
  const {
    data: {
      site: {
        siteMetadata: {
          homePath = '/',
          siteName,
        },
      },
      page: {
        data: pageData,
      },
    }
  } = props;
  const {
    pageTitle,
    sections,
  } = pageData;
  return (
    <Layout
      siteName={siteName}
      title={pageTitle.text}
    >
      <LegalPageHero
        title={pageTitle.text}
        homePath={homePath}
        siteName={siteName}
      />
      <LegalPageBody
        sections={sections}
      />
    </Layout>
  )
}

export default LegalPageTemplate;

export const pageQuery = graphql`
  query LegalPageBySlug($uid: String!) {
    site {
      siteMetadata {
        siteName,
        homePath,
      }
    },
    page: prismicLegal(uid: { eq: $uid }) {
      data {
        pageTitle: page_name {
          text
        }
        sections {
          content {
            html
          }
          sectionHeading: section_heading {
            text
          }
        }
      }
    }
  }
`;
