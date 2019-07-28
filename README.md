# Gatsby Theme Legals

- [Gatsby](https://gatsbyjs.org) Theme for adding pretty legal pages.
- Builds legal pages sourced from content in [Prismic](https://prismic.io/).
- Demo at [https://www.littleandbig.com.au/](https://www.littleandbig.com.au/).
- Made by [Little & Big](https://www.littleandbig.com.au/)

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
  "Main" : {
    "page_name" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Page Name",
        "placeholder" : "Privacy Policy"
      }
    },
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "Slug",
        "placeholder" : "privacy-policy"
      }
    },
    "sections" : {
      "type" : "Group",
      "config" : {
        "fields" : {
          "section_heading" : {
            "type" : "StructuredText",
            "config" : {
              "single" : "heading2",
              "label" : "Section Heading",
              "placeholder" : "General information"
            }
          },
          "content" : {
            "type" : "StructuredText",
            "config" : {
              "multi" : "paragraph, preformatted, heading3, strong, em, hyperlink, list-item, o-list-item, o-list-item",
              "allowTargetBlank" : true,
              "label" : "Content",
              "placeholder" : "Information on this website is of a general nature. Our company has ..."
            }
          }
        },
        "label" : "Sections"
      }
    }
  },
  "SEO" : {
    "meta_title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "label" : "Meta Title",
        "placeholder" : "Enter meta title"
      }
    },
    "meta_description" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "paragraph",
        "label" : "Meta Description",
        "placeholder" : "Enter meta description"
      }
    },
    "open_graph_image" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : 1200,
          "height" : 630
        },
        "thumbnails" : [ ],
        "label" : "Open Graph Image"
      }
    }
  }
}
```

4. Create one or more `Legal` Content pages, each with 1 or more sections.

## Laying down the law

If you don't already have a Privacy Policy or Terms and Conditions document, you can generate one at [Iubenda](https://www.iubenda.com/).


## Overriding Default Styling
