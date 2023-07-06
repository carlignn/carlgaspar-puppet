import { defineConfig } from "tinacms";
import { archetypesFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "dc4c3ed0-11ea-4222-846f-d229fe8b3ba4", // Get this from tina.io
  token: "87d470f58b169438876d6ea9eab6fcd40a407f13", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Series",
        name: "series",
        path: "content/series",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "content/posts",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          ...archetypesFields(),
        ],
      },
      {
        format: "md",
        label: "Archive",
        name: "archive",
        path: "content/archive",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "About",
        name: "about",
        path: "content/about",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: '920ea4cc4d2ccd48a46c731cd62fb797d95e3342 ',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
