import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  //clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,  
  // Get this from tina.io
  //token: process.env.TINA_TOKEN,
  
  clientId: '1208ea0a-0b3a-411f-ac83-84d68d8244f6',
  token: '4af77e44e8564675572afa7d0daec24cc90c3c86',

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
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "articles",
        label: "Articles",
        path: "content/news",
        format: "md",
        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            title: 'New Post',
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",            
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
          },
          {
            type: 'image',
            label: 'Preview',
            name: 'preview',
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: true,
            description: 'If this is checked the post will not be published',
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true,
          },
          {
            label: 'Categories',
            name: 'categories',
            type: 'string',
            list: true,
          },
          {
            type: 'image',
            label: 'Image',
            name: 'image',
          },
          {
            label: 'Images',
            name: 'images',
            type: 'string',            
          },
          {
            label: "Author_info",
            name: "author_info",
            type: "object",
            fields: [              
              {
                label: "Name",
                name: "name",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                label: "Image",
                name: "image",
                type: "image",
                required: true,
              },
                            
            ],
          },
          {
            type: 'string',
            name: 'type',
            label: 'Type',
            list: true,
            options: [
              {
                value: "regular",
                label: "Regular"
              }, {
                value: "featured",
                label: "Featured"
              }
            ]
          },
          // Begin
          
          // End                    
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
