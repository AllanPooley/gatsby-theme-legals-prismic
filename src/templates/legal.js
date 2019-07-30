import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import LegalPageHero from "../components/LegalPageHero"
import LegalPageBody from "../components/LegalPageBody"
import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'

const LegalPageTemplate = (props) => {
  const {
    data: {
      site: {
        siteMetadata: {
          homePath,
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
    <ThemeProvider theme={theme}>
      <Layout title={pageTitle.text}>
        <LegalPageHero
          title={pageTitle.text}
          homePath={homePath}
          siteName={siteName}
        />
        <LegalPageBody
          sections={sections}
        />
      </Layout>
    </ThemeProvider>
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
        metaTitle: meta_title {
          html
          text
        },
        metaDescription: meta_description {
          html
          text
        },
        openGraphImage: open_graph_image {
          alt
          copyright
          url
        }
      }
    }
  }
`;
