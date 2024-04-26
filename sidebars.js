/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [

    // {
    //   type: 'doc',
    //   id: 'index', // document ID
    //   label: 'Home', // sidebar label
    // },
    {
      type: 'html',
      value: 'Getting started',
      className: 'utils-mb-10 utils-fontWeight-600 utils-fontSize-sm utils-opacity-50',
    },
    {
      type: 'html',
      value: 'Scan your documents<br> in 3 no-code steps',
      className: 'utils-fontWeight-600 utils-lineHeight-normal',
    },
     
    {
      type: 'category',
      label: '1. Set up a new AI model',
      items: [
        {
          type: 'autogenerated',
          dirName: 'create', // Generate sidebar slice from docs/preliminaries
        }
      ],
    },
    {
      type: 'category',
      label: '2. Train your new AI model',
      items: [
        {
          type: 'autogenerated',
          dirName: 'train', // Generate sidebar slice from docs/get-started
        }
      ],
    },
    {
      type: 'category',
      label: '3. Test your model',
      items: [
        {
          type: 'autogenerated',
          dirName: 'test', // Generate sidebar slice from docs/human-in-the-loop
        }
      ],
    },
    {
      type: 'html',
      value: 'Bring your model<br> into your organization',
      className: 'utils-fontWeight-600 utils-lineHeight-normal utils-mt-8',
    },
    // {
    //   type: 'category',
    //   label: "Triggers",
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'integrations', // Generate sidebar slice from docs/get-started
    //     }
    //   ],
    // },

    {
      type: 'category',
      label: "Integrations",
     // collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrations', // Generate sidebar slice from docs/get-started
        }
      ],
    },
    // {
    //   type: 'category',
    //   label: "Export",
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'integrations', // Generate sidebar slice from docs/get-started
    //     }
    //   ],
    // },
    {
      type: 'html',
      value: '<hr>',
    },
    {
    type: 'category',
    label: 'API Reference',
    items: [
      {
        type: 'autogenerated',
        dirName: 'reference', // Generate sidebar slice from docs/get-started
      }
    ],
  },
    {
      type: 'doc',
      id: 'changelog', // document ID
      label: 'Changelog', // sidebar label
     },
     {
      type: 'html',
      value: '<hr>',
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        {
          type: 'autogenerated',
          dirName: 'legal', // Generate sidebar slice from docs/human-in-the-loop
        }
      ],
    },

    
  ]
};

export default sidebars;
