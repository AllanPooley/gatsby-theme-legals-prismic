![Mockups of gatsby-theme-legals-prismic in action](https://raw.githubusercontent.com/AllanPooley/gatsby-theme-legals-demo/master/src/assets/images/gatsby-theme-legals-prismic-mockup.jpg)

# Gatsby Theme Legals Prismic

- [Gatsby](https://gatsbyjs.org) Theme for adding pretty legal pages.
- Responsive across Mobiles 📱, Tablets 💊 and Desktops 🖥️
- Builds legal pages sourced from content in [Prismic](https://prismic.io/).
- Demo at [https://gatsby-theme-legals.netlify.com/](https://gatsby-theme-legals.netlify.com/).
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
    repositoryName: PRISMIC_REPO_NAME,
    accessToken: PRISMIC_API_KEY,
    siteName: YOUR_SITE_NAME // (Optional)
    homePath: HOME_PATH // (Optional) Defaults to '/'
  },
},
```

Replacing `PRISMIC_REPO_NAME` and `PRISMIC_API_KEY` with their respective values.

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

In the `src` directory of your project, add a folder titled `gatsby-plugin-theme-ui`, and within that folder a file named `index.js`.

Inside of this file (`your-gatsby-project/src/gatsby-plugin-theme-ui/index.js`) add the following:

```
import merge from 'lodash.merge';
import { theme } from '@littleplusbig/gatsby-theme-legals-prismic';

export default merge({}, theme, {
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },
  colors: {
    text: "#333333",
    background: "#FFFFFF",
    primary: "#5B2589",
    primaryLighter: "#6F2B9F",
    primaryEvenLighter: "#BB75D1",
    offWhite: "#FCFAFF",
    offBlack: "#333333",
    grey: "#F3F3F3",
  },
});
```

Above are the default values for the theme, which you can change depending on your project.

In particular, the colours accenting each legal document are controlled by `primary`, `primaryLighter` and `primaryEvenLighter`.

This uses `lodash.merge`, so you'll need to add that package to your project:

```
yarn add lodash.merge
```

Every time you override the theme, you'll need to restart your Gatsby project's dev server.

### Components


## Markdown? Contentful? WordPress

Soon my friend, soon.
