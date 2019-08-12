![Mockups of gatsby-theme-legals-prismic in action](https://raw.githubusercontent.com/AllanPooley/gatsby-theme-legals-demo/master/src/assets/images/gatsby-theme-legals-prismic-mockup.jpg)

# Gatsby Theme Legals Prismic

- [Gatsby Theme](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) for adding polished legal pages 💅out-of-the-box.
- Responsive across Mobiles 📱, Tablets 💊 and Desktops 🖥️
- Customisable to your brand using [Theme UI](https://theme-ui.com/) 🎨
- Builds legal pages sourced from content in [Prismic](https://prismic.io/)
- Demo at [https://gatsby-theme-legals.netlify.com/](https://gatsby-theme-legals.netlify.com/)
- Made by [Little & Big](https://www.littleandbig.com.au/)

## Why?

Legal pages are probably the most unexciting part of your site, and the last place you want to expend your creative energy.

The purpose of `gatsby-theme-legals` is to do the heavy lifting for you. Super polished, responsive legal pages that you can just plug onto your existing project.

## Installation

```
yarn add @littleplusbig/gatsby-theme-legals-prismic
```

## Configuration

In your `gatsby-config.js`, under `plugins` add:

```
{
  resolve: "gatsby-theme-legals-prismic",
  options: {
    prismicRepositoryName: PRISMIC_REPO_NAME,
    prismicAccessToken: PRISMIC_API_KEY,
    siteName: YOUR_SITE_NAME, // (Optional)
    homePath: HOME_PATH // (Optional) Defaults to '/'
  },
},
```

Replacing `PRISMIC_REPO_NAME`, `PRISMIC_API_KEY`, `YOUR_SITE_NAME` and `HOME_PATH` with their respective values.

## Prismic Configuration

1. Create a new custom type in your Prismic repository.
2. Make sure that it is repeatable and name it `Legal`.
3. Using the JSON Editor paste in the following content structure:

```
{
  "Main": {
    "page_name": {
      "type": "StructuredText",
      "config": {
        "single": "heading1",
        "label": "Page Name",
        "placeholder": "Privacy Policy"
      }
    },
    "uid": {
      "type": "UID",
      "config": {
        "label": "Slug",
        "placeholder": "privacy-policy"
      }
    },
    "sections": {
      "type": "Group",
      "config": {
        "fields": {
          "section_heading": {
            "type": "StructuredText",
            "config": {
              "single": "heading2",
              "label": "Section Heading",
              "placeholder": "General information"
            }
          },
          "content": {
            "type": "StructuredText",
            "config": {
              "multi": "paragraph, preformatted, heading3, strong, em, hyperlink, list-item, o-list-item, o-list-item",
              "allowTargetBlank": true,
              "label": "Content",
              "placeholder": "Information on this website is of a general nature. Our company has ..."
            }
          }
        },
        "label": "Sections"
      }
    }
  }
}
```

4. Create one or more `Legal` Content pages, each with 1 or more sections.

## Laying Down the Law

If you don't already have a Privacy Policy or Terms and Conditions document, you can generate one at [Iubenda](https://www.iubenda.com/).

## Overriding the Theme

### Colors and Styles

This project uses [theme-ui](https://theme-ui.com/), allowing some of the styling to be customised to your project's brand.

In order to override the styles, in the `src` directory of your project, add a folder titled `gatsby-plugin-theme-ui`, and within that folder a file named `index.js`.

Inside of this file (`your-gatsby-project/src/gatsby-plugin-theme-ui/index.js`) add the following:

```
import baseTheme from '@littleplusbig/gatsby-theme-legals-prismic/src/gatsby-plugin-theme-ui';

export default {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  colors: {
    ...baseTheme.colors,
    text: '#333333',
    background: '#FFFFFF',
    primary: '#5B2589',
    primaryLighter: '#6F2B9F',
    primaryEvenLighter: '#BB75D1',
    white: '#FFFFFF',
    offWhite: '#FCFAFF',
    black: '#000000',
    offBlack: '#333333',
    grey: '#F3F3F3',
  },
};

```

Above are the default values for the theme, which you can change depending on your project.

In particular, the colours accenting each legal page are controlled by `primary`, `primaryLighter` and `primaryEvenLighter`.

For example, here is how I might change the theme colours from shades of purple, to a snazzy blue:

```
import baseTheme from '@littleplusbig/gatsby-theme-legals-prismic/src/gatsby-plugin-theme-ui';

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#22a6b3',
    primaryLighter: '#7ed6df',
    primaryEvenLighter: '#c7ecee',
  },
};

```

![An example of a theme color change](https://raw.githubusercontent.com/AllanPooley/gatsby-theme-legals-demo/master/src/assets/images/gatsby-theme-legals-prismic-mockup-color-change.jpg)

The complete set of customisable theme values can be explored in [gatsby-theme-legals-prismic/src/styles/theme.js](https://github.com/littleplusbig/gatsby-theme-legals-prismic/blob/master/src/styles/theme.js)

More information about `gatsby-plugin-theme-ui` [here](https://www.npmjs.com/package/gatsby-plugin-theme-ui).

### Components

The components that make up the legal pages can be some what customised too. This can be done through concept new to Gatsby Themes called '[Component Shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)'.

If you wish to override a component, in the `src` directory of your project, create the following directory structure: `@littleplusbig/gatsby-theme-legals-prismic/components`.

There are several components that a legal page, they can all be viewed here: [gatsby-theme-legals-prismic/src/components](https://github.com/littleplusbig/gatsby-theme-legals-prismic/tree/master/src/components)

An example of how these components might be customised is adding your project's `<Header />` and `<Footer />` components to the layout.

In order to do this I create a shadowing `layout.js` in the directory we've just created (`your-gatsby-project/src/@littleplusbig/gatsby-theme-legals-prismic/components/layout.js`):

```
import React from 'react';
import { Header, Footer } from '../../somewhere-in-your-project'

export default ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
```

## Markdown? Contentful? WordPress?

Soon my friend, soon.
