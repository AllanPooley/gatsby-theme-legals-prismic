import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import LegalPageHero from "../components/LegalPageHero"
import LegalPageBody from "../components/LegalPageBody"

const LegalPageTemplate = (props) => {
  const {
    data: {
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
    <Layout title={pageTitle.text}>
      <LegalPageHero
        title={pageTitle.text}
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
