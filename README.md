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

## Laying down the law

If you don't already have a Privacy Policy or Terms and Conditions document, you can generate one at [Iubenda](https://www.iubenda.com/).


## Overriding Default Styling

## Markdown? Contentful? WordPress

Soon my friend, soon.
