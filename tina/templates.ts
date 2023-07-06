import type { TinaField } from "tinacms";
export function archetypesFields() {
  return [
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
      description: "No indicator. Always leave at false.",
    },
    {
      type: "string",
      name: "author",
      label: "Author",
      description: "Leaving it blank will default to \"Carl Gaspar\".",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      description: "Text below the title. Don't put period in the end.",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      description: "Text below the subtitle on the posts page.",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      description: "Not putting date will default to \"Mon, Jan 1, 0001\".",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      description: "This is the markdown body",
      isBody: true,
    },
    {
      type: "string",
      name: "header_img",
      label: "Header_img",
      description: "Leave it blank, \"/img/home-bg.jpg\" or custom image.",
    },
    {
      type: "boolean",
      name: "toc",
      label: "Toc",
      description: "Enable or disable catalog view.",
    },
    {
      type: "boolean",
      name: "math",
      label: "Math",
      description: "Enable or disable mathematical view.",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      description: "Use lowercase.",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
    },
    {
      type: "string",
      name: "series",
      label: "Series",
      list: true,
    },
    {
      type: "string",
      name: "aliases",
      label: "Aliases",
      list: true,
    },
    {
      type: "boolean",
      name: "short",
      label: "Short",
    },
  ] as TinaField[];
}
