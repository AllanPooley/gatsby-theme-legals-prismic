import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/common';
import {
  LegalPageHero,
  LegalPageBody,
} from '../components/legal';
import { Styled } from 'theme-ui';

const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return false
  for (var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i])
      return false
  }
  return true
}


class LegalPageTemplate extends Component {
  state = {
    sectionsInView: [],
  }

  sectionInViewHandler = ( sectionIndex, isInView ) => {
    const { sectionsInView } = this.state
    let newSectionsInView = [ ...sectionsInView ]
    const indexExists = newSectionsInView.includes(sectionIndex)
    if (isInView) {
      // Intersection Observer has notified us section has come into view
      // indexExists prevents us from adding duplicates
      if (!indexExists) newSectionsInView = [
        ...sectionsInView,
        sectionIndex,
      ]
    } else {
      // Intersection Observer has notified us section is now out of view
      newSectionsInView = sectionsInView.filter(index => index !== sectionIndex)
    }
    if (!arraysEqual(sectionsInView, newSectionsInView)) {
      // Only if a new section has come into, or an existing section has come
      // out of view, we update the state.
      this.setState({
        sectionsInView: newSectionsInView,
      })
    }

  }

  render() {
    const {
      sectionsInView,
    } = this.state
    // The 'active' section is the section closest to the top of the page that
    // are still in view (therefore, the smallest index in our array)
    const activeSection = sectionsInView.length > 0 ? sectionsInView.reduce((a, b) => Math.min(a, b)) : 0
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
      },
      location,
    } = this.props
    const {
      pageTitle,
      sections,
      metaTitle,
      metaDescription,
      openGraphImage,
    } = pageData;
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    };
    return (
      <Styled.root>
        <Layout
          location={location}
          seoData={seoData}
        >
          <LegalPageHero
            title={pageTitle.text}
            homePath={homePath}
            siteName={siteName}
          />
          <LegalPageBody
            activeSection={activeSection}
            sectionInViewHandler={this.sectionInViewHandler}
            sections={sections}
          />
        </Layout>
      </Styled.root>
    )
  }
}

export default LegalPageTemplate

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
`
